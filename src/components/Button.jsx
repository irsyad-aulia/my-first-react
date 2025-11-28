export default function Button({ text }) {
    return (
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 m-2 transition">
            {text} 
        </button>
    );
}