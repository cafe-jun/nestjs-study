import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}
  @Get('/')
  getAll() {}
  @Post('/')
  create() {}

  @Put('/:id')
  updatE() {}

  @Delete('/:id')
  delete() {}
}
