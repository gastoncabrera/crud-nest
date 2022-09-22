import { Module, Global } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO',
      useFactory: async () => {
        const uri =
          'mongodb+srv://root:G4TAVUFq2vFkfjj4@cluster0.uiniqgh.mongodb.net/?retryWrites=true&w=majority';
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('nest');
        return database;
      },
    },
  ],
  exports: ['MONGO'],
})
export class DatabaseModule {}
