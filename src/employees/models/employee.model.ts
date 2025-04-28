import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { BuildingEmployee } from "../../building-employees/models/building-employee.model"
import { Building } from "../../buildings/models/building.model"
import { Company } from "../../company/models/company.model"

interface IEmployeeCreationAttr{
    full_name:string
    phone_number:string
    position:string
    hired_at:Date
    companyId:number
}
@Table({tableName:"employee"})
export class Employee extends Model<Employee, IEmployeeCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number

    @Column({
        type:DataType.STRING,
    })
    full_name:string

    @Column({
        type:DataType.STRING,
    })
    phone_number:string

    @Column({
        type:DataType.STRING,
    })
    position:string

    @Column({
        type:DataType.STRING,
    })
    hired_at:Date

    @ForeignKey(()=>Company)
    @Column({
        type:DataType.INTEGER,
    })
    companyId:number
    
    @BelongsTo(()=>Company)
    company:Company

    @BelongsToMany(()=>Building, ()=>BuildingEmployee)
    buildings:Building[]
}
