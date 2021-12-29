import { useSelector } from 'react-redux';
import './App.css';
import store from './redux/store';
import LoadingOverlay from 'react-loading-overlay';
import { DefaultTheme } from './theme/default-theme/DefaultTheme';

function App() {
    const { loading } = useSelector(() => store.getState())

    return (
        <>
            <LoadingOverlay
                active={loading}
                spinner
                text='Loading ...'
            >
                <DefaultTheme />
            </LoadingOverlay>
        </>
    );
}

export default App;
