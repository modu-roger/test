import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Request,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const host = context.switchToHttp();
    const request = host.getRequest();
    const accessToken = request.headers['Authorization'];

    if (accessToken != null) {
      return this.validateToken(accessToken);
    }
    return false;
  }

  private validateToken(token: string) {
    return true;
  }
}
