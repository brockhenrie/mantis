import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { ValidationException } from "../exceptions/validation.exception";

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(400).json({
      statusCode: 400,
      createdBy:"Validation Filter",
      validationErrors: exception.validationErrors

    })

  }

}
