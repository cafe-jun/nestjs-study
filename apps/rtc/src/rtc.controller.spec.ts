import { Test, TestingModule } from '@nestjs/testing';
import { RtcController } from './rtc.controller';
import { RtcService } from './rtc.service';

describe('RtcController', () => {
  let rtcController: RtcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RtcController],
      providers: [RtcService],
    }).compile();

    rtcController = app.get<RtcController>(RtcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rtcController.getHello()).toBe('Hello World!');
    });
  });
});
