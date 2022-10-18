import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User): Promise<User> {
    return await this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: User): Promise<User> {
    return await this.authService.register(user);
  }
}
