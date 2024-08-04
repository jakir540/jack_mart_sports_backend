import { Request, Response } from "express";
import httpStatus from "http-status";

const notFoundRoutes = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    message: "Route Not Found",
  });
};

export default notFoundRoutes;
