import { useState, useEffect, useRef } from 'react';
import AvatarIcon from '../assets/avatar.svg';

interface AccountPopupProps {
    disconnect: any,
    account: any
}

const truncateAddress = (address: string) => {
    return `${address.slice(0, 10)}`;
};

function AccountPopup({ account, disconnect }: AccountPopupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, buttonRef]);

    return (
        <>
            <button
                ref={buttonRef}
                onClick={toggleDropdown}
                className='active:scale-95 duration-200 drop-shadow bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-300 p-1.5 rounded hover:scale-105 aspect-square'>
                <img src={AvatarIcon} className='size-6' alt="Avatar Icon" />
            </button>
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="origin-top-right absolute right-5 mt-40 w-56 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 focus:outline-none"

                >
                    <div className="p-2 space-y-2" role="none">
                        <h1 className='flex justify-center text-lg'>{account.addresses.length} address(es) connected</h1>
                        <div className={`gap-1 grid ${account.addresses.length <= 1 ? 'grid-cols-1' :
                            'grid-cols-2'
                            }`}>
                            {account.addresses.map((address: string, index: number) => (
                                <span className='font-mono text-sm bg-zinc-100 rounded px-0.5' key={index}>{truncateAddress(address)}</span>
                            ))}

                        </div>

                        <div className="text-center bg-red-200 border-red-400 border-2 rounded-md h-full w-full">
                            {account.status === 'connected' && (
                                <button type="button" onClick={() => disconnect()}>
                                    Disconnect
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AccountPopup;
