"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage: React.FC = () => {
    const router = useRouter();

    const handleExploreClick = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-orange-400 space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 font-sans">
                Rate A Byte.
            </h1>
            <p className="text-xl text-gray-700 font-sans">
                Food, Places, Truth, and Rating!
            </p>
            <button
                onClick={handleExploreClick}
                className="mt-6 px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
                Explore
            </button>
        </div>
    );
};

export default WelcomePage;





    // import React from 'react';
    
    // const WelcomePage: React.FC = () => {
    //     return (
    //         <div className="flex flex-col justify-center items-center h-screen bg-orange-400 space-y-0.1">
    //             {/* <h1 className="text-6xl font-bold text-gray-800 font-sans" style={{ WebkitTextStroke: '2px #616161', color: 'transparent' }}>
    //                 Rate A Byte.
    //             </h1> */}
    //             <h1 className="text-6xl font-bold text-gray-800 font-sans">
    //                 Rate A Byte.
    //             </h1>
    //             {/* <h1 className="text-6xl font-bold text-gray-800 font-sans" style={{ WebkitTextStroke: '2px #616161', color: 'transparent' }}>
    //                 Rate A Byte.
    //             </h1> */}
    //         </div>
    //     );
    // };
    
    // export default WelcomePage;