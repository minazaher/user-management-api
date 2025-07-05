import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

// not-found.middleware.ts
@Injectable()
export class NotFoundMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.status(404).json({
      statusCode: 404,
      message: `Cannot ${req.method} ${req.originalUrl}`,
      error: 'Not Found'
    });
  }
}