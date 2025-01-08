import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        Logger.log('hello world!');
        return 'Hello World!s2';
    }
}
