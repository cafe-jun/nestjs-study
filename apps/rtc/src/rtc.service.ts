import { Injectable } from '@nestjs/common';

@Injectable()
export class RtcService {
    getHello(): string {
        return 'Hello World!';
    }
}
