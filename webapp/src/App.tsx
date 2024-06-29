import { useAccount, useConnect, useDisconnect } from 'wagmi';
import ConnectPage from './ConnectPage';
import MainPage from './MainPage';
import StatusBar from './StatusBar';

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <>
      {account.status === 'connected' ?
        <MainPage disconnect={disconnect} account={account} />
        :
        <ConnectPage account={account} connectors={connectors} connect={connect} status={status} error={error} />
      }
      <StatusBar account={account} status={status} error={error}/>
    </>
  )
}

export default App;
