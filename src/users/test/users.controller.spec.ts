import { Test } from "@nestjs/testing";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";

jest.mock("../users.service");

describe("Users controller testing", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it("User controller should be defined", () => {
    expect(usersController).toBeDefined();
  });

  test("User Service should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("create User testing", ()=>{
    describe("when create user called", ()=>{
        let user: User
        let createUserDto:CreateUserDto
        beforeAll(async ()=>{
            createUserDto = {
                name:userStub().name!,
                email:userStub().email!,
                password:userStub().password!,
                value:"user",
            }

            user = await usersController.create(createUserDto)
        })

        it("then it should call userService", ()=>{
            expect(usersService.create).toHaveBeenCalledWith(createUserDto)
        })

        it("then it should return user", ()=>{
            expect(user).toEqual(userStub())
        })
    })
  })

  describe("FindAll users", ()=>{
    describe("when findAll users called", ()=>{
        let users:User[]
        beforeAll(async()=>{
            users = await usersController.findAll()
        })

        it("thren it should call usersService", ()=>{
            expect(usersService.findAll).toHaveBeenCalled()
        })

        test("then it should return users", ()=>{
            expect(users).toEqual([userStub()])
        })
    })
  })

  describe("FindOne user testing", ()=>{
    describe("when findOne user called", ()=>{
        let user:User | null
        let id:number
        beforeAll(async()=>{
            id = userStub().id as number
            user = await usersController.findOne(id.toString())
        })

        it("then it should call usersService", ()=>{
            expect(usersService.findOne).toHaveBeenCalledWith(id)
        })

        test("then it should return one user", ()=>{
            expect(user).toEqual(userStub())
        })
    })
  })
  
  describe("Remove user testing", ()=>{
    describe("when Remove user called", ()=>{
        let result:number
        let id:number
        beforeAll(async()=>{
            id = userStub().id as number
            result = await usersController.remove(id.toString())
        })

        it("then it should call usersService", ()=>{
            expect(usersService.remove).toHaveBeenCalledWith(id)
        })

        test("then it should return removed user rows", ()=>{
            expect(result).toEqual({message:"Foydalanuvchi o'chirildi"})
        })
    })
  })
});