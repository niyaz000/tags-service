import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantsModule } from './tenants/tenants.module';
import { ServicesModule } from './services/services.module';
import { TagsModule } from './tags/tags.module';
import { TagEntitiesModule } from './tag_entities/tag_entities.module';

@Module({
  imports: [TenantsModule, ServicesModule, TagsModule, TagEntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
