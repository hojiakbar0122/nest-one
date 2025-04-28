import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private readonly roleModel: typeof Role){}

  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create(createRoleDto)
  }

  findAll() {
    return this.roleModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  findByValue(value: string) {
    return this.roleModel.findOne({where:{value:value}});
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
