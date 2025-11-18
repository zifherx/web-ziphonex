import {
  SocialMediaIcon,
  STATUS_TYPE_ENTRY_CMS,
} from "@/common/types/social-media.types";

export class UpdateSocialMediaDto {
  label?: string;
  icon?: SocialMediaIcon;
  href?: string;
  order?: number;
  isActive?: boolean;
  openInNewTab?: boolean;
  status?: STATUS_TYPE_ENTRY_CMS;
  color?: string;

  constructor(data: Partial<UpdateSocialMediaDto>) {
    Object.assign(this, data);
  }
}
