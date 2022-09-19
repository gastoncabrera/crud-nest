import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gaston:39186cabrera@cluster0.7luyitb.mongodb.net/crud-nest',
    ),
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
