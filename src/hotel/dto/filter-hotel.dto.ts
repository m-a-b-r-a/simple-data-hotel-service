import { IsEnum, IsOptional, IsString } from "class-validator";
import { Bintang, StatusHotel } from "./hotel.enum";

export class FilterHotelDto{

    @IsOptional()
    bintang?:Bintang
    @IsOptional()
    status?:StatusHotel
    @IsOptional()
    nama?:string
}