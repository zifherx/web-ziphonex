import { ApiError, ApiResponse } from "@/common/types/api-responses.types";

export class ApiResponseDto<T> implements ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;

  constructor(success: boolean, data?: T, message?: string, error?: ApiError) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.error = error;
  }

  static success<T>(data: T, message?: string): ApiResponseDto<T> {
    return new ApiResponseDto(true, data, message);
  }

  static error(
    message: string,
    code: string = "INTERNAL_ERROR",
    details?: any
  ): ApiResponseDto<any> {
    return new ApiResponseDto(false, undefined, undefined, {
      code,
      message,
      details,
    });
  }
}
