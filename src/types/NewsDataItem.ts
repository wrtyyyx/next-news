import { ObjectId } from "bson";

export interface NewsDataItem {
  _id?: ObjectId | string;
  title: string;
  content: string;
  author?: string[];
  description: string;
  publishedAt?: Date;
}
