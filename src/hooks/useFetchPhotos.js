import { useEffect, useState } from 'react';

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadPhotos() {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=30', {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Unable to load photos. Please refresh and try again.');
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('The photo service returned invalid data.');
        setPhotos(data);
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message || 'Unable to load photos. Check your connection.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadPhotos();
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}
