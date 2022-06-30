import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { InMemoryUsersRepository } from "@modules/accounts/repositories/in-memory/InMemoryUsersRepository";
import { InMemoryUserTokensRepository } from "@modules/accounts/repositories/in-memory/InMemoryUserTokensRepository";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let inMemoryUserTokensRepository: InMemoryUserTokensRepository;
let dateProvider: DayjsDateProvider;

let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryUserTokensRepository = new InMemoryUserTokensRepository();
    dateProvider = new DayjsDateProvider();

    authenticateUserUseCase = new AuthenticateUserUseCase(
      inMemoryUsersRepository,
      inMemoryUserTokensRepository,
      dateProvider
    );
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "test@test.com.br",
      password: "123456",
      name: "User Test",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexistent user", async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: "email@email.com",
        password: "test",
      })
    ).rejects.toEqual(new AppError("Email or password incorrect!"));
  });

  it("should not b able to authenticate with incorrect password", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "test@test.com.br",
      password: "123456",
      name: "User Test",
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: "999999",
      })
    ).rejects.toEqual(new AppError("Email or password incorrect!"));
  });
});
