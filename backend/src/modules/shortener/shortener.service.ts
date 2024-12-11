// /src/modules/shortener/shortener.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShortUrl } from './entities/short-url.entity';
import { CreateUrlDto } from './dto/create-url.dto';
import { customAlphabet } from 'nanoid';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectRepository(ShortUrl)
    private shortUrlRepository: Repository<ShortUrl>,
  ) {}

  private async generateShortCode(): Promise<string> {
    const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 6);
    return nanoid();
  }

  async create(createUrlDto: CreateUrlDto): Promise<ShortUrl> {
    const existingUrl = await this.shortUrlRepository.findOne({
      where: { originalUrl: createUrlDto.originalUrl },
    });

    if (existingUrl) {
      return existingUrl;
    }
    const shortCode = await this.generateShortCode();
    const shortUrl = this.shortUrlRepository.create({
      originalUrl: createUrlDto.originalUrl,
      shortCode,
      visits: 0,
    });
    return this.shortUrlRepository.save(shortUrl);
  }
}
