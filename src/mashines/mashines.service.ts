import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMashineDto } from './dto/create-mashine.dto';
import { UpdateMashineDto } from './dto/update-mashine.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Mashine } from './models/mashine.model';
import { CompanyService } from '../company/company.service';
import { FileService } from '../file/file.service';

@Injectable()
export class MashinesService {
  constructor(@InjectModel(Mashine) private mashineModel: typeof Mashine,
      private readonly companyService: CompanyService,
      private readonly fileService: FileService
  ){}
  async create(createMashineDto: CreateMashineDto, image:any) {
    const {companyId} = createMashineDto
    const company = await this.companyService.findOne(companyId)
    if(!company){
      throw new BadRequestException("Bunday kompaniya mavjud emas")
    } 
    const fileName = await this.fileService.saveFile(image)
    return this.mashineModel.create({...createMashineDto, image:fileName})
  }

  findAll() {
    return this.mashineModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.mashineModel.findByPk(id);
  }

  update(id: number, updateMashineDto: UpdateMashineDto) {
    return this.mashineModel.update(updateMashineDto, {where:{id}});
  }

  remove(id: number) {
    return this.mashineModel.destroy({where:{id}});
  }
}
