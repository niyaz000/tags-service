
class TenantCreateRequest {
    name: string;
    description?: string;
    configuration?: TenantConfiguration;
}

class TenantConfiguration {
    rename_tags: boolean;
    delete_active_tags: boolean;
    max_tag_per_entity: number;
    max_tag_length: number;
    min_tag_length: number;
    upsert_tags: boolean;
    dynamic_entities: boolean;
    wild_card_search: boolean;
    case_sensitive: boolean;
    allowed_entity_types: string[];
}

class TenantUpdateRequest extends TenantCreateRequest {}
export { TenantCreateRequest, TenantUpdateRequest };
