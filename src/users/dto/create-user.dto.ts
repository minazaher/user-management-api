import { IsString, IsEmail, IsInt, Min } from 'class-validator';


export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  age: number;
}
