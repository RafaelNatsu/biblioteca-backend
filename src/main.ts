import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const versionApp = require('../package.json');
const { BACKEND_PORT } = process.env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  if (process.env.TARGET == 'dev'){
    const config = new DocumentBuilder()
      .setTitle('Biblioteca backend')
      .setDescription('Sistema de gerenciamento de uma biblioteca.')
      .setVersion(versionApp.version)
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }
  await app.listen(BACKEND_PORT||3000);
}
bootstrap();