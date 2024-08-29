import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MlbService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  /**
   * Fetches data from the MLB API at the given resource path.
   *
   * @param resource The resource path to fetch data from.
   * @throws {Error} If the API request fails.
   * @returns The response data from the API.
   */
  async getMlbData(resource: string): Promise<any> {
    try {
      const URL = `${this.configService.get<string>('MLB_API_URL')}/${this.configService.get<string>('MLB_API_VERSION')}/${resource}`;

      const response: AxiosResponse = await firstValueFrom(
        this.httpService.get(URL),
      );

      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to fetch data from external API: ${error.message}`,
      );
    }
  }
}
