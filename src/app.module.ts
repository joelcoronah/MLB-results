import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedulesModule } from './schedules/schedules.module';
import { CModule } from './s/c/c.module';
import { SchedulesModule } from './schedules/schedules.module';

@Module({
  imports: [SchedulesModule, CModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
