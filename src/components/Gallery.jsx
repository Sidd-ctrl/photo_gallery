import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import favouritesReducer, { loadFavourites } from '../reducers/favouritesReducer';
import PhotoCard from './PhotoCard';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState('');
  const [favourites, dispatch] = useReducer(favouritesReducer, undefined, loadFavourites);

  useEffect(() => {
    try {
      localStorage.setItem('photo-favourites', JSON.stringify(favourites));
    } catch {}
  }, [favourites]);

  const handleSearch = useCallback(event => setQuery(event.target.value), []);
  const filteredPhotos = useMemo(
    () => photos.filter(photo => photo.author.toLowerCase().includes(query.trim().toLowerCase())),
    [photos, query],
  );

  function toggleFavourite(id) {
    dispatch({ type: 'toggle', id });
  }

  return (
    <section aria-label="Photo gallery">
      <div className="mb-7 flex flex-col gap-5 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-medium">The collection</h2>
        <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#191b19] px-4 py-3 sm:w-80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="shrink-0 text-stone-500" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" />
          </svg>
          <span className="sr-only">Search by author</span>
          <input type="search" value={query} onChange={handleSearch} placeholder="Search by author..." className="min-w-0 flex-1 bg-transparent text-sm text-stone-200 placeholder:text-stone-500" />
        </label>
      </div>
      {loading ? (
        <div role="status" className="flex min-h-60 items-center justify-center gap-3 text-sm text-stone-400">
          <span className="size-5 animate-spin rounded-full border-2 border-stone-700 border-t-[#c6f4b0] motion-reduce:animate-none" />
          Loading photos…
        </div>
      ) : error ? (
        <p role="alert" className="rounded-xl border border-red-400/20 p-8 text-sm text-red-300">{error}</p>
      ) : filteredPhotos.length === 0 ? (
        <p role="status" className="py-20 text-center text-sm text-stone-400">No photos found. Try another author name.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} isFavourite={favourites.includes(photo.id)} onToggle={toggleFavourite} />
          ))}
        </div>
      )}
    </section>
  );
}
