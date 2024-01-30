import './App.css';
import Card from "./Components/Card";
import CardDetails from './Components/CardDetails';
function App() {

  return (
    <div className='bg-[url("https://img.freepik.com/free-vector/tropical-rain-forest-cartoon-landscape-composition-with-climbing-lianas-succulent-foliage-fading-palms-background_1284-58612.jpg?w=1060&t=st=1695882791~exp=1695883391~hmac=a66008f68a5546ca850db875c261e815d8e7f72e72a4998807474f58bf5e82d6")] bg-cover'>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-[20px]'>
       { CardDetails.map((item)=>{

         return <Card key={item.id} img={item.img} name={item.name} details={item.details}></Card>
       })}
      </div>
    </div>
  );
}

export default App;
