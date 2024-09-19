import axios, { AxiosResponse, Method } from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions<T extends HttpMethod> {
  method: T;
  url: string;
  payload?: T extends 'POST' | 'PUT' | 'PATCH' ? any : never;
  headers?: Record<string, string>;
  query?: Record<string, string>;
  signal: AbortSignal;
}

async function request<T extends HttpMethod>({
  method,
  url,
  payload,
  headers = {},
  query,
  signal,
}: RequestOptions<T>): Promise<AxiosResponse> {
  const defaultHeaders = { 'Accept': 'application/json' };
  const mergedHeaders = { ...defaultHeaders, ...headers };

  const config = {
    method: method as Method,
    url,
    headers: mergedHeaders,
    params: query,
    data: payload,
    signal
  };

  return axios(config);
}

export default request;
