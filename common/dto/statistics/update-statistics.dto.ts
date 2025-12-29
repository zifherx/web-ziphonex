import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";
import { StatisticSymbol } from "@/common/types/statistics.types";

export class UpdateStatisticsDto {
  icon?: string;
  iconColor?: string;
  iconBGColor?: string;
  value?: number;
  secondaryValue?: number;
  symbol?: StatisticSymbol;
  title?: string;
  description?: string;
  order?: number;
  status?: STATUS_TYPE_ENTRY_CMS;
  isActive?: boolean;

  constructor(data: Partial<UpdateStatisticsDto>) {
    Object.assign(this, data);
  }
}
