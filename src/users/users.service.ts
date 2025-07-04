// users.service.ts
import { Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.idCounter++,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;``
  }

  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User | undefined {
    const user = this.findUserById(id);
    if (user) {
        Object.assign(user, updateUserDto);
    }
    return user;
  }

  remove(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
