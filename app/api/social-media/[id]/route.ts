import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { getSocialMediaService } from "@/common/services/social-media.service";
import { SocialMediaValidator } from "@/common/validations/social-media.validation";
import { UpdateSocialMediaDto } from "@/common/dto/social-media/update-social-media.dto";
import { ApiResponseDto } from "@/common/dto/common/api-response.dto";

const service = getSocialMediaService();

/**
 * GET /api/social-media/[id]
 * Obtiene una red social por ID
 */
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const data = await service.getById(id);

    return NextResponse.json(ApiResponseDto.success(data, "Red social obtenida correctamente"));
  } catch (err) {
    console.error(`[GET /api/social-media/${id}] Error:`, err);

    const statusCode = err instanceof Error && err.message.includes("no encontrada") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al obtener la red social", "FETCH_ERROR"),
      { status: statusCode }
    );
  }
}

/**
 * PATCH /api/social-media/[id]
 * Actualiza una red social
 */
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await request.json();

    const validatedData = SocialMediaValidator.validateUpdate(body);
    const dto = new UpdateSocialMediaDto(validatedData);
    const data = await service.update(id, dto);

    return NextResponse.json(ApiResponseDto.success(data, "Red social actualizada correctamente"));
  } catch (err) {
    console.error(`[PUT /api/social-media/${id}] Error:`, err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(ApiResponseDto.error("Datos inválidos", "VALIDATION_ERROR", err.message), {
        status: 400,
      });
    }

    const statusCode = err instanceof Error && err.message.includes("no encontrada") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al actualizar la red social", "UPDATE_ERROR"),
      { status: statusCode }
    );
  }
}

/**
 * DELETE /api/social-media/[id]
 * Elimina una red social
 */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const data = await service.delete(id);

    return NextResponse.json(ApiResponseDto.success(data, "Red social eliminada correctamente"));
  } catch (error) {
    console.error(`[DELETE /api/social-media/${id}] Error:`, error);

    const statusCode = error instanceof Error && error.message.includes("no encontrada") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(error instanceof Error ? error.message : "Error al eliminar la red social", "DELETE_ERROR"),
      { status: statusCode }
    );
  }
}

/**
 * PATCH /api/social-media/[id]
 * Toggle activo/inactivo
 */
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const data = await service.toggleActive(id);

    return NextResponse.json(
      ApiResponseDto.success(data, `Red social ${data.isActive ? "activada" : "desactivada"} correctamente`)
    );
  } catch (err) {
    console.error(`[PATCH /api/social-media/${id}] Error:`, err);

    const statusCode = err instanceof Error && err.message.includes("no encontrada") ? 404 : 500;

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al cambiar el estado", "TOGGLE_ERROR"),
      { status: statusCode }
    );
  }
}
