import { HttpException, Injectable } from '@nestjs/common';
import { Message } from '@mantis/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  throwError(message:string, code:number){
    throw new HttpException(message, code);
  }
}
