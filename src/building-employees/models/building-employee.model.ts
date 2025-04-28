import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Building } from "../../buildings/models/building.model"
import { Employee } from "../../employees/models/employee.model"

interface IBuildingEmployeeCreationAttr{
    buildingId:number
    employeeId:number
    role:string
    assigned_at:Date
}

@Table({tableName:"building_employee"})
export class BuildingEmployee extends Model<BuildingEmployee, IBuildingEmployeeCreationAttr>{
    @ForeignKey(()=>Building)
    @Column({type:DataType.INTEGER})
    buildingId:number
    
    @ForeignKey(()=>Employee)
    @Column({type:DataType.INTEGER})
    employeeId:number
    
    @BelongsTo(()=>Building)
    building:Building
    
    @BelongsTo(()=>Employee)
    employee:Employee
}
