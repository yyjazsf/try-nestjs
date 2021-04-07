import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway() // 81, { namespace: 'events', transports: ['websocket'] }
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  onGatewayInit() {
    console.log('onGatewayInit');
  }
  onGatewayConnection() {
    console.log('onGatewayConnection');
  }

  onGatewayDisconnect() {
    console.log('onGatewayDisconnect');
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: unknown): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
