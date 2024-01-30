import './App.css';
function App() {
  return (
    <div>
      <div className="w-[1000px] h-[800px] bg-black mx-auto mt-[50px] grid grid-cols-[400px,265px,265px,40px] grid-rows-[450px,160px,140px,20px] gap-[10px]">
        <div className="bg-red-700"></div>
        <div className="bg-white col-span-3"></div>
        <div className="bg-white row-span-2"></div>
        <div className="bg-white row-span-2 col-span-2"></div>
        <div className="bg-blue-600"></div>
        <div className="bg-red-700 row-span-2"></div>
        <div className="bg-red-700"></div>
        <div className=" bg-yellow-400"></div>
        <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default App;
