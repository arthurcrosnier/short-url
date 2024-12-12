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

    let shortCode = '';
    let shortUrlExists = true;

    for (let i = 0; i < 50; i++) {
      shortCode = await this.generateShortCode();
      const existingShortUrl = await this.shortUrlRepository.findOne({
        where: { shortCode },
      });
      if (!existingShortUrl) {
        shortUrlExists = false;
        break;
      }
    }
    if (shortUrlExists) {
      throw new Error('Failed to generate a unique short code');
    }

    const shortUrl = this.shortUrlRepository.create({
      originalUrl: createUrlDto.originalUrl,
      shortCode,
      visits: 0,
    });

    return this.shortUrlRepository.save(shortUrl);
  }

  async findOne(shortCode: string): Promise<ShortUrl> {
    const shortUrl = await this.shortUrlRepository.findOne({
      where: { shortCode },
    });

    if (!shortUrl) {
      throw new NotFoundException('URL not found');
    }

    shortUrl.visits += 1;
    await this.shortUrlRepository.save(shortUrl);

    return shortUrl;
  }
}
