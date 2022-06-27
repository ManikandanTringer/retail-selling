import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import Shops from './compontents/Shops';

function App() {
  const id=useSelector((state)=>state.id)
  const name=useSelector((state)=>state.name)
  const dispatch=useDispatch();
  // const addItem=()=>{
  //   dispatch({type:'ADD',payload:{id:1,name:"soap",price:30,}})
  // }
  return (
    <div className="App">
        <h1>{id}</h1>
        <h1>{name}</h1>
        {/* <button onClick={()=>console.log('added')}>Add</button> */}
        <Shops />
    </div>
  );
}

export default App;
