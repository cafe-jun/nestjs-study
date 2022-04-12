import { Test, TestingModule } from '@nestjs/testing';
import { BullController } from './bull.controller';
import { BullService } from './bull.service';

describe('BullController', () => {
  let bullController: BullController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BullController],
      providers: [BullService],
    }).compile();

    bullController = app.get<BullController>(BullController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bullController.getHello()).toBe('Hello World!');
    });
  });
});
