import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import type { NewsDataItem } from "@/types/NewsDataItem";

export async function getAllNews(): Promise<NewsDataItem[]> {
  const db = await getDatabase();
  const col = db.collection<NewsDataItem>("news");
  const items = await col.find({}).sort({ publishedAt: -1 }).toArray();
  return items.map((item) => ({
    ...item,
    _id: item._id!.toString(),
  }));
}

export async function getNewsById(id: string): Promise<NewsDataItem | null> {
  const db = await getDatabase();
  const col = db.collection<NewsDataItem>("news");
  const item = await col.findOne({ _id: new ObjectId(id) });
  return item ? { ...item, _id: item!._id } : null;
}
export async function createNews(
  data: Omit<NewsDataItem, "_id">,
): Promise<NewsDataItem> {
  const db = await getDatabase();
  const col = db.collection<NewsDataItem>("news");
  const toInsert = { ...data, publishedAt: new Date() };
  const result = await col.insertOne(toInsert);
  return { ...toInsert, _id: result.insertedId.toString() };
}

export async function updateNews(
  id: string,
  data: Partial<Omit<NewsDataItem, "_id" | "publishedAt">>,
): Promise<boolean> {
  const db = await getDatabase();
  const col = db.collection<NewsDataItem>("news");
  const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: data });
  return result.modifiedCount > 0;
}

export async function deleteNews(id: string): Promise<boolean> {
  const db = await getDatabase();
  const col = db.collection<NewsDataItem>("news");
  const result = await col.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}
