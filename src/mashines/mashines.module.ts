import { Module } from "@nestjs/common";
import { MashinesService } from "./mashines.service";
import { MashinesController } from "./mashines.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Mashine } from "./models/mashine.model";
import { CompanyModule } from "../company/company.module";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Mashine]), CompanyModule, FileModule],
  controllers: [MashinesController],
  providers: [MashinesService],
})
export class MashinesModule {}
