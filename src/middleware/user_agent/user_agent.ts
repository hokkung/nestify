import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';

@Injectable()
export class UserAgentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('validate user agent');
    const userAgent = get(req, 'headers["user-agent"]')
    console.log(`userAgent=${userAgent}`)
    next();
  }
}
