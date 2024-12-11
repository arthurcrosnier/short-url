// /src/modules/shortener/shortener.controller.ts
import { Controller, Post, Get, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { ShortenerService } from './shortener.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto, @Req() request: Request) {
    const shortUrl = await this.shortenerService.create(createUrlDto);
    const baseUrl = `${request.protocol}://${request.get('host')}`;

    return {
      originalUrl: shortUrl.originalUrl,
      shortUrl: `${baseUrl}/shortener/${shortUrl.shortCode}`,
      shortCode: shortUrl.shortCode,
    };
  }
}
