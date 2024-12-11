// /src/modules/shortener/shortener.module.ts

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenerController } from './shortener.controller';
import { ShortenerService } from './shortener.service';
import { ShortUrl } from './entities/short-url.entity';
import { RateLimitMiddleware } from '../../common/middlewares/rate-limit.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([ShortUrl])],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class ShortenerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RateLimitMiddleware).forRoutes(ShortenerController);
  }
}
