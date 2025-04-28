import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService:CompanyService){}

    @Post()
    async create(@Body() creatCompanyDto:CreateCompanyDto):Promise<Company>{
        return this.companyService.create(creatCompanyDto)
    }

    @Get()
    async findAll(){
        return this.companyService.findAll()
    }

    @Get(":id")
    async findOne(@Param("id") id:string){
        return this.companyService.findOne(+id)
    }

    @Put(":id")
    async updateCompany(@Param("id") id:string, @Body() updateCompanyDto:UpdateCompanyDto){
        return this.companyService.updateCompany(+id, updateCompanyDto)
    }

    @Delete(":id")
    async delete(@Param("id") id:string){
        return this.companyService.delete(+id)
    }
}
