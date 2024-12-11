import { Matches, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUrlDto {
  @Matches(
    /^https?:\/\/[a-zA-Z0-9-_.]+\.[a-zA-Z]{1,}(?:\/[^\s]*)?(?:\?[^\s]*)?(?:#[^\s]*)?$/,
    {
      message: 'Please enter a valid URL starting with http:// or https://',
    },
  )
  @IsNotEmpty({
    message: 'URL cannot be empty',
  })
  @MinLength(8, {
    message: 'URL is too short (minimum 8 characters)',
  })
  @MaxLength(2000, {
    message: 'URL is too long (maximum 2000 characters)',
  })
  originalUrl: string;
}
