import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import { store } from './store/store';


export const Ecommerce = () => {
  return (
      <AppRouter />
  );
}


