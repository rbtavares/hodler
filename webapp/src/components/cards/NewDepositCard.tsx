import { tokens } from "@/assets/tokens";
import TokenSelector from "@/components/selectors/TokenSelector";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTRACT_ADDRESS } from "@/config";
import { abi } from '@/lib/abi';
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { parseEther } from 'viem';
import { useAccount, useWriteContract } from "wagmi";

const durationTarget = (duration: { days: number, hours: number, minutes: number }) => {
  const now = new Date();
  now.setDate(now.getDate() + duration.days);
  now.setHours(now.getHours() + duration.hours);
  now.setMinutes(now.getMinutes() + duration.minutes);
  return now;
}

const formatFutureDate = (date: Date): string => {
  const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

  const formattedDate = date.toLocaleDateString('en-US', optionsDate);
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

  return `${formattedDate} @ ${formattedTime}`;
}

const NewDepositCard = () => {

  const contract = useWriteContract();

  // New Deposit Data
  const account = useAccount();
  const [asset, setAsset] = useState('');
  //const [customAssetAddress, setCustomAssetAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState({ days: 0, hours: 0, minutes: 0 });
  const [targetDate, setTargetDate] = useState(new Date());

  useEffect(() => {
    const updateTargetDate = () => {
      setTargetDate(durationTarget(duration));
    };

    if (duration.days > 0 || duration.hours > 0 || duration.minutes > 0) {
      updateTargetDate(); // Run immediately when myState changes
    }

    const intervalId = setInterval(updateTargetDate, 10000); // Log every 10 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount or when myState changes
    };
  }, [duration]); // Dependency array includes myState

  return (
    <div className="flex w-full">
      <Card className="w-full relative overflow-hidden p-3 flex flex-col gap-3">
        {
          (!account.isConnected || account.chain === undefined) &&
          <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 p-3 flex items-center justify-center backdrop-blur">
            <h1 className="text-white drop-shadow-lg text-sm">{(account.isConnected && account.chain === undefined) ? <>Switch to a compatible chain in the settings.</> : <>Connect your wallet to begin Deposit.</>}</h1>
          </div>
        }
        <h1 className="text-3xl font-medium text-center my-2">New Deposit</h1>
        <div className="grid grid-cols-3 flex-grow gap-10 border-b border-zinc-100 pb-5">
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row gap-2 w-full items-center pl-2 border-b">
              <h2 className="text-lg w-full">Asset</h2>
              {asset !== '' && <span className="aspect-square h-full flex items-center justify-center text-green-600"><Check /></span>}
            </div>
            <div className="flex flex-col gap-2 h-full justify-center">
              {asset === 'Custom ERC-20' && <Input placeholder="Contract Address" />}
              <TokenSelector options={tokens} onChange={(cv: string) => { setAsset(cv) }} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">

            <div className="flex flex-row gap-2 w-full items-center pl-2 border-b">
              <h2 className="text-lg w-full">Amount</h2>
              {amount !== 0 && <span className="aspect-square h-full flex items-center justify-center text-green-600"><Check /></span>}
            </div>
            <div className="flex flex-col h-full justify-center gap-1">
              <Input className="text-center pr-0 font-mono" min={0} placeholder="0" step={0.1} type="number" onChange={(e) => { Number(e.target.value) >= 0 && setAmount(Number(e.target.value)) }} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">

            <div className="flex flex-row gap-2 w-full items-center pl-2 border-b">
              <h2 className="text-lg w-full">Timing</h2>
              {(duration.days != 0 || duration.minutes != 0 || duration.hours != 0) && <span className="aspect-square h-full flex items-center justify-center text-green-600"><Check /></span>}
            </div>

            <div className="flex flex-col gap-1 h-full justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label>Days</Label>
                  <Input className="pr-0" min={0} placeholder="0" type="number" onChange={(e) => { Number(e.target.value) >= 0 && setDuration({ ...duration, days: Number(e.target.value) }) }} />
                </div>
                <div>
                  <Label>Hours</Label>
                  <Input className="pr-0" min={0} max={23} placeholder="0" type="number" onChange={(e) => { Number(e.target.value) >= 0 && Number(e.target.value) <= 23 && setDuration({ ...duration, hours: Number(e.target.value) }) }} />
                </div>
                <div>
                  <Label>Minutes</Label>
                  <Input className="pr-0" min={0} max={59} placeholder="0" type="number" onChange={(e) => { Number(e.target.value) >= 0 && Number(e.target.value) <= 59 && setDuration({ ...duration, minutes: Number(e.target.value) }) }} />
                </div>
              </div>
              <p className="text-neutral-400 text-xs text-end">{(duration.days != 0 || duration.hours != 0 || duration.minutes != 0) ? formatFutureDate(targetDate) : <>&nbsp;</>}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <p className="text-lg italic text-neutral-300">
            {(amount !== 0 || asset !== '' || (duration.days != 0 || duration.hours != 0 || duration.minutes != 0)) && <>Hold</>}
            {amount !== 0 && <span className="text-neutral-400"> {amount}</span>}
            {amount !== 0 && asset !== '' && <> of</>}
            {asset !== '' && <span className="text-neutral-400"> {asset}</span>}
            {(duration.days != 0 || duration.hours != 0 || duration.minutes != 0) && <> for <span className="text-neutral-400">{duration.days > 0 && duration.days + 'd'} {duration.hours > 0 && duration.hours + 'h'} {duration.minutes > 0 && duration.minutes + 'm'}</span></>}
          </p>
          <Button disabled={contract.isPending || amount === 0 || asset === '' || (duration.days == 0 && duration.hours == 0 && duration.minutes == 0)}
            onClick={() => {
              contract.writeContract({
                abi,
                address: CONTRACT_ADDRESS,
                functionName: 'deposit',
                args: [
                  duration.days * 86400 + duration.hours * 3600 + duration.minutes * 60,
                ],
                value: parseEther(String(amount))
              })
            }
            }>Confirm {contract.isPending ? <Loader2 className="animate-spin" /> : <ArrowRight />}</Button>
        </div>
      </Card >
    </div >
  )
}

export default NewDepositCard;