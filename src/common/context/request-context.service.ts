import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { REQUEST_ID } from '../constants/header.constants';

@Injectable()
export class RequestContextService {
  private readonly als = new AsyncLocalStorage<Map<string, any>>();

  runWith<T>(store: Map<string, any>, cb: () => T): T {
    return this.als.run(store, cb);
  }

  set(key: string, value: any) {
    const store = this.als.getStore();
    if (store) store.set(key, value);
  }

  get<T = any>(key: string): T | undefined {
    return this.als.getStore()?.get(key);
  }

  getRequestId(): string | undefined {
    return this.get<string>(REQUEST_ID);
  }
}