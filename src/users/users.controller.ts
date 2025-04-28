import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { JwtSelfGuard } from '../common/guards/jwt-self.guard';
import { Roles } from '../common/decorators/roles-auth.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @HttpCode(HttpStatus.OK)
  @Roles("admin", "superadmin")
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post("add-role")
  async addRole(@Body() addRoleDto:AddRoleDto){
    return this.usersService.addRole(addRoleDto)
  }

  @HttpCode(HttpStatus.OK)
  @Post("remove-role")
  async removeRole(@Body() addRoleDto:AddRoleDto){
    return this.usersService.removeRole(addRoleDto)
  }

  @HttpCode(HttpStatus.OK)
  @Post("activate-user")
  async activateUser(@Body() activateUserDto:ActivateUserDto){
    return this.usersService.activateUser(activateUserDto)
  }
}
