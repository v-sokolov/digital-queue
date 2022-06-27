import { Injectable } from '@nestjs/common';
import { createHmac } from 'node:crypto';
import { CRYPTO_SECRET } from './constants';

@Injectable()
export class CryptoService {
  encode(value: string): string {
    return createHmac('sha256', CRYPTO_SECRET).update(value).digest('hex');
  }
}
