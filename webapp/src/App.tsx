import { useAccount } from 'wagmi';
import ConnectPage from './pages/ConnectPage';
import MainPage from './pages/MainPage';
import StatusBar from './components/StatusBar';

function App() {
  const account = useAccount();

  return (
    <>
      {account.status === 'connected' ? (
        <MainPage />
      ) : (
        <ConnectPage />
      )}
      <StatusBar />
    </>
  );
}

export default App;
