import { PartialType } from '@nestjs/mapped-types';
import { CreateHotelDto } from './create-hotel.dto';
import { IsEnum, IsOptional, IsString, Length } from "class-validator"
import { Bintang, StatusHotel } from './hotel.enum';
export class UpdateHotelDto extends PartialType(CreateHotelDto) {
    @IsOptional()
    @IsString()
    nama:string
    @IsOptional()
    @IsString()
    contact:string
    @IsOptional()
    @IsString()
    @Length(10,200)
    alamat:string
    @IsOptional()
    @IsEnum(Bintang)
    bintang: Bintang
    @IsOptional()
    @IsEnum(StatusHotel)
    status: StatusHotel
    @IsOptional()
    @IsString()
    @Length(10,200)
    description:string
}
