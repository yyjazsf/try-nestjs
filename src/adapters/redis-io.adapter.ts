import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { createAdapter } from 'socket.io-redis';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const server = super.createIOServer(port, options);
    console.log('options RedisIoAdapter', options);
    const redisAdapter = createAdapter(`localhost:${port}`);
    server.adapter(redisAdapter);
    return server;
  }
}
