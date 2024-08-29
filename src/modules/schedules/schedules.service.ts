import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { MlbService } from '../../shared/mlb.service';

@Injectable()
export class SchedulesService {
  constructor(private readonly mlbService: MlbService) {}

  create(createScheduleDto: CreateScheduleDto) {
    return 'This action adds a new schedule';
  }

  async findTodayGames() {
    try {
      const todayGames = await this.mlbService.getMlbData(
        'schedule/games/?sportId=1',
      );
      return todayGames;
    } catch (error) {
      throw new Error(`Failed to fetch today's games: ${error.message}`);
    }
  }

  findAll() {
    return `This action returns all schedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
