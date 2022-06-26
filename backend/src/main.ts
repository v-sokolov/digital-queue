import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RequestContext, MikroORM } from '@mikro-orm/core';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Creates a separate Identity Map for every Request.
   * (to avoid flushing parallel changes)
   */
  const orm = app.get(MikroORM);
  app.use((req: Request, res: Response, next: NextFunction) => {
    RequestContext.create(orm.em, next);
  });

  const config = new DocumentBuilder()
    .setTitle('Queue example')
    .setDescription('The queue API description')
    .setVersion('1.0')
    .addTag('queue')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
