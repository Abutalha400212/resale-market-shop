import MainLayout from "./layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-[95%] mx-auto">
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
