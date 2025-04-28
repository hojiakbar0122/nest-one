import { Injectable } from '@nestjs/common';
import { CreateMashineDriverDto } from './dto/create-mashine-driver.dto';
import { UpdateMashineDriverDto } from './dto/update-mashine-driver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MashineDriver } from './models/mashine-driver.model';

@Injectable()
export class MashineDriverService {
  constructor(@InjectModel(MashineDriver) private mashineDriverModel:typeof MashineDriver){}
  create(createMashineDriverDto: CreateMashineDriverDto) {
    return this.mashineDriverModel.create(createMashineDriverDto)
  }

  findAll() {
    return this.mashineDriverModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} mashineDriver`;
  }

  update(id: number, updateMashineDriverDto: UpdateMashineDriverDto) {
    return `This action updates a #${id} mashineDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} mashineDriver`;
  }
}
