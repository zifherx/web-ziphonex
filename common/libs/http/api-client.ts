import { ApiResponse } from "@/common/types/api-responses.types";
import { getHttpClient } from "./client";

export class APIClient {
  private httpClient;

  constructor(baseURL?: string) {
    this.httpClient = getHttpClient();
  }

  private async unwrapResponse<T>(promise: Promise<ApiResponse>): Promise<T> {
    const response = await promise;

    if (!response.success || !response.data) {
      throw new Error(response.error?.message || "Error en la petición");
    }

    return response.data;
  }

  // Petición GET
  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    return this.unwrapResponse(
      this.httpClient.get<ApiResponse<T>>(url, { params })
    );
  }
  // Petición POST
  async post<T>(url: string, data?: any): Promise<T> {
    return this.unwrapResponse(this.httpClient.post<ApiResponse<T>>(url, data));
  }
  // Petición PUT
  async put<T>(url: string, data?: any): Promise<T> {
    return this.unwrapResponse(this.httpClient.put<ApiResponse<T>>(url, data));
  }
  // Petición PATCH
  async patch<T>(url: string, data?: any): Promise<T> {
    return this.unwrapResponse(
      this.httpClient.patch<ApiResponse<T>>(url, data)
    );
  }
  // Petición DELETE
  async delete<T>(url: string): Promise<T> {
    return this.unwrapResponse(this.httpClient.get<ApiResponse<T>>(url));
  }
}

let apiClientInstance: APIClient | null = null;

export function getApiClient(): APIClient {
  if (!apiClientInstance) {
    apiClientInstance = new APIClient();
  }
  return apiClientInstance;
}
