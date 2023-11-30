import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';


export const Ecommerce = () => {
  return (
    // <Provider store={ store }>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    // </Provider> 
  );
}


