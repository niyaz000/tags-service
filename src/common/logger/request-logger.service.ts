import { Injectable, LoggerService as NestLogger } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { RequestContextService } from '../context/request-context.service';

@Injectable()
export class RequestLogger implements NestLogger {
  private readonly base = new Logger('App');

  constructor(private readonly ctx: RequestContextService) {}

  private withId(message: any) {
    const reqId = this.ctx.getRequestId();
    return reqId ? `[request_id=${reqId}] ${message}` : message;
  }

  log(message: any, ...optional: any[])     { this.base.log(this.withId(message), ...optional); }
  error(message: any, ...optional: any[])   { this.base.error(this.withId(message), ...optional); }
  warn(message: any, ...optional: any[])    { this.base.warn(this.withId(message), ...optional); }
  debug(message: any, ...optional: any[])   { this.base.debug(this.withId(message), ...optional); }
  verbose(message: any, ...optional: any[]) { this.base.verbose(this.withId(message), ...optional); }
}
