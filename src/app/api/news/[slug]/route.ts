import { NextResponse } from "next/server";
import { getNewsById, deleteNews, updateNews } from "@/services/article";
import { NewsDataItem } from "@/types/NewsDataItem";
import { getServerSession } from "next-auth";
import authOptions from "@/config/auth";

interface Params {
  params: { slug: string };
}

export async function GET(request: Request, { params }: Params) {
  const { slug } = await params;

  const news = await getNewsById(slug);
  if (!news) {
    return NextResponse.json({ error: "Новина не знайдена" }, { status: 404 });
  }
  return NextResponse.json(news);
}

export async function DELETE(request: Request, { params }: Params) {
  const { slug } = await params;
  const session = await getServerSession(authOptions);

  if (!session || session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const deleted = await deleteNews(slug);
  if (!deleted) {
    return NextResponse.json(
      { error: "Не вдалося видалити новину" },
      { status: 404 },
    );
  }
  return NextResponse.json({ message: "Новину видалено" }, { status: 200 });
}

export async function PUT(request: Request, { params }: Params) {
  const { slug } = await params;
  const data: NewsDataItem = await request.json();

  const session = await getServerSession(authOptions);

  if (!session || session?.user?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (!data.title || !data.content) {
    return NextResponse.json(
      { error: "Заголовок та зміст є обов'язковими" },
      { status: 400 },
    );
  }

  try {
    const updatedNews = await updateNews(slug, data);
    return NextResponse.json(updatedNews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
