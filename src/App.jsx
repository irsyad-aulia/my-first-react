import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const menuButtons = [
    "Login",
    "Register",
    "Logout",
    "Profile",
    "Settings"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Elite React Rendering
      </h1>

      {/* 2. RENDERING OTOMATIS (Elite Way) */}
      {/* "Untuk setiap 'text' di dalam ',menuButtons', buatkan satu <Button />" */}
      <div className="flex gap-2 flex-wrap justify-center">
        {menuButtons.map((text, index) => (
          <Button key={index} text={text} />
        ))}
      </div>

    <Counter />

    </div>
  );
}
export default App;