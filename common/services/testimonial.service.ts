import { CreateTestimonialDto } from "../dto/testimonial/create-testimonial.dto";
import { UpdateTestimonialDto } from "../dto/testimonial/update-testimonial.dto";
import { TestimonialResponseDto } from "../dto/testimonial/testimonial-response.dto";

import { ITestimonialRepository } from "../interfaces/repositories/testimonial.repository.interface";
import { ITestimonialService } from "../interfaces/services/testimonial.service.interface";
import { getTestimonialRepository } from "../repositories/testimonial.repository";
import { STATUS_TYPE_ENTRY_CMS } from "../types/social-media.types";

export class TestimonialService implements ITestimonialService {
  constructor(private readonly repository: ITestimonialRepository) {}

  async getAll(includeInactive: boolean = false): Promise<TestimonialResponseDto[]> {
    const filters = includeInactive ? undefined : { isActive: true };

    const entities = await this.repository.findAll(filters);

    return TestimonialResponseDto.fromEntities(entities);
  }

  async getActive(): Promise<TestimonialResponseDto[]> {
    const entities = await this.repository.findActive();
    return TestimonialResponseDto.fromEntities(entities);
  }

  async getById(id: string): Promise<TestimonialResponseDto> {
    const entity = await this.repository.findById(id);
    if (!entity) {
      throw new Error("Testimonio no encontrado");
    }
    return TestimonialResponseDto.fromEntity(entity);
  }

  async create(data: CreateTestimonialDto): Promise<TestimonialResponseDto> {
    if (data.rating < 1 || data.rating > 5) {
      throw new Error("La calificación debe estar entre 1 y 5");
    }

    const entity = await this.repository.create(data);
    return TestimonialResponseDto.fromEntity(entity);
  }

  async update(id: string, data: UpdateTestimonialDto): Promise<TestimonialResponseDto> {
    const existe = this.repository.exists(id);

    if (!existe) {
      throw new Error("Testimonio no encontrado");
    }

    if (data.rating !== undefined && (data.rating < 1 || data.rating > 5)) {
      throw new Error("La calificación debe estar entre 1 y 5");
    }

    const entity = await this.repository.update(id, data);

    if (!entity) {
      throw new Error("Error al actualizar el testimonio");
    }

    return TestimonialResponseDto.fromEntity(entity);
  }

  async delete(id: string): Promise<TestimonialResponseDto> {
    const entity = await this.repository.delete(id);

    if (!entity) {
      throw new Error("Testimonio no encontrado");
    }

    return TestimonialResponseDto.fromEntity(entity);
  }

  async toggleActive(id: string): Promise<TestimonialResponseDto> {
    const entity = await this.repository.toggleActive(id);

    if (!entity) {
      throw new Error("Testimonio no encontrado");
    }

    return TestimonialResponseDto.fromEntity(entity);
  }

  async publish(id: string): Promise<TestimonialResponseDto> {
    const entity = await this.repository.publish(id);

    if (!entity) {
      throw new Error("Testimonio no encontrado");
    }

    return TestimonialResponseDto.fromEntity(entity);
  }

  async archive(id: string): Promise<TestimonialResponseDto> {
    const entity = await this.repository.archive(id);

    if (!entity) {
      throw new Error("Testimonio no encontrado");
    }

    return TestimonialResponseDto.fromEntity(entity);
  }

  async updateStatus(id: string, status: STATUS_TYPE_ENTRY_CMS): Promise<TestimonialResponseDto> {
    const exists = await this.repository.exists(id);
    if (!exists) {
      throw new Error("Testimonio no encontrado");
    }

    const entity = await this.repository.updateStatus(id, status);

    if (!entity) {
      throw new Error("Error al actualizar el status");
    }

    return TestimonialResponseDto.fromEntity(entity);
  }

  async getByRating(minRating: number): Promise<TestimonialResponseDto[]> {
    if (minRating < 1 || minRating > 5) {
      throw new Error("La calificación mínima debe estar entre 1 y 5");
    }

    const entities = await this.repository.findByRating(minRating);
    return TestimonialResponseDto.fromEntities(entities);
  }
}

let serviceInstance: TestimonialService | null = null;

export function getTestimonialService(): ITestimonialService {
  if (!serviceInstance) {
    const repository = getTestimonialRepository();
    serviceInstance = new TestimonialService(repository);
  }
  return serviceInstance;
}
