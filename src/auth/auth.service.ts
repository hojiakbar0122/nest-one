import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import *as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
import { User } from "../users/models/user.model";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService,
    private readonly jwtService:JwtService
  ) {}

  private async generateTokens(user:User){
    const payload = {
        id:user.id,
        email:user.email,
        roles:user.roles,
        is_active:user.is_active
    }

    return {token:this.jwtService.sign(payload)}
  }

  async signUp(createUserDto: CreateUserDto) {
    // const candidate = await this.userService.findByEmail(createUserDto.email);
    // console.log(candidate);
    
    
    // if (!candidate) {
    // //   throw new HttpException(
    // //     "Bunday emailli foydalanuvchi mavjud",
    // //     HttpStatus.BAD_REQUEST
    // //   );
    //   throw new BadRequestException("Bunday emailli foydalanuvchi mavjud")
    // }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7)
    createUserDto.password = hashedPassword
    const newUser = await this.userService.create(createUserDto)
    return newUser
  }

  async signIn(signInDto:SignInDto){
    
    const user = await this.userService.findByEmail(signInDto.email)
    const hasRole = await this.userService.findRole(signInDto)
    
    
    
    if(!user){
        throw new UnauthorizedException("Email yoki parol noto'g'ri")
    }
    const validPassword = await bcrypt.compare(signInDto.password, user.password)
    if(!validPassword){
        throw new UnauthorizedException("Email yoki parol noto'g'ri")
    }

    if(!hasRole){
      throw new UnauthorizedException("Sizda bunday role yo'q")
    }

    return this.generateTokens(user)
  }
}
