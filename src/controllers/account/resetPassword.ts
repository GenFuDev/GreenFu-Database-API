import { Request, Response, NextFunction } from "express";
import getDbCollection from "../../lib/getDbCollection";

const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection("GreenFu", "accounts");
  try {
    const data = {
      message: "account reset Password",
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

export default { resetPassword };
