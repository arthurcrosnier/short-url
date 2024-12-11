// /src/modules/shortener/shortener.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenerController } from './shortener.controller';
import { ShortenerService } from './shortener.service';
import { ShortUrl } from './entities/short-url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortUrl])],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class ShortenerModule {}
