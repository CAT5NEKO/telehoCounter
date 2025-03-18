import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState("");

    const updateCountdown = () => {
        const now = new Date();
        const hoursNow = now.getHours();

        let nextOpenTime = new Date();
        nextOpenTime.setHours(23, 0, 0, 0);

        if (hoursNow >= 23) {
            nextOpenTime.setDate(nextOpenTime.getDate() + 1);
            nextOpenTime.setHours(8, 0, 0, 0);
        }

        if (hoursNow >= 23 || hoursNow < 8) {
            setTimeLeft("開放中です。");
        } else {
            const diff = nextOpenTime - now;

            if (diff <= 0) {
                setTimeLeft("公開します！");
            } else {
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft(`${hours}時間 ${minutes}分 ${seconds}秒`);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center p-8 rounded-lg bg-white shadow-xl">
                <h1 className="text-3xl font-bold mb-4">☎テレホタイマー☎</h1>
                <p className="text-xl">公開までの残り時間(フライングアタック厳禁)</p>
                <div className="text-4xl font-mono mt-4">{timeLeft}</div>
            </div>
        </div>
    );
};

export default CountdownTimer;
