import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { useConnect, useConnectors } from "wagmi";

const ConnectCard = () => {
  const connectors = useConnectors();
  const { connect } = useConnect();

  return (
    <Card className="flex flex-col flex-1 relative gap-3 p-3 items-center justify-center">
      <p className="opacity-50 italic text-lg">Connect your wallet to begin...</p>
      {connectors && connectors.length > 0 &&
        <>
          {connectors.map((con) => (
            <Button onClick={() => connect({ connector: con })}>
              <Wallet />
              {con.name}
            </Button>
          ))}
        </>
      }
    </Card >
  )
}

export default ConnectCard;