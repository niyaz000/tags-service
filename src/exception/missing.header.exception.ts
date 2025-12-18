
export class MissingRequiredHeaderException extends Error {
    private headerName: string;
    constructor(headerName: string) {
        super(`Missing required header: ${headerName}`);
        this.headerName = headerName;
    }
}
