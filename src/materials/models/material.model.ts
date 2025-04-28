import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"
import { BuildingMaterial } from "../../building-materials/models/building-material.model"
import { Building } from "../../buildings/models/building.model"

interface IMaterialCreationAttr{
    name:string
    unit:string
    price_per_unit:number
}

@Table({tableName:"material"})
export class Material extends Model<Material, IMaterialCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    })
    declare id:number
    
    @Column({
        type:DataType.STRING,
    })
    name:string
    
    @Column({
            type:DataType.STRING,
    })
    unit:string
    
    @Column({
        type:DataType.DECIMAL(15, 2),
    })
    price_per_unit:number

    @BelongsToMany(()=>Building, ()=>BuildingMaterial)
    buildings:Building[]
}
