export function loadFavourites() {
  try {
    const saved = JSON.parse(localStorage.getItem('photo-favourites') || '[]');
    return Array.isArray(saved)
      ? [...new Set(saved.filter(id => typeof id === 'string'))]
      : [];
  } catch {
    return [];
  }
}

export default function favouritesReducer(state, action) {
  if (action.type !== 'toggle') return state;
  return state.includes(action.id)
    ? state.filter(id => id !== action.id)
    : [...state, action.id];
}
