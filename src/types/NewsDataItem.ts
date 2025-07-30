export interface NewsDataItem {
    _id?: string; 
    title: string;
    content: string;
    author?: string[]; 
    description: string; 
  publishedAt?: Date;
}
