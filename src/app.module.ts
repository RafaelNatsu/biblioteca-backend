import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { typeOrmModuleAsyncOptions } from './database/dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { RedisClientOptions } from 'redis';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    // cache de tempos diferentes da produção e desenvolvimento
    (process.env.TARGET=='production')?
    CacheModule.register<RedisClientOptions>({
      socket: {
        host: 'redis',
        port: parseInt(process.env.REDIS_PORT),
      },
      ttl: parseInt(process.env.REDIS_TTL),
      isGlobal:true
    }):
    CacheModule.register<RedisClientOptions>({
      socket: {
        host: 'redis',
        port: parseInt(process.env.REDIS_PORT),
      },
      ttl: 10000, //10000ms -> 10s de cache
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions)
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }],
})
export class AppModule {}
