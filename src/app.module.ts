import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { Company } from "./company/models/company.model";
import { BuildersModule } from "./builders/builders.module";
import { Builder } from "./builders/models/builder.model";
import { DriversModule } from "./drivers/drivers.module";
import { MashinesModule } from "./mashines/mashines.module";
import { Mashine } from "./mashines/models/mashine.model";
import { MashineDriverModule } from "./mashine-driver/mashine-driver.module";
import { MashineDriver } from "./mashine-driver/models/mashine-driver.model";
import { Driver } from "./drivers/models/driver.model";
import { CarCategory } from "./carcategory/models/carcategory.model";
import { EmployeesModule } from "./employees/employees.module";
import { BuildingsModule } from "./buildings/buildings.module";
import { BuildingEmployeesModule } from "./building-employees/building-employees.module";
import { MaterialsModule } from "./materials/materials.module";
import { BuildingMaterialsModule } from "./building-materials/building-materials.module";
import { Employee } from "./employees/models/employee.model";
import { Building } from "./buildings/models/building.model";
import { BuildingEmployee } from "./building-employees/models/building-employee.model";
import { Material } from "./materials/models/material.model";
import { BuildingMaterial } from "./building-materials/models/building-material.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/models/role.model";
import { UsersModule } from './users/users.module';
import { User } from "./users/models/user.model";
import { UserRole } from "./users/models/user-role.model";
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      models: [
        Company,
        Builder,
        Mashine,
        MashineDriver,
        Driver,
        CarCategory,
        Employee,
        Building,
        BuildingEmployee,
        Material,
        BuildingMaterial,
        Role,
        User,
        UserRole
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    CompanyModule,
    BuildersModule,
    DriversModule,
    MashinesModule,
    MashineDriverModule,
    EmployeesModule,
    BuildingsModule,
    BuildingEmployeesModule,
    MaterialsModule,
    BuildingMaterialsModule,
    RolesModule,
    UsersModule,
    AuthModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
