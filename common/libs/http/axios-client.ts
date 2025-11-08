import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { APIResponse, HttpClient, RequestConfig } from "@/common/types/http";

export class AxiosHttpClient implements HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        if (process.env.NODE_ENV === "development") {
          console.log(`[HTTP] ${config.method?.toUpperCase()} ${config.url}`, {
            params: config.params,
            data: config.data,
          });
        }
        return config;
      },
      (error) => {
        console.error(`[HTTP] Request Error:`, error);
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => {
        if (process.env.NODE_ENV === "development") {
          console.log(`[HTTP] Response: `, {
            status: response.status,
            data: response.data,
          });
        }
        return response;
      },
      (error: AxiosError<APIResponse>) => {
        console.error(`[HTTP] API Error:`, {
          status: error.response?.status,
          message: error.response?.data.error?.message || error.message,
          url: error.config?.url,
        });

        if (error.response?.status === 401) {
          if (typeof window != "undefined") {
            console.warn(`[HTTP] Unauthorized - Redirecting to login      `);
            window.location.href = "/auth/login";
          }
        }

        if (error.code === "ECONNABORTED") {
          console.error(`[HTTP] Request Timeout`);
        }

        if (!error.response) {
          console.error(`[HTTP] Network Error - No response from server`);
        }

        return Promise.reject(error);
      }
    );
  }

  private mapConfig(config?: RequestConfig): AxiosRequestConfig {
    if (!config) return {};

    return {
      params: config.params,
      data: config.data,
      headers: config.headers,
      timeout: config.timeout,
    };
  }

  private async handleRequest<T>(
    method: string,
    url: string,
    config?: RequestConfig
  ): Promise<T> {
    try {
      const axiosConfig = this.mapConfig(config);
      const response = await this.instance.request<APIResponse<T>>({
        method,
        url,
        ...axiosConfig,
      });
      const { data } = response;

      if (!data.success) {
        throw new Error(data.error?.message || "Error en la petición");
      }

      return data as T; //Define que retorna en la respuesta HTTP
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const apiError = err.response?.data as APIResponse;
        throw new Error(
          apiError.error?.message || err.message || "Error desconocido"
        );
      }
      throw err;
    }
  }

  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.handleRequest<T>("GET", url, config);
  }

  async post<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.handleRequest<T>("POST", url, { ...config, data });
  }

  async patch<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.handleRequest<T>("PATCH", url, { ...config, data });
  }

  async put<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.handleRequest<T>("PUT", url, { ...config, data });
  }

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.handleRequest<T>("DELETE", url, config);
  }
}
