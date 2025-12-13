class TenantCreateResponse {
  id: string;
  name: string;
  description?: string;
}

class TenantGetResponse extends TenantCreateResponse {}

export { TenantCreateResponse, TenantGetResponse };
