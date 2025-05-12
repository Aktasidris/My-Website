export const setTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const getTheme = () => {
  return localStorage.getItem('theme') || 'sunset';
};