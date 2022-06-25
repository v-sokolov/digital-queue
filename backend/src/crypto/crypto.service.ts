import { Injectable } from '@nestjs/common';
import { createHmac } from 'node:crypto';
import { SECRET } from './constants';

@Injectable()
export class CryptoService {
  encode(value: string): string {
    return createHmac('sha256', SECRET).update(value).digest('hex');
  }
}
