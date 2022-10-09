import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import "dotenv/config";

const config = process.env;

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: config.DB_HOST,
    port: +config.DB_PORT,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    synchronize: true,
    dropSchema : true,
    autoLoadEntities : true,
    logging : true
  }), HotelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
