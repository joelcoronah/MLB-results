import { Module } from '@nestjs/common';
import { MlbService } from './mlb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MlbService],
  exports: [MlbService], // Export the service to make it available to other modules
})
export class SharedModule {}
