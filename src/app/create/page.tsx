'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  title: string
  content: string
  author?: string
}

export default function CreateNewsForm() {
    const router = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
    fetch('/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        console.log('Success:', data)
        router.push('/') 
        
        
      })
      .catch(error => {
        console.error('Error:', error)
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
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white">
        Create
      </button>
    </form>
  )
}
