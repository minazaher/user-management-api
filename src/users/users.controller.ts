import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import {User} from 'src/users/schema/user.schema'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // route POST /users
  @Post()
  @HttpCode(HttpStatus.CREATED) 
  @ApiResponse({ status: 409, description: 'Email conflict' })
  @ApiResponse({ status: 201, type: User })
  @ApiResponse({ status: 400, description: 'Validation error' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // route GET /users
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all users'})
  findAll() {
    return this.usersService.findAll();
  }

  // route GET /users/id 
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
  status: 404,
  description: 'User not found'
  })
    @ApiResponse({
    status: 200,
    description: 'User found'
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  // route PUT /users/id
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
  status: 404,
  description: 'User not found'
  })
  @ApiResponse({
    status: 200,
    description: 'User Updated'
  })
  update(
    @Param('id')  id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  // route DELETE /users/:id
  @Delete(':id')
  @ApiResponse({
  status: 404,
  description: 'User not found'
  })
  @ApiResponse({
    status: 204,
    description: 'User Removed'
  })
  @HttpCode(HttpStatus.NO_CONTENT) // Proper No Content status
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
    return { message: 'User removed' };
  }
}
