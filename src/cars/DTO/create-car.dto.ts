import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `modelo debe de ser sting` })
  readonly brand: string;

  @IsString()
  readonly model: string;
}
