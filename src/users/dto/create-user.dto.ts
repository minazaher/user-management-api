import { IsString, IsEmail, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {

  @IsString()
  @ApiProperty({ example: 'John Doe', description: 'User full name' })
  name: string;

  @IsEmail()
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @IsInt()
  @Min(0)
  @ApiProperty({ minimum: 0, example: 25 })
  age: number;
}
