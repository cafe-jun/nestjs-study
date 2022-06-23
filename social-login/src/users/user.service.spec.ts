import { Test, TestingModule } from '@nestjs/testing';
import { getConnection } from 'typeorm';

describe('World Exhibition Query Test', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [],
    }).compile();
  });
  afterAll(async () => {
    await getConnection().close();
  });

  it('App API : findBySpacesId registered MainHall List', async () => {});
});
