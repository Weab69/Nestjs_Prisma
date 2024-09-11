import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{
 reviews: any;
 async onModuleInit() {
   await this.$connect();
 }
}
