import { Request, Response } from "express";

export default function home(req: Request, res: Response) {
  res.send("hello world");
}
