import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('v1');
    app.enableVersioning({
        type: VersioningType.URI
    });

    const config = new DocumentBuilder()
    .setTitle('Biblioteca backend')
    .setDescription('Sistema de gerenciamento de biblioteca')
    .setVersion('v1')
    .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
