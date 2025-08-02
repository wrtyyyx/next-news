// src/app/page.tsx  (или любой клиентский компонент)
'use client'

import React, { useEffect, useState } from 'react'
import  { NewsDataItem } from '@/types/NewsDataItem'
import NewsCard from '@/components/NewsCars'
import Link from 'next/link'

export default function IndexView() {
  const [news, setNews] = useState<NewsDataItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(setNews)
      .catch(() => setError('Не вдалося завантажити новини.'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="p-4 text-center">Завантаження новин…</p>
  }
  if (error) {
    return <p className="p-4 text-center text-red-500">{error}</p>
  }
  console.log(news)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Новини за {new Date().toLocaleDateString('uk-UA')}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
       {news.length > 0 ? (
          news.map((item) => (
            <Link key={item._id} href={`/article/${item._id}`}>
              <NewsCard
                title={item.title}
                content={item.content}
                author={item.author ?? 'Невідомий автор'}
                publishedAt={item.publishedAt}
              />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center">Новин немає</p>
        )}
      </div>
    </div>
  )
}
