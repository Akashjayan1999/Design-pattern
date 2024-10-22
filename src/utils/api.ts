
export const fetcher = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  