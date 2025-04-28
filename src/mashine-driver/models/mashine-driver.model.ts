import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Driver } from "../../drivers/models/driver.model"
import { Mashine } from "../../mashines/models/mashine.model"

interface IMashineDriverCreationAttr{
    driverId:number
    mashineId:number
}

@Table({tableName:"mashine-driver"})
export class MashineDriver extends Model<MashineDriver, IMashineDriverCreationAttr> {
    @ForeignKey(()=>Driver)
    @Column({type:DataType.INTEGER})
    driverId:number

    @ForeignKey(()=>Mashine)
    @Column({type:DataType.INTEGER})
    mashineId:number

    @BelongsTo(()=>Mashine)
    mashine:Mashine

    @BelongsTo(()=>Driver)
    driver:Driver


}
