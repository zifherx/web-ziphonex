import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";
import { StatisticEntity, StatisticSymbol } from "@/common/types/statistics.types";

export class StatisticResponseDto {
  id: string;
  icon: string;
  iconColor: string;
  iconBGColor: string;
  value: number;
  secondaryValue?: number;
  symbol: StatisticSymbol;
  title: string;
  description: string;
  order: number;
  isActive: boolean;
  status: STATUS_TYPE_ENTRY_CMS;
  createdAt: string;
  updatedAt: string;
  displayValue?: string;

  constructor(entity: StatisticEntity) {
    this.id = entity._id;
    this.icon = entity.icon;
    this.iconColor = entity.iconColor;
    this.iconBGColor = entity.iconBGColor;
    this.value = entity.value;
    this.secondaryValue = entity.secondaryValue;
    this.symbol = entity.symbol;
    this.title = entity.title;
    this.description = entity.description ?? "";
    this.order = entity.order;
    this.isActive = entity.isActive ?? true;
    this.status = entity.status || "draft";
    this.createdAt = entity.createdAt.toISOString();
    this.updatedAt = entity.updatedAt.toISOString();

    this.displayValue = this.calculateDisplayValue();
  }

  static fromEntity(entity: StatisticEntity): StatisticResponseDto {
    return new StatisticResponseDto(entity);
  }

  static fromEntities(entities: StatisticEntity[]): StatisticResponseDto[] {
    return entities.map((entity) => new StatisticResponseDto(entity));
  }

  private calculateDisplayValue(): string {
    if (this.secondaryValue !== undefined && this.symbol === "/") {
      return `${this.value}${this.symbol}${this.secondaryValue}`;
    }

    if (this.symbol) {
      if (this.symbol === "+" || this.symbol === "-") {
        return `${this.value}${this.symbol}`;
      }
      if (this.symbol === "%") {
        return `${this.value}${this.symbol}`;
      }
      return `${this.value}${this.symbol}`;
    }

    return this.value.toString();
  }
}
