import { Controller, Get } from '@nestjs/common';

@Controller('shortener')
export class ShortenerController {
  @Get()
  async hello() {
    return 'Hello World';
  }
}
