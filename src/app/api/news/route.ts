import { NextResponse } from 'next/server'
import { getAllNews, createNews } from '@/services/article'
import { NewsDataItem } from '@/types/NewsDataItem'

export async function GET() {
  const news = await getAllNews()
  return NextResponse.json(news)
}


export async function POST(request: Request) {
  const data = (await request.json()) as Omit<NewsDataItem, '_id' | 'publishedAt'>
  const created = await createNews(data)
  return NextResponse.json(created, { status: 201 })
}