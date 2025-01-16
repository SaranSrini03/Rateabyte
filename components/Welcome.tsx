"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage: React.FC = () => {
    const router = useRouter();

    const handleExploreClick = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-orange-400 space-y-1">
            <h1 className="text-6xl font-bold text-[#131313] font-mono">
                Rate A Byte.
            </h1>
            <p className="text-xl text-[#151515] font-mono">
                Food, Places, Truth, and Rating!
            </p>
            <div>

            <button
                onClick={handleExploreClick}
                className="mt-6 px-20 py-3 bg-[#131313] text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
                Explore
            </button>
            </div>
        </div>
    );
};

export default WelcomePage;