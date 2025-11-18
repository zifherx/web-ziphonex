import { ISocialMediaRepository } from "../interfaces/repositories/social-media.repository.interface";
import { ISocialMediaService } from "../interfaces/services/social-media.service.interface";

import { CreateSocialMediaDto } from "../dto/social-media/create-social-media.dto";
import { UpdateSocialMediaDto } from "../dto/social-media/update-social-media.dto";

import { SocialMediaResponseDto } from "../dto/social-media/social-media-response.dto";
import { BulkdOrderDto } from "../dto/social-media/bulk-order.dto";
import { getSocialMediaRepository } from "../repositories/social-media.repository";
import { STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";

export class SocialMediaService implements ISocialMediaService {
  constructor(private readonly repository: ISocialMediaRepository) {}

  async getAll(
    includeInactive: boolean = false
  ): Promise<SocialMediaResponseDto[]> {
    const filters = includeInactive ? undefined : { isActive: true };
    const entities = await this.repository.findAll(filters);
    return SocialMediaResponseDto.fromEntities(entities);
  }

  async getActive(): Promise<SocialMediaResponseDto[]> {
    const entities = await this.repository.findActive();
    return SocialMediaResponseDto.fromEntities(entities);
  }

  async getById(id: string): Promise<SocialMediaResponseDto> {
    const entity = await this.repository.findById(id);

    if (!entity) {
      throw new Error("Red social no encontrada");
    }

    return SocialMediaResponseDto.fromEntity(entity);
  }

  async create(data: CreateSocialMediaDto): Promise<SocialMediaResponseDto> {
    const exists = await this.urlExists(data.href);
    if (exists) {
      throw new Error("Ya existe una red social con esta URL");
    }

    const count = await this.repository.count();
    if (count >= 10) {
      throw new Error("No puedes tener más de 10 redes sociales");
    }

    const entity = await this.repository.create(data);
    return SocialMediaResponseDto.fromEntity(entity);
  }

  async update(
    id: string,
    data: UpdateSocialMediaDto
  ): Promise<SocialMediaResponseDto> {
    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error("Red social no encontrada");
    }

    if (data.href) {
      const urlExists = await this.urlExists(data.href, id);
      if (urlExists) {
        throw new Error("Ya existe una red social con esta URL");
      }
    }
    const entity = await this.repository.update(id, data);

    if (!entity) {
      throw new Error("Ya existe una red social con esta URL");
    }

    return SocialMediaResponseDto.fromEntity(entity);
  }

  async delete(id: string): Promise<SocialMediaResponseDto> {
    const entity = await this.repository.delete(id);

    if (!entity) {
      throw new Error("Red social no encontrada");
    }

    return SocialMediaResponseDto.fromEntity(entity);
  }

  async updateBulkOrder(
    data: BulkdOrderDto
  ): Promise<SocialMediaResponseDto[]> {
    for (const item of data.items) {
      const exists = await this.repository.exists(item.id);
      if (!exists) {
        throw new Error(`Red social con Id ${item.id} no encontrada`);
      }
    }

    const entities = await this.repository.updateBulkOrder(data);
    return SocialMediaResponseDto.fromEntities(entities);
  }

  async toggleActive(id: string): Promise<SocialMediaResponseDto> {
    const entity = await this.repository.toggleActive(id);

    if (!entity) {
      throw new Error("Red socia no encontrada");
    }

    return SocialMediaResponseDto.fromEntity(entity);
  }

  async urlExists(href: string, excludeId?: string): Promise<boolean> {
    const entity = await this.repository.findByHref(href);

    if (!entity) return false;

    if (excludeId && entity._id === excludeId) return false;

    return true;
  }

  async publish(id: string): Promise<SocialMediaResponseDto> {
    const entity = await this.repository.publish(id);
    if (!entity) {
      throw new Error("Red social no encontrada");
    }
    return SocialMediaResponseDto.fromEntity(entity);
  }

  async archive(id: string): Promise<SocialMediaResponseDto> {
    const entity = await this.repository.archive(id);
    if (!entity) {
      throw new Error("Red social no encontrada");
    }
    return SocialMediaResponseDto.fromEntity(entity);
  }

  async updateStatus(
    id: string,
    status: STATUS_TYPE_ENTRY_CMS
  ): Promise<SocialMediaResponseDto> {
    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error("Red social no encontrada");
    }

    const entity = await this.repository.updateStatus(id, status);
    if (!entity) {
      throw new Error("Error al actualizar el status");
    }

    return SocialMediaResponseDto.fromEntity(entity);
  }
}

let serviceInstance: SocialMediaService | null = null;

export function getSocialMediaService(): ISocialMediaService {
  if (!serviceInstance) {
    const repository = getSocialMediaRepository();
    serviceInstance = new SocialMediaService(repository);
  }
  return serviceInstance;
}
