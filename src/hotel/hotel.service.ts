import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { FilterHotelDto } from './dto/filter-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { HotelRepository } from './hotel.repository';

@Injectable()
export class HotelService {
  constructor(private hotelRepo: HotelRepository){}

  async create(createHotelDto: CreateHotelDto) {
    return await this.hotelRepo.createHotel(createHotelDto);
  }

  async findAll() {
    return await this.hotelRepo.findAll();
  }
  async findFilter(filter:FilterHotelDto) {
    return await this.hotelRepo.findFilter(filter);
  }

  async findOne(id: string) {
    return await this.hotelRepo.findHotel(id);
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    return await this.hotelRepo.update(id,updateHotelDto);
  }

  async remove(id: string) {
    return await this.hotelRepo.removeHotel(id);
  }
}
