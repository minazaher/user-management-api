import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Service responsible for user-related operations
 * @public
 */

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  /**
   * Creates a new user
   * @param createUserDto - User creation data
   * @returns The created user
   * @throws ConflictException if email already exists
   */
  async create(createUserDto: CreateUserDto) {
    const exists = await this.userModel.findOne({ email: createUserDto.email });
    if (exists) throw new ConflictException('Email exists');
    const user = new this.userModel(createUserDto);
    return user.save();
  }


  /**
   * Finds all users
   * @returns Array of all users
   */
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

   /**
   * Finds a single user by ID
   * @param id - MongoDB ObjectId
   * @returns The found user or null
   * @throws NotFoundException if user doesn't exist
   */
  async findUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return user;
  }

   /**
   * updates a single user by ID
   * @param updateUserDto - user updated data
   * @returns the user after update
   * @throws NotFoundException if user doesn't exist
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  /**
   * Finds all users
   * @returns User Deleted
   * @throws NotFoundException if user doesn't exist
   */
  async remove(id: string): Promise<void> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
}
