export default function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#191b19]">
      <img
        src={photo.download_url}
        alt={`Photograph by ${photo.author}`}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <p className="truncate text-sm text-stone-200">{photo.author}</p>
        <button
          type="button"
          onClick={() => onToggle(photo.id)}
          aria-pressed={isFavourite}
          aria-label={`${isFavourite ? 'Remove' : 'Add'} ${photo.author}'s photo ${isFavourite ? 'from' : 'to'} favourites`}
          className={`flex size-9 shrink-0 items-center justify-center rounded-full border ${isFavourite ? 'border-[#c6f4b0]/30 bg-[#c6f4b0]/10 text-[#c6f4b0]' : 'border-white/10 text-stone-400 hover:text-white'}`}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill={isFavourite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
