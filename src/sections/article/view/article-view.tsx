"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  Skeleton,
  Spinner,
  CardFooter,
} from "@heroui/react"; // HeroUI-компоненты
import { NewsDataItem } from "@/types/NewsDataItem";
import { handleDelete } from "@/utils/article-methods";
import { useSession } from "next-auth/react";

const ArticleView: React.FC = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<NewsDataItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const session = useSession();

  const handleNews = async () => {
    const slugArray = Array.isArray(slug) ? slug : slug ? [slug] : [];
    await handleDelete(slugArray, router);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/news/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Помилка мережі: ${res.status}`);
        return res.json() as Promise<NewsDataItem>;
      })
      .then((data) => setArticle(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="lg" label="Завантаження статті…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-8">
        <div color="danger" className="text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <Skeleton isLoaded={!loading}>
        <Card>
          <CardHeader className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              {article?.title}
              <div className="text-sm text-gray-500">
                Автор:{" "}
                {article?.author
                  ? Array.isArray(article.author)
                    ? article.author.join(", ")
                    : article.author
                  : "Невідомий автор"}
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Опубліковано:{" "}
              {new Date(article!.publishedAt).toLocaleDateString()}
            </div>
          </CardHeader>
          <CardBody>
            <div> Опис: {article?.content}</div>
          </CardBody>
          {session.status === "authenticated" &&
            session.data?.user?.role === "admin" && (
              <CardFooter className="flex justify-between">
                <button
                  className="mt-4 px-4 py-2 bg-red-600 flex justify-end text-white rounded"
                  onClick={handleNews}
                >
                  Delete
                </button>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 flex justify-end text-white rounded"
                  onClick={() => router.push(`/edit/${slug}`)}
                >
                  Edit
                </button>
              </CardFooter>
            )}
        </Card>
      </Skeleton>
    </div>
  );
};

export default ArticleView;
