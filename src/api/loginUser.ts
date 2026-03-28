import type { UserReqProps } from "../types/index.types";

export const loginUser = async (data: UserReqProps) => {
  try {
    const apiRes = await fetch(`https://dummyjson.com/auth/login`, {
      body: JSON.stringify(loginReq(data)),
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    return await apiRes.json();
  } catch (error) {
    throw new Error(error as string);
  }
};

function loginReq(data: UserReqProps) {
  return {
    username: data.username,
    password: data.password,
    expiresInMins: data.expiresInMins,
  };
}
