import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Builder } from "../../builders/models/builder.model";
import { Employee } from "../../employees/models/employee.model";
import { Mashine } from "../../mashines/models/mashine.model";

interface CompanyCreationAttr {
  name: string;
  phone: string;
  email: string;
  address: string;
}

@Table({ tableName: "company" })
export class Company extends Model<Company, CompanyCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type:DataType.STRING(100),
    allowNull:false,
    unique:true
  })
  name:string

  @Column({
    type:DataType.STRING(15)
  })
  phone:string

  @Column({
    type:DataType.STRING(50)
  })
  email:string

  @Column({
    type:DataType.STRING
  })
  address:string

  @HasMany(()=>Builder)
  builders:Builder[]

  @HasMany(()=>Mashine)
  mashines:Mashine[]

  @HasMany(()=>Employee)
  employees:Employee[]
}
