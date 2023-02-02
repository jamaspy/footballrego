import prisma from "../lib/prismaClient";

export const createContext = () => {
  return {
    prisma,
  };
};
