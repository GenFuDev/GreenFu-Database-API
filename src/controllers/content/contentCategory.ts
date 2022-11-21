import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Category {
  id: Number;
  name: String;
  color: String;
  similarCategorys: [String];
}

// getting all categorys
const getCategorys = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    data: "[category]",
  });
};

// getting a single category
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    data: "category",
  });
};

// updating a category
const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // return response
  return res.status(200).json({
    message: "edited category successfully",
  });
};

// deleting a category
const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // return response
  return res.status(200).json({
    message: "category deleted successfully",
  });
};

// adding a post
const addCategory = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "category added successfully",
  });
};

export default {
  getPosts: getCategorys,
  getPost,
  updatePost: updateCategory,
  deletePost: deleteCategory,
  addPost: addCategory,
};
