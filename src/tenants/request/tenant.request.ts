class TenantCreateRequest {
  name: string;
  description?: string;
}

class TenantUpdateRequest extends TenantCreateRequest {}
export { TenantCreateRequest, TenantUpdateRequest };
