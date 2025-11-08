import { CreateSocialMediaDto } from "@/common/dto/social-media/create-social-media.dto";
import { UpdateSocialMediaDto } from "@/common/dto/social-media/update-social-media.dto";
import { SocialMediaResponseDto } from "@/common/dto/social-media/social-media-response.dto";
import { BulkdOrderDto } from "@/common/dto/social-media/bulk-order.dto";
import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";

export interface ISocialMediaService {
  getAll(includeInactive?: boolean): Promise<SocialMediaResponseDto[]>;
  getActive(): Promise<SocialMediaResponseDto[]>;
  getById(id: string): Promise<SocialMediaResponseDto>;
  create(data: CreateSocialMediaDto): Promise<SocialMediaResponseDto>;
  update(
    id: string,
    data: UpdateSocialMediaDto
  ): Promise<SocialMediaResponseDto>;
  delete(id: string): Promise<SocialMediaResponseDto>;
  updateBulkOrder(data: BulkdOrderDto): Promise<SocialMediaResponseDto[]>;
  toggleActive(id: string): Promise<SocialMediaResponseDto>;
  publish(id: string): Promise<SocialMediaResponseDto>;
  archive(id: string): Promise<SocialMediaResponseDto>;
  updateStatus(
    id: string,
    status: STATUS_TYPE_ENTRY_CMS
  ): Promise<SocialMediaResponseDto>;
  urlExists(href: string, excludeId?: string): Promise<boolean>;
}
