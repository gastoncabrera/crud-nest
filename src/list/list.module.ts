import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
// import { MongooseModule } from '@nestjs/mongoose';
// import { List, ListSchema } from './schema/list.schema';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
