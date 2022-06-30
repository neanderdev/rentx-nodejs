import { InMemoryUsersRepository } from "@modules/accounts/repositories/in-memory/InMemoryUsersRepository";
import { InMemoryUserTokensRepository } from "@modules/accounts/repositories/in-memory/InMemoryUserTokensRepository";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { InMemoryMailProvider } from "@shared/container/providers/MailProvider/in-memory/InMemoryMailProvider";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let inMemoryUserTokensRepository: InMemoryUserTokensRepository;
let dateProvider: DayjsDateProvider;
let inMemoryMailProvider: InMemoryMailProvider;

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryUserTokensRepository = new InMemoryUserTokensRepository();
    dateProvider = new DayjsDateProvider();
    inMemoryMailProvider = new InMemoryMailProvider();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      inMemoryUsersRepository,
      inMemoryUserTokensRepository,
      dateProvider,
      inMemoryMailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(inMemoryMailProvider, "sendMail");

    await inMemoryUsersRepository.create({
      name: "Glen Swanson",
      email: "kun@zuako.mn",
      password: "123456789",
      driver_license: "564491",
    });

    await sendForgotPasswordMailUseCase.execute("kun@zuako.mn");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("fegar@hindo.kn")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(
      inMemoryUserTokensRepository,
      "create"
    );

    await inMemoryUsersRepository.create({
      name: "Randall Salazar",
      email: "solizahu@na.nr",
      password: "123456",
      driver_license: "181545",
    });

    await sendForgotPasswordMailUseCase.execute("solizahu@na.nr");

    expect(generateTokenMail).toBeCalled();
  });
});
