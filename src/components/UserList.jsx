import { useState, useEffect } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null);
                await new Promise(resolve => setTimeout(resolve, 2000));

                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error("Gagal mengambil data dari server");
                }
                const data = await response.json();
                setUsers(data);

            } catch (err) {
                console.error("Error:", err);
                setError("Sorry, an error occurred while retrieving data");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="text-center p-10">
                <p className="text-xl font-bold text-blue-600 animate-pulse">
                    Loading data... ⏳
                    </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-10 bg-red-100 border border-red-400 text-red-700 rounded-lg m-4">
                <p className="font-bold">An Error Occurred!</p>
                <p>{error}</p>
            </div>
        );
    }
    
    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Daftar User API</h2>
            <ul className="space-y-2">
                {users.map((user) => (
                    <li key={user.id} className="p-3 bg-gray-50 border rounded hover:bg-blue-50">
                        <p className="font-bold">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>    
                    </li>
                ))}
            </ul>
        </div>
    );
}