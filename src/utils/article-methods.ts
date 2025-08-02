export const handleDelete = async (slug: string[] | undefined, router: any) => {
  if (!slug) return;
  try {
    const response = await fetch(`/api/news/${slug}`, {
      method: 'DELETE',
    });
        if (!response.ok) {
          throw new Error('Не вдалося видалити новину');
        }
        alert('Новину видалено');
        router.push('/'); 
      } catch (err) {
      
        alert(err.message);
      }
    };

    export const createArticle = async (data: { title: string; content: string; author?: string }) => {
  try {
    const response = await fetch('/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Не вдалося створити новину');
    }
    const result = await response.json();
    alert('Новину створено');
    return result;
  } catch (err) {
    alert(err.message);
  }
};
