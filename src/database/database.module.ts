import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const url =
          'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT&directConnection=true';
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
