import { db } from "@/lib/database";

export const getAccountsByUserId = async (userId: string) => {
  try {
    const accounts = await db.account.findMany({
      where: {
        userId,
      },
    });
    return accounts;
  } catch (error) {
    return [];
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};
