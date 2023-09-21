// themeReducer.js

const initialState = {
    selectedTheme: localStorage.getItem('selectedTheme') || 'light',
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DARK_MODE':
        localStorage.setItem('selectedTheme', 'dark');
        return { ...state, selectedTheme: 'dark' };
  
      case 'SET_LIGHT_MODE':
        localStorage.setItem('selectedTheme', 'light');
        return { ...state, selectedTheme: 'light' };
  
      case 'TOGGLE_THEME':
        const newTheme = state.selectedTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('selectedTheme', newTheme);
        return { ...state, selectedTheme: newTheme };
  
      default:
        return state;
    }
  };
  
  export default themeReducer;
  