import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store'; 

export const PokemonApp = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    );
};