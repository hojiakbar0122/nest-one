import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './models/employee.model';
import { CompanyModule } from '../company/company.module';

@Module({
  imports:[SequelizeModule.forFeature([Employee]), CompanyModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
