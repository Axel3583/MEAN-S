import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './Schema/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(signUpDto: {
    username: string;
    password: string;
  }): Promise<{ token: string }> {
    const { username, password } = signUpDto;

    try {
      // Étape 1 : Vérifie si l'utilisateur existe déjà
      const existingUser = await this.userModel.findOne({ username }).exec();
      if (existingUser) {
        throw new ConflictException('Cet utilisateur existe déjà.');
      }

      // Étape 2 : Hashe le mot de passe pour le stockage sécurisé
      const hashedPassword = await bcrypt.hash(password, 10);

      // Étape 3 : Crée un nouvel utilisateur avec le nom d'utilisateur et le mot de passe hashé
      const newUser = new this.userModel({
        username,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();

      // Étape 4 : Génére un jeton JWT (JSON Web Token) pour l'utilisateur
      const token = this.jwtService.sign({ sub: savedUser._id });

      // Étape 5 : Retourne le jeton JWT pour une utilisation ultérieure
      return { token };
    } catch (error) {
      // Gére les erreurs possibles ici (par exemple, erreurs de validation, erreurs de base de données)
      throw error;
    }
  }
}
