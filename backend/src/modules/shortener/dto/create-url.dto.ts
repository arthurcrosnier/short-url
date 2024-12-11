// /src/modules/shortener/dto/create-url.dto.ts
import { IsUrl, IsNotEmpty } from 'class-validator';

export class CreateUrlDto {
  @IsUrl()
  @IsNotEmpty()
  originalUrl: string;
}
