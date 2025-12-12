import { AxiosHttpClient } from "./axios-client";
import { HttpClient } from "@/common/types/http";

let httpClientInstance: HttpClient | null = null;

export function createHttpClient(
  baseURL: string = "/api",
  timeout: number = 10000
): HttpClient {
  return new AxiosHttpClient(baseURL, timeout);
}

export function getHttpClient(): HttpClient {
  if (!httpClientInstance) {
    httpClientInstance = createHttpClient();
  }
  return httpClientInstance;
}

export function setHttpClient(client: HttpClient): void {
  httpClientInstance = client;
}

export function resetHttpClient(): void {
  httpClientInstance = null;
}
