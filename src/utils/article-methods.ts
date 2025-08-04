export const handleDelete = async (slug: string, router: any) => {
  if (!slug) return;
  try {
    const response = await fetch(`/api/news/${slug}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Не вдалося видалити новину");
    }
    alert("Новину видалено");
    router.push("/");
  } catch (err) {
    alert(err?.message);
  }
};

export const createArticle = async (data: {
  title: string;
  content: string;
  author?: string;
}) => {
  try {
    const response = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Не вдалося створити новину");
    }
    const result = await response.json();
    alert("Новину створено");
    return result;
  } catch (err) {
    alert(err.message);
  }
};

export const updateArticle = async (
  slug: string,
  data: { title: string; content: string },
) => {
  try {
    const response = await fetch(`/api/news/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Не вдалося оновити новину");
    }
    const result = await response.json();
    alert("Новину оновлено");
    return result;
  } catch (err) {
    alert(err.message);
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const response = await fetch(`/api/news/${slug}`);
    if (!response.ok) {
      throw new Error("Не вдалося отримати новину");
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Помилка при отриманні новини");
  }
};
