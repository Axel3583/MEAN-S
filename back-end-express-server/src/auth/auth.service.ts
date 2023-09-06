import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/users/Models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  bcrypt = require('bcrypt');
  saltRounds = 10;
  myPlaintextPassword = 's0//P4$$w0rD';
  someOtherPlaintextPassword = 'not_bacon';

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user || !(await this.bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Identifiants incorrects.');
    }

    // Générez un token JWT pour l'utilisateur
    const payload = { username: user.username, sub: UserModel._id };
    const accessToken = this.jwtService.sign(payload);

    return { access_token: accessToken };
  }

  async createUser(username: string, password: string): Promise<UserModel> {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await this.usersService.findOne(username);
    if (existingUser) {
      throw new ConflictException('Cet utilisateur existe déjà.');
    }

    // Créer un nouvel utilisateur
    const newUser = new UserModel();
    newUser.username = username;
    newUser.password = await this.bcrypt.hash(password, 10); // Hasher le mot de passe avant de le stocker

    return this.usersService.create(newUser);
  }
}
