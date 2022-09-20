import { Injectable, Inject } from '@nestjs/common';
// import { CreateListDto } from './dto/create-list.dto';
// import { UpdateListDto } from './dto/update-list.dto';
// import { Model } from 'mongoose';
// import { List } from './schema/list.schema';
import { Db } from 'mongodb';

@Injectable()
export class ListService {
  constructor(@Inject('MONGO') private database: Db) {}

  // async create(createListDto: CreateListDto): Promise<List> {
  //   // await this.database.collection('list').
  //   return;
  // }

  async findAll() {
    const list = await this.database.collection('list').find().toArray();
    return list;
  }

  // async findOne(id: number) {
  //   // const list = await this.listModel.findById(id);
  //   return 'list';
  // }

  // async update(id: number, updateListDto: UpdateListDto) {
  //   // const res = await this.listModel.findByIdAndUpdate(id, updateListDto);
  //   return 'res';
  // }

  // async remove(id: number) {
  //   // const list = await this.listModel.findById(id);
  //   // const res = list.remove();
  //   return 'res';
  // }
}
