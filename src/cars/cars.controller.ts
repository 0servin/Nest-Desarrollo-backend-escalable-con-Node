import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() CreateCarDto: CreateCarDto) {
    return CreateCarDto;
  }

  @Patch(':id')
  updateCar(@Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: number) {
    return {
      method: 'delete',
      id: id,
    };
  }
}
