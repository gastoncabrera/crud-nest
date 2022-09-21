import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const url =
          'mongodb+srv://gaston:39186cabrera@cluster0.7luyitb.mongodb.net/?retryWrites=true&w=majority';
        const client = new MongoClient(url);
        await client.connect();
        const database = client.db('crud-list');
        return database;
      },
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
