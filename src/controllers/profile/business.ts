import { Request, Response, NextFunction } from "express";
import { Collection, ObjectId } from "mongodb";
import BusinessProfile from "../../types/profile/BusinessProfile";
import getDbCollection from "../../lib/getDbCollection";

const dbName = "GreenFu";
const collectionName = "BusinessProfiles";

// getting all Business Profiles
const getBusinessProfiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection(dbName, collectionName);
  try {
    const data = await collection.find<BusinessProfile>({}).toArray();
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

// get a single Business Profile
const getBusinessProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection(dbName, collectionName);

  const profileId = req.params.id;
  try {
    const data = await collection.findOne<BusinessProfile>({
      _id: new ObjectId(profileId),
    });
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

// updating a Business Profile
const updateBusinessProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updateValues = req.body;
  const { collection, client } = await getDbCollection(dbName, collectionName);

  try {
    const data = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { ...updateValues } }
    );
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

// deleting a Business Profile
const deleteBusinessProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection(dbName, collectionName);

  try {
    const data = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
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

// adding a Business Profile
const addBusinessProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection(dbName, collectionName);
  const businessProfile: BusinessProfile = req.body;
  // return response
  return res.status(200).json({
    message: "Business profile added successfully",
    data: businessProfile,
  });
};

// freeze a Business Profile
const freezeBusinessProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection(dbName, collectionName);

  // return response
  return res.status(200).json({
    message: "Business profile freezed successfully",
  });
};

// get Business Profile Login Providers (GitHub, Google,...)
const getBusinessProfileProviders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection, client } = await getDbCollection(dbName, collectionName);

  // return response
  return res.status(200).json({
    message: "Business profile freezed successfully",
  });
};

export default {
  getBusinessProfile,
  getBusinessProfiles,
  updateBusinessProfile,
  deleteBusinessProfile,
  addBusinessProfile,
};
