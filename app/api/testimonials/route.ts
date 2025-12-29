import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { ApiResponseDto } from "@/common/dto/common/api-response.dto";
import { CreateTestimonialDto } from "@/common/dto/testimonial/create-testimonial.dto";
import { getTestimonialService } from "@/common/services/testimonial.service";
import { TestimonialValidator } from "@/common/validations/testimonial.validation";

const service = getTestimonialService();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get("includeInactive") === "true";
    const minRating = searchParams.get("minRating");

    let data;

    if (minRating) {
      const rating = Number.parseInt(minRating);
      if (isNaN(rating) || rating < 1 || rating > 5) {
        return NextResponse.json(ApiResponseDto.error(`La calificación debe estar entre 1 y 5`, "VALIDATION_ERROR"), {
          status: 400,
        });
      }
      data = await service.getByRating(rating);
    } else {
      data = await service.getAll(includeInactive);
    }

    return NextResponse.json(ApiResponseDto.success(data, "Testimonios obtenidos correctamente"), {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err: any) {
    console.error(`[GET /api/testimonials] Error:`, err.message);
    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : `Error al obtener los testimonios`, "FETCH_ERROR"),
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validateData = TestimonialValidator.validateCreate(body);
    const dto = new CreateTestimonialDto(validateData);
    const data = await service.create(dto);

    return NextResponse.json(ApiResponseDto.success(data, "Testimonio creado correctamente"), { status: 201 });
  } catch (err: any) {
    console.error("[POST /api/testimonials] Error:", err.message);

    if (err instanceof z.ZodError) {
      return NextResponse.json(ApiResponseDto.error("Datos inválidos", "VALIDATION_ERROR", err.message), {
        status: 400,
      });
    }

    return NextResponse.json(
      ApiResponseDto.error(err instanceof Error ? err.message : "Error al crear el testimonio", "CREATE_ERROR"),
      { status: 500 }
    );
  }
}
