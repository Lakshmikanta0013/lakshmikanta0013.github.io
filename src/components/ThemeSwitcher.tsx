import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from '../store/reducer/ThemeReducer';
import { RootState } from '../store/store';
import ToggleButton from './ToggleButton';

const ThemeSwitcher = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleChange = () => {
    const setTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(toggleTheme(setTheme));
  };

  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return <ToggleButton isDarkMode={theme === 'dark'} onClick={handleChange} />;
};

export default ThemeSwitcher;
