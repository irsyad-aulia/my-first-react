import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="flex flex-col items-center mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Counter App</h2>

            {/* Tampilkan nilai count */}
            <p className="text-4xl font-bold text-blue-600 mb-4">{count}</p>
            
            {/* Tombol pemicu */}
            <button
            onClick={handleClick}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
                Add +1
            </button>
        </div>
    );
}