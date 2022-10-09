import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Bintang, StatusHotel } from "../dto/hotel.enum";

@Entity()
export class Hotel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({name:"nama",unique:true})
    nama:string;
    @Column()
    contact:string;
    @Column()
    alamat:string;
    @Column({type:"enum",enum:Bintang})
    bintang:Bintang;
    @Column({type:"enum",enum:StatusHotel})
    status:StatusHotel;
    @Column()
    description:string;
}
