import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    return 'Goodbye World!';
  }
}
