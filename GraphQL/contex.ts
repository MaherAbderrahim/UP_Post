//creer un nouveau context pour prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Context = {
    prisma: PrismaClient;
    };
export const createContext = (res: any,req: any): any => {
  return {
    prisma,
  };
}