import { Test, TestingModule } from '@nestjs/testing';
import { FireBaseController } from './firebase.controller';
import { FireBaseService } from './firebase.service';

describe('FireBaseService', () => {
  let firebaseService: FireBaseService;

  beforeEach(async () => {
    const firebase: TestingModule = await Test.createTestingModule({
      providers: [FireBaseService],
    }).compile();

    firebaseService = firebase.get<FireBaseService>(FireBaseService);
  });

  describe('firebase test', () => {
    it('should google login"', () => {
      expect(firebaseService.getGoogleToken()).toBe('Hello World!');
    });
  });
});
