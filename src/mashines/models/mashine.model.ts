import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Company } from "../../company/models/company.model"
import { Driver } from "../../drivers/models/driver.model"
import { MashineDriver } from "../../mashine-driver/models/mashine-driver.model"

interface IMashineCreationAttr{
    model:string
    name:string
    companyId:number
    image:string
}

@Table({tableName:"mashines", timestamps:false})
export class Mashine extends Model<Mashine, IMashineCreationAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    })
    declare id:number

    @Column({
        type:DataType.STRING,
    })
    declare model:string

    @Column({
        type:DataType.STRING,
    })
    declare name:string

    @ForeignKey(()=>Company)
    @Column({
        type:DataType.INTEGER,
        onDelete:"SET NULL"
    })
    declare companyId:number

    @Column({
        type:DataType.STRING,
    })
    declare image:string

    @BelongsTo(()=>Company)
    company:Company

    @BelongsToMany(()=>Driver, ()=>MashineDriver)
    drivers:Driver[]

}
