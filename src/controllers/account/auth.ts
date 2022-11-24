import { Request, Response, NextFunction } from "express";
import getDbCollection from "../../lib/getDbCollection";

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { collection, client } = await getDbCollection("GreenFu", "accounts");
  try {
    const data = {
      message: "account Login",
    };
    // return response with Data
    return res.status(200).json({
      data: data,
    });
  } catch (e) {
    // return response with Error
    res.json({ error: e, data: null });
  } finally {
    client.close();
  }
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { collection, client } = await getDbCollection("GreenFu", "accounts");
  try {
    const data = {
      message: "account Register",
    };
    // return response with Data
    return res.status(200).json({
      data: data,
    });
  } catch (e) {
    // return response with Error
    res.json({ error: e, data: null });
  } finally {
    client.close();
  }
};

export default { login, register };
