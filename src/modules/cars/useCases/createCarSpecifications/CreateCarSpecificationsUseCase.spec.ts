import { InMemoryCarsRepository } from "@modules/cars/repositories/in-memory/InMemoryCarsRepository";
import { InMemorySpecificationsRepository } from "@modules/cars/repositories/in-memory/InMemorySpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationsUseCase } from "./CreateCarSpecificationsUseCase";

let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;
let inMemoryCarsRepository: InMemoryCarsRepository;
let inMemorySpecificationsRepository: InMemorySpecificationsRepository;

describe("Create Car Specification", () => {
  beforeEach(() => {
    inMemoryCarsRepository = new InMemoryCarsRepository();
    inMemorySpecificationsRepository = new InMemorySpecificationsRepository();
    createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase(
      inMemoryCarsRepository,
      inMemorySpecificationsRepository
    );
  });

  it("should not be able to add a new specification to a now existent car", async () => {
    const car_id = "1234";
    const specification_id = ["54321"];

    await expect(
      createCarSpecificationsUseCase.execute({
        car_id,
        specification_id,
      })
    ).rejects.toEqual(new AppError("Car does not exists"));
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await inMemoryCarsRepository.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await inMemorySpecificationsRepository.create({
      name: "Test",
      description: "Test",
    });

    const specification_id = [specification.id];

    const specificationsCar = await createCarSpecificationsUseCase.execute({
      car_id: car.id,
      specification_id,
    });

    expect(specificationsCar).toHaveProperty("specifications");
    expect(specificationsCar.specifications.length).toBe(1);
  });
});
