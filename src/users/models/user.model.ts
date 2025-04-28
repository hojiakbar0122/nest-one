import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { UserRole } from "./user-role.model";

interface IUserCreationAttr {
  name: string;
  email: string;
  password: string;
}

@Table({tableName:"users"})
export class User extends Model<User, IUserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull:false,
    unique:true
  })
  declare email:string;

  @Column({
    type: DataType.STRING,
  })
  declare password:string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue:false
  })
  declare is_active:boolean;

  @BelongsToMany(()=>Role, ()=>UserRole)
  declare roles:Role[]

}
