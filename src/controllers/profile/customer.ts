import { Request, Response, NextFunction } from "express";

interface CustomerProfile {
  id: Number;
  username: String;
  email: String;
}

// getting all Customer Profile
const getCustomerProfiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    data: "[customerProfile]",
  });
};

// getting a single category
const getCustomerProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    data: "customer profile",
  });
};

// updating a category
const updateCustomerProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // return response
  return res.status(200).json({
    message: "edited customer profile successfully",
  });
};

// deleting a category
const deleteCustomerProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // return response
  return res.status(200).json({
    message: "customer profile deleted successfully",
  });
};

// adding a post
const addCustomerProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // return response
  return res.status(200).json({
    message: "customer profile added successfully",
  });
};

export default {
  getCustomerProfiles,
  getCustomerProfile,
  updateCustomerProfile,
  deleteCustomerProfile,
  addCustomerProfile,
};
