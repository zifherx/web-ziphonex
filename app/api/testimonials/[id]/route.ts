import z from "zod";
import { NextRequest, NextResponse } from "next/server";

import { ApiResponseDto } from "@/common/dto/common/api-response.dto";
import { UpdateTestimonialDto } from "@/common/dto/testimonial/update-testimonial.dto";
import { getTestimonialService } from "@/common/services/testimonial.service";
import { TestimonialValidator } from "@/common/validations/testimonial.validation";

const service = getTestimonialService();

/**
 * GET /api/testimonials/[id]
 * Obtiene un testimonio por ID
 */
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const data = await service.getById(id);

    return NextResponse.json(ApiResponseDto.success(data, `Testimonio obtenido correctamente`));
  } catch (err: any) {
    console.error(`[GET /api/testimonials/${id}] Error:`, err.message);

    const statusCode = err instanceof Error && err.message.includes("no encontrado") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al obtener el testimonio", "FETCH_ERROR"),
      { status: statusCode }
    );
  }
}

/**
 * PUT /api/testimonials/[id]
 * Actualiza un testimonio
 */
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const body = await request.json();

    const validatedData = TestimonialValidator.validateUpdate(body);
    const dto = new UpdateTestimonialDto(validatedData);
    const data = await service.update(id, dto);

    return NextResponse.json(ApiResponseDto.success(data, "Testimonio actualizado correctamente"));
  } catch (err: any) {
    console.error(`[PUT /api/testimonials/${id}] Error:`, err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(ApiResponseDto.error("Datos inválidos", "VALIDATION_ERROR", err.message), {
        status: 400,
      });
    }

    const statusCode = err instanceof Error && err.message.includes("no encontrado") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al actualizar el testimonio", "UPDATE_ERROR"),
      { status: statusCode }
    );
  }
}

/**
 * DELETE /api/testimonials/[id]
 * Elimina un testimonio
 */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const data = await service.delete(id);

    return NextResponse.json(ApiResponseDto.success(data, "Testimonio eliminado correctamente"));
  } catch (error) {
    console.error(`[DELETE /api/testimonials/${id}] Error:`, error);

    const statusCode = error instanceof Error && error.message.includes("no encontrado") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(error instanceof Error ? error.message : "Error al eliminar el testimonio", "DELETE_ERROR"),
      { status: statusCode }
    );
  }
}

/**
 * PATCH /api/testimonials/[id]
 * Toggle activo/inactivo
 */
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const data = await service.toggleActive(id);

    return NextResponse.json(
      ApiResponseDto.success(data, `Testimonio ${data.isActive ? "activado" : "desactivado"} correctamente`)
    );
  } catch (err) {
    console.error(`[PATCH /api/testimonials/${id}] Error:`, err);

    const statusCode = err instanceof Error && err.message.includes("no encontrado") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al cambiar el estado", "TOGGLE_ERROR"),
      { status: statusCode }
    );
  }
}
