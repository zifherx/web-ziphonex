import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";
import { AuthorEntity } from "@/common/types/testimonial.types";

export class CreateTestimonialDto {
  resena!: string;
  rating!: number;
  author!: AuthorEntity;
  status?: STATUS_TYPE_ENTRY_CMS;
  isActive!: boolean;

  constructor(data: Partial<CreateTestimonialDto>) {
    Object.assign(this, {
      ...data,
      isActive: data.isActive ?? true,
    });
  }
}
