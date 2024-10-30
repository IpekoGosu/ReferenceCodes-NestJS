import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        retryAttempts: 10,
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'demo',
        username: 'user',
        password: '1234',
        entities: [path.join(__dirname, '../entity/**/*.entity')],
        synchronize: false,
        logging: true,
        timezone: 'local'
      })
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
