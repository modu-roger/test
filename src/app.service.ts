import { ForbiddenException, Injectable } from '@nestjs/common';
import { TestException } from './exception/custom-exception';

@Injectable()
export class AppService {
  getHello(): string {
    throw new TestException('test');
    return '';
  }
}
