export class CustomExceptionResponse {
  code: number;
  message: string;
}

export interface ExceptionResponse {
  error: CustomExceptionResponse;
}
