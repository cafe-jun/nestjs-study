import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
  constructor() {}
  @Get('/')
  getUsers() {}
}
