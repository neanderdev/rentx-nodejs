import { InMemoryCarsRepository } from "@modules/cars/repositories/in-memory/InMemoryCarsRepository";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let inMemoryCarsRepository: InMemoryCarsRepository;

describe("List Cars", () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    listCarsUseCase = new ListCarsUseCase(inMemoryCarsRepository);
  });

  it("should be able to list all available cars", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Car1 name",
      description: "Car1 description",
      daily_rate: 180,
      license_plate: "ABC-1234",
      fine_amount: 80,
      brand: "Car_brand_teste",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Car2 name",
      description: "Car2 description",
      daily_rate: 180,
      license_plate: "DEF-5678",
      fine_amount: 80,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand",
    });

    expect(cars).toEqual([car]);
  });
});
