import {
  SocialMediaEntity,
  STATUS_TYPE_ENTRY_CMS,
} from "@/common/types/social-media.types";

export class SocialMediaResponseDto {
  id!: string;
  label!: string;
  icon!: string;
  href!: string;
  order!: number;
  isActive!: boolean;
  openInNewTab!: boolean;
  status!: STATUS_TYPE_ENTRY_CMS;
  color?: string;
  createdAt!: string;
  updatedAt!: string;

  constructor(entity: SocialMediaEntity) {
    this.id = entity._id;
    this.label = entity.label;
    this.icon = entity.icon;
    this.href = entity.href;
    this.order = entity.order;
    this.isActive = entity.isActive;
    this.openInNewTab = entity.openInNewTab;
    this.status = entity.status;
    this.color = entity.color;
    this.createdAt = entity.createdAt.toISOString();
    this.updatedAt = entity.updatedAt.toISOString();
  }

  static fromEntity(entity: SocialMediaEntity): SocialMediaResponseDto {
    return new SocialMediaResponseDto(entity);
  }

  static fromEntities(entities: SocialMediaEntity[]): SocialMediaResponseDto[] {
    return entities.map((entity) => new SocialMediaResponseDto(entity));
  }
}
