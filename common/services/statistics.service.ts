import { CreateStatisticsDto } from "../dto/statistics/create-statistics.dto";
import { StatisticResponseDto } from "../dto/statistics/statistics.response.dto";
import { UpdateStatisticsDto } from "../dto/statistics/update-statistics.dto";
import { IStatisticsRepository } from "../interfaces/repositories/statistics.repository.interface";
import { IStatisticsService } from "../interfaces/services/statistics.service.interface";
import { getStatisticRepository } from "../repositories/statistics.repository";
import { STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";

export class StatisticService implements IStatisticsService {
  constructor(private readonly repository: IStatisticsRepository) {}

  async getAll(includeInactive?: boolean): Promise<StatisticResponseDto[]> {
    const filters = includeInactive ? undefined : { isActive: true };
    const entities = await this.repository.findAll(filters);
    return StatisticResponseDto.fromEntities(entities);
  }

  async getActive(): Promise<StatisticResponseDto[]> {
    const entities = await this.repository.findActive();
    return StatisticResponseDto.fromEntities(entities);
  }

  async getById(id: string): Promise<StatisticResponseDto> {
    const entity = await this.repository.findById(id);

    if (!entity) {
      throw new Error("Estadística no encontrada");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async create(data: CreateStatisticsDto): Promise<StatisticResponseDto> {
    if (data.secondaryValue !== undefined && data.symbol !== "/") {
      throw new Error('Valor secundario solo es válido con el símbolo "/"');
    }

    if (data.value < 0 || data.value > 999999) {
      throw new Error("Valor debe estar entre 0 y 999,999");
    }

    if (data.secondaryValue !== undefined && (data.secondaryValue < 0 || data.secondaryValue > 999)) {
      throw new Error("Valor secundario debe estar entre 0 y 999");
    }

    const entity = await this.repository.create(data);
    return StatisticResponseDto.fromEntity(entity);
  }

  async update(id: string, data: UpdateStatisticsDto): Promise<StatisticResponseDto> {
    const exists = await this.repository.exists(id);

    if (!exists) {
      throw new Error("Estadistica no encontrada");
    }

    // Validación: Si hay secondaryValue, debe tener symbol "/"
    if (data.secondaryValue !== undefined && data.symbol !== "/") {
      throw new Error('El valor secundario solo es válido con el símbolo "/"');
    }

    // Validación: Valores dentro de rangos
    if (data.value !== undefined && (data.value < 0 || data.value > 999999)) {
      throw new Error("El valor debe estar entre 0 y 999,999");
    }

    if (data.secondaryValue !== undefined && (data.secondaryValue < 0 || data.secondaryValue > 999)) {
      throw new Error("El valor secundario debe estar entre 0 y 999");
    }

    const entity = await this.repository.update(id, data);

    if (!entity) {
      throw new Error("Error al actualizar la estadística");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async delete(id: string): Promise<StatisticResponseDto> {
    const entity = await this.repository.delete(id);

    if (!entity) {
      throw new Error("Estadística no encontrada");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async toggleActive(id: string): Promise<StatisticResponseDto> {
    const entity = await this.repository.toggleActive(id);

    if (!entity) {
      throw new Error("Estadística no encontrada");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async publish(id: string): Promise<StatisticResponseDto> {
    const entity = await this.repository.publish(id);

    if (!entity) {
      throw new Error("Estadística no encontrada");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async archive(id: string): Promise<StatisticResponseDto> {
    const entity = await this.repository.archive(id);

    if (!entity) {
      throw new Error("Estadística no encontrada");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticResponseDto> {
    const exists = await this.repository.exists(id);

    if (!exists) {
      throw new Error("Estadística no encontrada");
    }

    const entity = await this.repository.updateStatus(id, status);

    if (!entity) {
      throw new Error("Error al actualizar el estado");
    }

    return StatisticResponseDto.fromEntity(entity);
  }

  async getByStatus(status: STATUS_TYPE_ENTRY_CMS): Promise<StatisticResponseDto[]> {
    const entities = await this.repository.findByStatus(status);
    return StatisticResponseDto.fromEntities(entities);
  }

  async reorder(updates: Array<{ id: string; order: number }>): Promise<void> {
    // Validar que todos los IDs existan
    for (const update of updates) {
      const exists = await this.repository.exists(update.id);
      if (!exists) {
        throw new Error(`Estadística con ID ${update.id} no encontrada`);
      }
    }

    await this.repository.reorder(updates);
  }

  async updateOrder(id: string, newOrder: number): Promise<StatisticResponseDto> {
    if (newOrder < 0) {
      throw new Error("El orden no puede ser negativo");
    }

    const entity = await this.repository.updateOrder(id, newOrder);

    if (!entity) {
      throw new Error("Estadística no encontrada");
    }

    return StatisticResponseDto.fromEntity(entity);
  }
}

let serviceInstance: StatisticService | null = null;

export function getStatisticService(): IStatisticsService {
  if (!serviceInstance) {
    const repository = getStatisticRepository();
    serviceInstance = new StatisticService(repository);
  }
  return serviceInstance;
}
