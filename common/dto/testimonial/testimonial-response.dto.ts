import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";
import { AuthorEntity, TestimonialEntity } from "@/common/types/testimonial.types";

export class TestimonialResponseDto {
  id!: string;
  resena!: string;
  rating!: number;
  author!: AuthorEntity;
  isActive!: boolean;
  status!: STATUS_TYPE_ENTRY_CMS;
  createdAt!: string;
  updatedAt!: string;

  constructor(entity: TestimonialEntity) {
    this.id = entity._id;
    this.resena = entity.resena;
    this.rating = entity.rating;
    this.author = entity.author;
    this.status = entity.status;
    this.isActive = entity.isActive;
    this.createdAt = entity.createdAt.toISOString();
    this.updatedAt = entity.updatedAt.toISOString();
  }

  static fromEntity(entity: TestimonialEntity): TestimonialResponseDto {
    return new TestimonialResponseDto(entity);
  }

  static fromEntities(entities: TestimonialEntity[]): TestimonialResponseDto[] {
    return entities.map((entity) => new TestimonialResponseDto(entity));
  }
}
