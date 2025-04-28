import { Module } from '@nestjs/common';
import { BuildingMaterialsService } from './building-materials.service';
import { BuildingMaterialsController } from './building-materials.controller';

@Module({
  controllers: [BuildingMaterialsController],
  providers: [BuildingMaterialsService],
})
export class BuildingMaterialsModule {}
