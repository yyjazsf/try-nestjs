import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(81);
  console.log(`application started: http://localhost:81`);
}
bootstrap();
