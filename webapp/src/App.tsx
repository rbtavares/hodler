import { useAccount, useConnect, useDisconnect } from 'wagmi';
import ConnectPage from './pages/ConnectPage';
import MainPage from './pages/MainPage';
import StatusBar from './components/StatusBar';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      {account.status === 'connected' ?
        <MainPage disconnect={disconnect} account={account} />
        :
        <ConnectPage account={account} connectors={connectors} connect={connect} />
      }
      <StatusBar account={account} status={status} error={error}/>
    </>
  )
}

export default App;
