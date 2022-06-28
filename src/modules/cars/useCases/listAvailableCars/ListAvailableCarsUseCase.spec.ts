import { InMemoryCarsRepository } from "@modules/cars/repositories/in-memory/InMemoryCarsRepository";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let inMemoryCarsRepository: InMemoryCarsRepository;

describe("List Cars", () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      inMemoryCarsRepository
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Car1 name",
      description: "Car1 description",
      daily_rate: 180,
      license_plate: "ABC-1234",
      fine_amount: 80,
      brand: "Car_brand_teste",
      category_id: "category_id_1",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Car2 name",
      description: "Car2 description",
      daily_rate: 180,
      license_plate: "DEF-5678",
      fine_amount: 80,
      brand: "Car_brand",
      category_id: "category_id_2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Car3 name",
      description: "Car3 description",
      daily_rate: 180,
      license_plate: "GHI-7896",
      fine_amount: 80,
      brand: "Car_brand_3",
      category_id: "category_id_3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3 name",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Car4 name",
      description: "Car4 description",
      daily_rate: 180,
      license_plate: "JKL-2589",
      fine_amount: 80,
      brand: "Car_brand_4",
      category_id: "category_id_4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id_4",
    });

    expect(cars).toEqual([car]);
  });
});
