import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { getSocialMediaService } from "@/common/services/social-media.service";
import { SocialMediaValidator } from "@/common/validations/social-media.validation";

import { CreateSocialMediaDto } from "@/common/dto/social-media/create-social-media.dto";
import { BulkdOrderDto } from "@/common/dto/social-media/bulk-order.dto";
import { ApiResponseDto } from "@/common/dto/common/api-response.dto";

const service = getSocialMediaService();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get("includeInactive") === "true";

    const data = await service.getAll(includeInactive);

    return NextResponse.json(
      ApiResponseDto.success(data, "Redes sociales obtenidas correctamente"),
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    console.error(`[GET /api/social-media] Error;`, err);

    return NextResponse.json(
      ApiResponseDto.error(
        err instanceof Error
          ? err.message
          : "Error al obtener las redes sociales",
        "FETCH_ERROR"
      ),
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validateData = SocialMediaValidator.validateCreate(body);
    const dto = new CreateSocialMediaDto(validateData);
    const data = await service.create(dto);

    return NextResponse.json(
      ApiResponseDto.success(data, "Red social creada correctamente"),
      { status: 201 }
    );
  } catch (err) {
    console.error("[POST /api/social-media] Error:", err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        ApiResponseDto.error(
          "Datos inválidos",
          "VALIDATION_ERROR",
          err.message
        ),
        { status: 400 }
      );
    }

    return NextResponse.json(
      ApiResponseDto.error(
        err instanceof Error ? err.message : "Error al crear la red social",
        "CREATE_ERROR"
      ),
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = SocialMediaValidator.validateBulkOrder(body);
    const dto = new BulkdOrderDto(validatedData.items);
    const data = await service.updateBulkOrder(dto);

    return NextResponse.json(
      ApiResponseDto.success(data, "Orden actualizado correctamente")
    );
  } catch (err) {
    console.error("[PATCH /api/social-media] Error:", err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        ApiResponseDto.error(
          "Datos inválidos",
          "VALIDATION_ERROR",
          err.message
        ),
        { status: 400 }
      );
    }

    return NextResponse.json(
      ApiResponseDto.error(
        err instanceof Error ? err.message : "Error al actualizar el orden",
        "UPDATE_ORDER_ERROR"
      ),
      { status: 500 }
    );
  }
}
