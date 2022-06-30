import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

interface IUserTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UserTokens>;
}

export { IUserTokensRepository };
