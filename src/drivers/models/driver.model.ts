import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript"
import { MashineDriver } from "../../mashine-driver/models/mashine-driver.model"
import { Mashine } from "../../mashines/models/mashine.model"

interface IDriverCreationAttr{
    full_name:string
    last_name:string
    phone:string
    driver_license:string
}


@Table({tableName:"drivers", timestamps:false})
export class Driver extends Model<Driver, IDriverCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    })
    declare id:number

    @Column({
        type:DataType.STRING,
    })
    full_name:string

    @Column({
        type:DataType.STRING,
    })
    last_name:string

    @Column({
        type:DataType.STRING,
    })
    phone:string

    @Column({
        type:DataType.STRING,
    })
    driver_license:string

    @BelongsToMany(()=>Mashine, ()=>MashineDriver)
    mashines:Mashine[]
}
