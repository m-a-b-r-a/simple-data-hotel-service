import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { DataSource, Like, Repository } from "typeorm";
import { CreateHotelDto } from "./dto/create-hotel.dto";
import { FilterHotelDto } from "./dto/filter-hotel.dto";
import { UpdateHotelDto } from "./dto/update-hotel.dto";
import { Hotel } from "./entities/hotel.entity";

@Injectable()
export class HotelRepository extends Repository<Hotel>{
 
    constructor(private dataSource: DataSource)
    {
        super(Hotel, dataSource.createEntityManager());
    }

    async createHotel(createHotelDto: CreateHotelDto) {
        const newHotel = await this.create(createHotelDto);
        try{
            await this.save(newHotel);
        }catch(err){
            console.log(err.code);
            if(err.code == 23505){
                throw new ConflictException(`Hotel ${createHotelDto.nama} already exists`);
            }else{
                throw new InternalServerErrorException()
            }
        }
   
        return newHotel;
      }
    
      async findFilter(data: FilterHotelDto) {
        const {bintang,status,nama} = data;
            const query = this.createQueryBuilder('hotel');
            if(bintang){
                query.andWhere("hotel.bintang = :bintang",{bintang:bintang});
            }
            if(status){
                query.andWhere("hotel.status = :status",{status:status});
            }
            if(nama){
                query.andWhere("LOWER(hotel.nama) LIKE LOWER(:nama)",{nama:`${nama}%`});
            }
              const task = await query.getMany();
              return task;
            // const result = await this.find({
            //     where:[
            //         {
            //             bintang:bintang,
            //         },
            //         {
            //             status:status,
            //         },
            //         {
            //             nama:Like(`%${nama}%`),

            //         }
            //     ]
            // })
            
        
      }

      async findAll(){
        return this.find();
      }
    
      async findHotel(id: string) {
        const data = await this.findOne({where:{id}});
        if(!data){
            throw new NotFoundException(`Hotel dengan id ${id} tidak ditemukan`)
        }
        return data;
      }
    
      async updateHotel(id: string, data: UpdateHotelDto) {
        await this.update(id,data);
        return this.findHotel(id);

      }
    
      async removeHotel(id: string) {
        if(! await this.findHotel(id)){
            throw new NotFoundException('data tidak ditemukan');
        }else{
            await this.delete(id);
        }
      }

    
}