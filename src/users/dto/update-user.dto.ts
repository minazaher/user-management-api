import { IsString, IsEmail, IsInt, Min, IsOptional } from 'class-validator';


export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  age: number;
}
