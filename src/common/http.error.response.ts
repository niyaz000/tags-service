
export class HttpErrorResponse {

    constructor(init?: Partial<HttpErrorResponse>) {
        Object.assign(this, init);
    }

    details: string;
    instance: string;
    request_id: string;
    status: number;
    timestamp: string;
    title: string;
    type: string;
    errors: Array<{
        field: string;
        type: string;
        description: string;
    }>;
}
