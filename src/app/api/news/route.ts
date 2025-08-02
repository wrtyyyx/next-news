import { NextResponse } from 'next/server'
import { getAllNews, createNews } from '@/services/article'
import { NewsDataItem } from '@/types/NewsDataItem'
import { getServerSession } from 'next-auth'
import authOptions from '@/config/auth'
export async function GET() {
  const news = await getAllNews()
  return NextResponse.json(news)
}


export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const data = (await request.json()) as Omit<NewsDataItem, '_id' | 'publishedAt'>
  const created = await createNews(data)
  return NextResponse.json(created, { status: 201 })
}

