import { BulkdOrderDto } from "@/common/dto/social-media/bulk-order.dto";
import { IBaseRepository } from "./base.repository.interface";
import { CreateSocialMediaDto } from "@/common/dto/social-media/create-social-media.dto";
import { UpdateSocialMediaDto } from "@/common/dto/social-media/update-social-media.dto";

import {
  SocialMediaEntity,
  SocialMediaFilters,
  STATUS_TYPE_ENTRY_CMS,
} from "@/common/types/social-media.types";

export interface ISocialMediaRepository
  extends IBaseRepository<
    SocialMediaEntity,
    CreateSocialMediaDto,
    UpdateSocialMediaDto
  > {
  findAll(filters?: SocialMediaFilters): Promise<SocialMediaEntity[]>;
  findActive(): Promise<SocialMediaEntity[]>;
  findById(id: string): Promise<SocialMediaEntity | null>;
  create(data: CreateSocialMediaDto): Promise<SocialMediaEntity>;
  update(
    id: string,
    data: UpdateSocialMediaDto
  ): Promise<SocialMediaEntity | null>;
  delete(id: string): Promise<SocialMediaEntity | null>;
  updateBulkOrder(data: BulkdOrderDto): Promise<SocialMediaEntity[]>;
  toggleActive(id: string): Promise<SocialMediaEntity | null>;
  reorderAfterDelete(deletedOrder: number): Promise<void>;
  getNextOrder(): Promise<number>;
  findByHref(href: string): Promise<SocialMediaEntity | null>;
  publish(id: string): Promise<SocialMediaEntity | null>;
  archive(id: string): Promise<SocialMediaEntity | null>;
  updateStatus(
    id: string,
    status: STATUS_TYPE_ENTRY_CMS
  ): Promise<SocialMediaEntity | null>;
}
