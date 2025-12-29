import { IBaseRepository } from "./base.repository.interface";

import { StatisticFilters, StatisticEntity } from "@/common/types/statistics.types";
import { CreateStatisticsDto } from "@/common/dto/statistics/create-statistics.dto";
import { UpdateStatisticsDto } from "@/common/dto/statistics/update-statistics.dto";
import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";

export interface IStatisticsRepository
  extends IBaseRepository<StatisticEntity, CreateStatisticsDto, UpdateStatisticsDto> {
  findAll(filters?: StatisticFilters): Promise<StatisticEntity[]>;
  findActive(): Promise<StatisticEntity[]>;
  findById(id: string): Promise<StatisticEntity | null>;
  create(data: CreateStatisticsDto): Promise<StatisticEntity>;
  update(id: string, data: UpdateStatisticsDto): Promise<StatisticEntity | null>;
  delete(id: string): Promise<StatisticEntity | null>;
  toggleActive(id: string): Promise<StatisticEntity | null>;
  publish(id: string): Promise<StatisticEntity | null>;
  archive(id: string): Promise<StatisticEntity | null>;
  updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticEntity | null>;
  findByStatus(status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticEntity[]>;
  reorder(updates: Array<{ id: string; order: number }>): Promise<void>;
  updateOrder(id: string, newOrder: number): Promise<StatisticEntity | null>;
}
