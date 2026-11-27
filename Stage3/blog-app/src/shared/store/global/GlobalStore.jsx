import { createContext, useState } from 'react';

export const GlobalStoreContext = createContext(null);

export const GlobalStoreProvider = ({ children }) => {
  // Auth
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('access') || false,
  );

  // Blogs
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Filter / search
  const [selectedCategory, setSelectedCategory] = useState('all');

  // UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Refresh olanda temanı localStorage-dan oxu
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light',
  );

  // Blog actions

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  // Auth actions
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('access', true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // UI actions
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const value = {
    // auth
    user,
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,

    // blogs
    blogs,
    setBlogs,
    selectedBlog,
    setSelectedBlog,
    favorites,
    toggleFavorite,

    // filter
    selectedCategory,
    setSelectedCategory,

    // ui
    loading,
    setLoading,
    error,
    setError,
    theme,
    toggleTheme,
  };

  return (
    <GlobalStoreContext.Provider value={value}>
      {children}
    </GlobalStoreContext.Provider>
  );
};
