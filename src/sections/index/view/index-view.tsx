"use client";

import React from "react";
import { NewsDataItem } from "@/types/NewsDataItem";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import useSWR from "swr";
import { Spinner } from "@heroui/react";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function IndexView() {
  const {
    data: news,
    error,
    isLoading,
  } = useSWR<NewsDataItem[]>("/api/news", fetcher, {
    refreshInterval: 300_000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner label="Loading article…" />
      </div>
    );
  }
  if (error) {
    return <p className="p-4 text-center text-red-500">{error}</p>;
  }
  console.log(news);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Новини за {new Date().toLocaleDateString("uk-UA")}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news && news.length > 0 ? (
          news.map((item) => (
            <Link key={item._id} href={`/article/${item._id}`}>
              <NewsCard
                title={item.title}
                content={item.content}
                author={item.author ?? "Невідомий автор"}
                publishedAt={item.publishedAt}
              />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center">Новин немає</p>
        )}
      </div>
    </div>
  );
}
