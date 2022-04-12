import { Controller, Get } from '@nestjs/common';
import { BullService } from './bull.service';

@Controller()
export class BullController {
  constructor(private readonly bullService: BullService) {}

  @Get()
  getHello(): string {
    return this.bullService.getHello();
  }
}
