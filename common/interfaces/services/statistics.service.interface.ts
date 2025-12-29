import { CreateStatisticsDto } from "@/common/dto/statistics/create-statistics.dto";
import { StatisticResponseDto } from "@/common/dto/statistics/statistics.response.dto";
import { UpdateStatisticsDto } from "@/common/dto/statistics/update-statistics.dto";
import { STATUS_TYPE_ENTRY_CMS } from "@/common/types/social-media.types";

export interface IStatisticsService {
  getAll(includeInactive?: boolean): Promise<StatisticResponseDto[]>;
  getActive(): Promise<StatisticResponseDto[]>;
  getById(id: string): Promise<StatisticResponseDto>;
  create(data: CreateStatisticsDto): Promise<StatisticResponseDto>;
  update(id: string, data: UpdateStatisticsDto): Promise<StatisticResponseDto>;
  delete(id: string): Promise<StatisticResponseDto>;
  toggleActive(id: string): Promise<StatisticResponseDto>;
  publish(id: string): Promise<StatisticResponseDto>;
  archive(id: string): Promise<StatisticResponseDto>;
  updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticResponseDto>;
  getByStatus(status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticResponseDto[]>;
  reorder(updates: Array<{ id: string; order: number }>): Promise<void>;
  updateOrder(id: string, newOrder: number): Promise<StatisticResponseDto>;
}
