import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const client = new MongoClient(process.env.URL);
        await client.connect();
        const database = client.db('crud-list');
        return database;
      },
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
