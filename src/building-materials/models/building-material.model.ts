import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Building } from "../../buildings/models/building.model"
import { Material } from "../../materials/models/material.model"

interface IBuildingMaterialCreationAttr{
    buildingId:number
    materialId:number
    quantity:number
    delivered_at:Date
}

@Table({tableName:"building-materials"})
export class BuildingMaterial extends Model<BuildingMaterial, IBuildingMaterialCreationAttr>{
    @ForeignKey(()=>Building)
    @Column({
        type:DataType.INTEGER
    })
    buildingId:number

    @ForeignKey(()=>Material)
    @Column({
        type:DataType.INTEGER
    })
    materialId:number

    @Column({
        type:DataType.INTEGER
    })
    quantity:number

    @Column({
        type:DataType.DATE
    })
    delivered_at:Date

    @BelongsTo(()=>Building)
    building:Building

    @BelongsTo(()=>Material)
    material:Material
}
