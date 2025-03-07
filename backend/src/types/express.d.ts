import { UserJwtPayload } from '.';

declare global {
  namespace Express {
    interface Request {
      user?: UserJwtPayload;
    }
  }
} 