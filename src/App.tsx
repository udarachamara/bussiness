import { useSelector } from 'react-redux';
import './App.css';
import store from './redux/store';
import LoadingOverlay from 'react-loading-overlay';
import Theme from './common/Theme';

function App() {
    const { loading } = useSelector(() => store.getState())

    return (
        <>
            <LoadingOverlay
                active={loading}
                spinner
                text='Loading ...'
            >
                { new Theme('neun') }
            </LoadingOverlay>
        </>
    );
}

export default App;
