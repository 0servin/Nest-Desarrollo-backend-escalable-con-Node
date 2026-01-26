import { Injectable, NotFoundException, Param } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Yaris',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'HR-V',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];
  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((item) => item.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }
}
