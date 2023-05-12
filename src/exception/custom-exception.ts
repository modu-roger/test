import { plainToClass } from 'class-transformer';
import { CustomExceptionResponse } from './custom-exception.interface';
import { HttpException, HttpStatus } from '@nestjs/common';

const customExceptionList = {
  '10000': 'exception occurred',
  '20000': 'common Err',
};

export const makeCustomExceptionResponse = (
  code: keyof typeof customExceptionList,
  message: string | (() => string),
) =>
  plainToClass(CustomExceptionResponse, {
    code: Number(code),
    message:
      message != null
        ? typeof message === 'function'
          ? message()
          : `${customExceptionList[code]} (${message})`
        : customExceptionList[code],
  });

export class CustomException extends HttpException {
  getResponse(): CustomExceptionResponse {
    return super.getResponse() as CustomExceptionResponse;
  }
}

export class TestException extends CustomException {
  constructor(message: string | (() => string)) {
    super(
      makeCustomExceptionResponse('10000', message),
      HttpStatus.BAD_REQUEST,
    );
  }
}
