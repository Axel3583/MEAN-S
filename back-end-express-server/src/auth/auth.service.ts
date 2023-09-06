import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user || user.password !== pass) {
      console.log('Credentials incorrects :)');
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return {
      ...result,
      password,
      roles: user.roles,
    };
  }
}
