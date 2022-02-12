import { Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class WebsocketGateway {
  private readonly logger = new Logger(WebSocketGateway.name);

  @SubscribeMessage('device/notification')
  handleMessage(client: any, payload: any) {
    this.logger.log('Recieved data')
    this.logger.log(payload);
  }
}
