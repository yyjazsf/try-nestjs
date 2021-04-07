import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import { AppModule } from './app.module';

import { HttpExceptionFilter } from './filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.use(cors({

  // }))
  await app.listen(81);
  console.log(`application started: http://localhost:81`);
}
bootstrap();
