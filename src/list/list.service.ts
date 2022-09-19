import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { Model } from 'mongoose';
import { List, ListDocument } from './schema/list.schema';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel: Model<ListDocument>) {}

  async create(createListDto: CreateListDto): Promise<List> {
    return await new this.listModel(createListDto).save();
  }

  async findAll() {
    const list = await this.listModel.find();
    return list;
  }

  async findOne(id: number) {
    const list = await this.listModel.findById(id);
    return list;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const res = await this.listModel.findByIdAndUpdate(id, updateListDto);
    return res;
  }

  async remove(id: number) {
    const list = await this.listModel.findById(id);
    const res = list.remove();
    return res;
  }
}
