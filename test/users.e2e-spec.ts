import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: string;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    //app.setGlobalPrefix("api")
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/sign-in")
      .send({
        email: "super@mail.uz",
        password: "qwerty",
        value: "superadmin",
      });
    token = response.body.token;
    console.log("token", token);
  });
  it("/users (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it('/users (GET) --> 401 "Unauthorized" error', () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

  afterAll(async () => {
    await app.close();
  });

  // it("/auth/sign-up (POST) --> 201", async () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/sign-up")
  //     .send({
  //       name: "Superadminjon",
  //       email: "superadmierftgyun@mail.uz",
  //       password: "qwerty",
  //       value: "superadmin",
  //     })
  //     .expect("Content-type", /json/)
  //     .expect(201);
  // });

  // it("/auth/sign-up (POST) --> 400", () => {
  //     return request(app.getHttpServer())
  //       .post("/auth/sign-up")
  //       .send({
  //         name: "Superadminjon",
  //         email: "superadmierftgyun@mail.uz",
  //         password: "qwerty",
  //         value: "superadmin",
  //       })
  //       .expect("Content-type", /json/)
  //       .expect(400).expect({
  //         message:"Internal server error",
  //         error:"Bad request",
  //         statusCode:400,
  //       })
  //   });


  // it("/auth/sign-up (POST) --> 400 on Validation error", () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/sign-up")
  //     .send({
  //       name: "Superadminjon",
  //       email: "superadmierftgyun@mail.uz",
  //       password: "qwerty",
  //       value: "superadmin",
  //     })
  //     .expect("Content-type", /json/)
  //     .expect(400).expect({
  //       message:[""],
  //       error:"Bad request",
  //       statusCode:400,
  //     })
  // });
  

  
});
