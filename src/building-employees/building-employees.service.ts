import { Injectable } from '@nestjs/common';
import { CreateBuildingEmployeeDto } from './dto/create-building-employee.dto';
import { UpdateBuildingEmployeeDto } from './dto/update-building-employee.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BuildingEmployee } from './models/building-employee.model';

@Injectable()
export class BuildingEmployeesService {
  constructor(@InjectModel(BuildingEmployee) private buildingEmployeeModel:typeof BuildingEmployee){}
  
  create(createBuildingEmployeeDto: CreateBuildingEmployeeDto) {
    return this.buildingEmployeeModel.create(createBuildingEmployeeDto)
  }

  findAll() {
    return this.buildingEmployeeModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingEmployee`;
  }

  update(id: number, updateBuildingEmployeeDto: UpdateBuildingEmployeeDto) {
    return `This action updates a #${id} buildingEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingEmployee`;
  }
}
