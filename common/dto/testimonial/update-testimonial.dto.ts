import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";
import { AuthorEntity } from "@/common/types/testimonial.types";

export class UpdateTestimonialDto {
  resena?: string;
  rating?: number;
  author?: Partial<AuthorEntity>;
  status?: STATUS_TYPE_ENTRY_CMS;
  isActive?: boolean;

  constructor(data: Partial<UpdateTestimonialDto>) {
    Object.assign(this, data);
  }
}
