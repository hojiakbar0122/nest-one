import { Test } from "@nestjs/testing";
import { JwtService } from "@nestjs/jwt";
import { CompanyService } from "../company.service";
import { Company } from "../models/company.model";
import { CreateCompanyDto } from "../dto/create-company.dto";
import { companyStub } from "./stubs/company.stub";
import { CompanyController } from "../company.controller";

jest.mock("../company.service");

describe("Company controller testing", () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService, JwtService],
    }).compile();

    companyController = moduleRef.get<CompanyController>(CompanyController);
    companyService = moduleRef.get<CompanyService>(CompanyService);
    jest.clearAllMocks();
  });

  it("Company controller should be defined", () => {
    expect(companyController).toBeDefined();
  });

  test("Company Service should be defined", () => {
    expect(companyService).toBeDefined();
  });

  describe("create Company testing", () => {
    describe("when create company called", () => {
      let company: Company;
      let createCompanyDto: CreateCompanyDto;
      beforeAll(async () => {
        createCompanyDto = {
          name: companyStub().name!,
          phone: companyStub().phone!,
          email: companyStub().email!,
          address: companyStub().address!
        };

        company = await companyController.create(createCompanyDto);
      });

      it("then it should call companyService", () => {
        expect(companyService.create).toHaveBeenCalledWith(createCompanyDto);
      });

      it("then it should return company", () => {
        expect(company).toEqual(companyStub());
      });
    });
  });

  describe("FindAll companies", () => {
    describe("when findAll companies called", () => {
      let companies: Company[];
      beforeAll(async () => {
        companies = await companyController.findAll();
      });

      it("thren it should call companyService", () => {
        expect(companyService.findAll).toHaveBeenCalled();
      });

      test("then it should return companies", () => {
        expect(companies).toEqual([companyStub()]);
      });
    });
  });

  describe("FindOne company testing", () => {
    describe("when findOne company called", () => {
      let company: Company | null;
      let id: number;
      beforeAll(async () => {
        id = companyStub().id as number;
        company = await companyController.findOne(id.toString());
      });

      it("then it should call companyService", () => {
        expect(companyService.findOne).toHaveBeenCalledWith(id);
      });

      test("then it should return one company", () => {
        expect(company).toEqual(companyStub());
      });
    });
  });

  describe("Remove company testing", () => {
    describe("when Remove company called", () => {
      let result: number;
      let id: number;
      beforeAll(async () => {
        id = companyStub().id as number;
        result = await companyController.delete(id.toString());
      });

      it("then it should call companyService", () => {
        expect(companyService.delete).toHaveBeenCalledWith(id);
      });

      test("then it should return removed company rows", () => {
        expect(result).toEqual({ message: "Kompaniya o'chirildi" });
      });
    });
  });
});
