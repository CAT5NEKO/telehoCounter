import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState("");

    const updateCountdown = () => {
        const now = DateTime.now().setZone("Asia/Tokyo");
        const hoursNow = now.hour;

        let nextOpenTime = DateTime.now().setZone("Asia/Tokyo").set({ hour: 23, minute: 0, second: 0, millisecond: 0 });

        if (hoursNow >= 23) {
            nextOpenTime = nextOpenTime.plus({ days: 1 }).set({ hour: 8, minute: 0, second: 0, millisecond: 0 });
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
