import "./App.css";
function App() {
  return (
    <div>
      <h1 className="text-center text-4xl mt-[40px]">Form</h1>

      <div className="formbox">

        <form>
          <div className="flex pt-[100px] label">
            <div><label>Name</label></div>
            <div><input className="input" type="text"/></div>
          </div>
          <div className="flex pt-[50px] label">
            <div><label>Email</label></div>
            <div><input  className="input" type="email"/></div>
          </div>
          <div className="flex pt-[50px] justify-evenly text-xl hover:bg-pink hover:text-white">
          <button className="bg-pink-200 p-2 rounded-full">Submit</button>
          </div>
        </form>

      </div>

    </div>
  );
}

export default App;
