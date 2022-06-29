import { Rental } from "../entities/Rental";

interface IRentalsRepository {
  findOpenRentaByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
