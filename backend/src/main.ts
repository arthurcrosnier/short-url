import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for the frontend URL and localhost
  app.enableCors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5173'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 204,
    credentials: false,
  });

  app.useGlobalPipes(new ValidationPipe());

  if (process.env.NODE_ENV === 'production') {
    await app.init();
    const server = app.getHttpServer();
    return server;
  } else {
    await app.listen(process.env.PORT || 3000);
  }
}

export default bootstrap();
