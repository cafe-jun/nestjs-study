import { Test, TestingModule } from '@nestjs/testing';
import { getConnection } from 'typeorm';

describe('World Exhibition Query Test', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [],
    }).compile();
  });
  afterAll(async () => {});

  it('kakao login get token', async () => {});

  it('naver login get token', async () => {});

  it('google login get token', async () => {});
});
