import { Module } from '@nestjs/common';
import { MashineDriverService } from './mashine-driver.service';
import { MashineDriverController } from './mashine-driver.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MashineDriver } from './models/mashine-driver.model';

@Module({
  imports:[SequelizeModule.forFeature([MashineDriver])],
  controllers: [MashineDriverController],
  providers: [MashineDriverService],
})
export class MashineDriverModule {}
