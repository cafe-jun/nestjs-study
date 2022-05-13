import { Test, TestingModule } from '@nestjs/testing';
import { SocialLoginController } from './social-login.controller';
import { SocialLoginService } from './social-login.service';

describe('SocialLoginController', () => {
  let socialLoginController: SocialLoginController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SocialLoginController],
      providers: [SocialLoginService],
    }).compile();

    socialLoginController = app.get<SocialLoginController>(SocialLoginController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(socialLoginController.getHello()).toBe('Hello World!');
    });
  });
});
