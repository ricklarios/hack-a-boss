import { useEffect, useState } from 'react';

function Clock() {
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const [time, setTime] = useState(
        new Date().toLocaleTimeString('en-US', timeOptions)
    );
    useEffect(() => {
        const myInterval = setInterval(() => {
            const now = new Date().toLocaleTimeString('en-US', timeOptions);
            setTime(now);
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    return <div>{time}</div>;
}

export default Clock;
