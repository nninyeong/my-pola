export const getScrollbarWidth = () => {
  if (typeof window === 'undefined') return 0;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth > 0 ? scrollbarWidth : 15;
};
