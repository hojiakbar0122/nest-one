import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        example:"user1",
        description:"Foydalanuvchi ismi"
    })
    name:string

    @ApiProperty({
        example:"user1@mail.uz",
        description:"Foydalanuvchi emaili"
    })
    email:string

    @ApiProperty({
        example:"user123",
        description:"Foydalanuvchi paroli"
    })
    password:string

    @ApiProperty({
        example:"user",
        description:"Foydalanuvchi roli"
    })
    value:string
}
