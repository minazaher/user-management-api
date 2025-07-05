import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, Min, IsOptional } from 'class-validator';


export class UpdateUserDto {

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'John Doe', description: 'User full name' })
  username: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiProperty({ minimum: 0, example: 25 })
  age: number;
}
