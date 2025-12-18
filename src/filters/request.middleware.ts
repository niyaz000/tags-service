import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';
import { HEADERS, REQUEST_ID } from 'src/common/constants/header.constants';
import { RequestContextService } from 'src/common/context/request-context.service';

@Injectable()
export class RequestMiddleWare implements NestMiddleware {

    constructor(private readonly ctx: RequestContextService) {}

    use(req: Request, res: Response, next: NextFunction) {
        const requestId = randomUUID();
        (req as any).request_id = requestId;
        res.setHeader(HEADERS.REQUEST_ID, requestId);
        const store = new Map<string, any>([[REQUEST_ID, requestId]]);
        this.ctx.runWith(store, () => next());        
        next();
    }
}
