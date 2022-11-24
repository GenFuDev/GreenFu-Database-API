import { ObjectId, Timestamp } from "mongodb";

// Shop item Type
interface ShopItem {
  name: string;
  description: string;
  price: number;
}

// employment ads Type
interface JobAd {
  name: string;
}

export default interface BusinessProfile {
  _id: ObjectId;
  meta: {
    username: string;
    email: string;
    createdAt: Timestamp;
    accountId: ObjectId;
  };
  display: {
    contactInfo: {};
    mdxBody: string;
    writtenBlogPosts: [ObjectId];
  };
  business: {
    shop: {
      shopItems: [ShopItem];
      shopDescription: string;
    };
    recruiter: {
      jobListing: [JobAd];
    };
  };
  interaction: {
    discord: {
      categoryId: string;
    };
  };
}

export { ShopItem };
