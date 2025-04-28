import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './models/employee.model';
import { CompanyService } from '../company/company.service';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee) private employeeModel: typeof Employee,
      private readonly companyService: CompanyService
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const {companyId} = createEmployeeDto
    const company = await this.companyService.findOneCompany(companyId)
    if(!company){
      throw new BadRequestException("Bunday kompaniya mavjud emas")
    } 
    return this.employeeModel.create(createEmployeeDto)
  }

  findAll() {
    return this.employeeModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.employeeModel.findByPk(id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.update(updateEmployeeDto, {where:{id}, returning:true});
  }

  remove(id: number) {
    return this.employeeModel.destroy({where:{id}});
  }
}
