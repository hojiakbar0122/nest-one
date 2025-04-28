import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Driver } from './models/driver.model';

@Module({
  imports:[SequelizeModule.forFeature([Driver])],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
