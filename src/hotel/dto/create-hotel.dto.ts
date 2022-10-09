import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator"
import { Bintang, StatusHotel } from "./hotel.enum"

export class CreateHotelDto {
    @IsNotEmpty()
    @IsString()
    nama:string
    @IsNotEmpty()
    @IsString()
    contact:string
    @IsNotEmpty()
    @IsString()
    @Length(10,200)
    alamat:string
    @IsNotEmpty()
    @IsEnum(Bintang)
    bintang: Bintang
    @IsNotEmpty()
    @IsEnum(StatusHotel)
    status: StatusHotel
    @IsNotEmpty()
    @IsString()
    @Length(10,200)
    description:string
}
