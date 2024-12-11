// /src/modules/shortener/shortener.controller.ts
import { Controller, Post, Get, Body, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ShortenerService } from './shortener.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Get(':shortCode')
  async findOne(@Req() req: Request, @Res() res: Response) {
    const shortCode = req.params.shortCode;
    if (!shortCode || shortCode.length !== 6) {
      return res.status(400).send('Invalid short code');
    }
    const shortUrl = await this.shortenerService.findOne(shortCode);

    if (shortUrl) {
      return res.redirect(301, shortUrl.originalUrl);
    }
    return res.status(404).send('URL not found');
  }

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto, @Req() req: Request) {
    const shortUrl = await this.shortenerService.create(createUrlDto);
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    return {
      originalUrl: shortUrl.originalUrl,
      shortUrl: `${baseUrl}/shortener/${shortUrl.shortCode}`,
      shortCode: shortUrl.shortCode,
    };
  }
}
