import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company) private companyModel: typeof Company){}

    async create(createCompanyDto:CreateCompanyDto): Promise<Company>{
        // return this.companyModel.create(createCompanyDto)
        const company = await this.companyModel.create(createCompanyDto)
        return company
    }

    async findAll():Promise<Company[]>{
        return this.companyModel.findAll({include:{all:true}})
    }

    async findOne(id:number):Promise<Company | null>{
        return this.companyModel.findByPk(id)
    }

    async updateCompany(id:number, updateCompanyDto:UpdateCompanyDto):Promise<Company | null>{
        const updatedCompany = await this.companyModel.update(updateCompanyDto,
            {where:{id},
        returning:true}
        )

        return updatedCompany[1][0]
    }

    async delete(id:number){
        const deletedCompany = await this.companyModel.destroy({where:{id}})

        return deletedCompany
    }
}
