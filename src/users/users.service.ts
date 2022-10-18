import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id: number): Promise<User[]> {
    return await this.userRepository.find({
      select: ['firstname', 'lastname', 'email'],
      where: [{ id }],
    });
  }

  saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  deleteUser(id: number): void {
    this.userRepository.delete(id);
  }
}
