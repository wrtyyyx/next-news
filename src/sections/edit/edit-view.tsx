"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Spinner } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/types/Inputs";
import { getArticleBySlug, updateArticle } from "@/utils/article-methods";

export default function EditView() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await getArticleBySlug(id);
        if (!data) {
          throw new Error("Article not found");
        }
        reset({ title: data.title, content: data.content });
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, reset]);

  if (loading)
    return (
      <div className="flex justify-center">
        <Spinner label="Loading…" />
      </div>
    );
  if (error) return <div className="text-red-600 p-4">Error: {error}</div>;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await updateArticle(id, {
        title: data.title,
        content: data.content,
      });
      router.push(`/article/${id}`);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl mb-4">Edit Article</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            {...register("title", { required: "Required" })}
            className="w-full border p-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Content</label>
          <textarea
            {...register("content", { required: "Required" })}
            className="w-full border p-2 rounded h-32"
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
      {error && <div className="mt-4 text-red-600">Error: {error}</div>}
    </div>
  );
}
