import { useState } from 'react';

interface TooltipProps {
    children: any,
    content: any
}

function Tooltip({ children, content }: TooltipProps) {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="relative inline-block">
            <div
                className="cursor-pointer"
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
            >
                {children}
            </div>
            {visible && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg z-10">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
