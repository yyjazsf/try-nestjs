import {
  Controller,
  Get,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    throw new UnauthorizedException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: 'This is a custom message',
      },
      '',
    );
  }
}
