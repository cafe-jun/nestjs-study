import { Controller, Get } from '@nestjs/common';
import { RtcService } from './rtc.service';

@Controller()
export class RtcController {
  constructor(private readonly rtcService: RtcService) {}

  @Get()
  getHello(): string {
    return this.rtcService.getHello();
  }
}
