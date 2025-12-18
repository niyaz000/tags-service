# Tenants

## What is Tenant entity ?
A Tenant represents an isolated customer/account in the tags-service. It is used to segregate data and scope access per tenant. Each tenant is uniquely identified by name.
Core fields:
- `public_id` (UUID string): external identifier exposed via API
- `name` (string): tenant display name, unique (case-insensitive)
- Audit fields inherited from `BaseTagEntity`: `created_at`, `updated_at`, `deleted_at`, `version`, `created_by`, `updated_by`, `request_id`

## DB schema

```sql
CREATE TABLE tenant (
  id SERIAL PRIMARY KEY,
  public_id VARCHAR(17) UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR NULL,
  request_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ NULL,
  version INT NOT NULL DEFAULT 0,
  created_by VARCHAR NULL,
  updated_by VARCHAR NULL
);
```

## REST API
Base path: `/tenants`

- `POST /tenants` — create tenant
  - Request body: `{ "name": string, "description?": string }`
  - Response: `{ "id": string, "name": string, "description": string | null }`
- `GET /tenants` — list tenants (currently returns placeholder string)
- `GET /tenants/:id` — fetch tenant by id
  - Path param: `id` = `public_id`
  - Response: `{ "id": string, "name": string, "description": string | null }`
- `PATCH /tenants/:id` — update tenant (name and description)
- `DELETE /tenants/:id` — soft delete tenant
- `PATCH /tenants/:id/restore` — restore soft-deleted tenant

### Notes
- Duplicate names are rejected (case-insensitive) with `DuplicateEntityException`.
- Soft deletes set `deleted_at`; `restore` clears it.
- Requests should include tenant context headers as defined in `src/common/constants/header.constants.ts` when relevant.
