import { useAccount } from 'wagmi';
import ConnectPage from './pages/ConnectPage';
import MainPage from './pages/MainPage';
import StatusBar from './components/StatusBar';

function App() {
  const account = useAccount();

  function stringToBoolean(str: string) {
    return str.toLowerCase() === "true";
  }

  return (
    <>
      {account.status === 'connected' ? (<MainPage />) : (<ConnectPage />)}
      {Boolean(stringToBoolean(import.meta.env.VITE_SHOW_STATUS_BAR)) && <StatusBar />}
    </>
  );
}

export default App;
