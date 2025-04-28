import { Company } from "../../models/company.model"

export const companyStub = ():Partial<Company>=>{
    return {
        id:1,
        name:"kompaniya1",
        phone:"96-234-21-34",
        email:"komp@mail.uz",
        address:"1234567"
    }
}