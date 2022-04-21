import { Test, TestingModule } from '@nestjs/testing';
import { BuillQueueController } from './buill-queue.controller';
import { BuillQueueService } from './buill-queue.service';

describe('BuillQueueController', () => {
  let buillQueueController: BuillQueueController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BuillQueueController],
      providers: [BuillQueueService],
    }).compile();

    buillQueueController = app.get<BuillQueueController>(BuillQueueController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(buillQueueController.getHello()).toBe('Hello World!');
    });
  });
});
