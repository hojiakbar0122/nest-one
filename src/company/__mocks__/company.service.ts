import { companyStub } from "../test/stubs/company.stub";

export const CompanyService = jest.fn().mockReturnValue({
    create:jest.fn().mockResolvedValue(companyStub()),
    findAll:jest.fn().mockResolvedValue([companyStub()]),
    findOne:jest.fn().mockResolvedValue(companyStub()),
    delete:jest.fn().mockResolvedValue({message:"Kompaniya o'chirildi"})
})