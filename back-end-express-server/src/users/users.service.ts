import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './Models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>,
  ) {}

  async findOne(username: string): Promise<UserModel | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  async create(user: UserModel): Promise<UserModel> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}
