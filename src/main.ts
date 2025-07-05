import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  
    app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // Remove non-whitelisted properties
      forbidNonWhitelisted: true, // Return error if unwanted fields exist
      transform: true,            // Auto-transform payloads to DTO instances
      disableErrorMessages: false // Enable detailed error messages
    })
  );

   const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('The user management API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
