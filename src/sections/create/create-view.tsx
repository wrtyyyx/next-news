'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { createArticle } from '@/utils/article-methods'
import Inputs from '@/types/Inputs'

export default function CreateView() {
    const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    createArticle(data)
      .then(() => {
        router.push('/')
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          {...register('title', { required: true })}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          {...register('content', { required: true })}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          {...register('author')}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded">
        Create
      </button>
    </form>
  )
}
