import './App.css';
import Header from "./components/Header";
import {List} from "./components/List";
import {Listitem} from './components/Listitem';
function App() {
  let list =[
    {
      sno:1,
      Name:"Nimesh khatiwada",
      Address:"Tokyo"
    },
    {
      sno:2,
      Name:"Satyam khadka",
      Address:"China"
    },
    {
      sno:3,
      Name:"Bibash bista",
      Address:"Usa"
    },
  ]
  /*function based component*/
  return (

    <>
      <Header title="My List"/>
      <List list={list}/>
      <Listitem/>
    </>
  
  );
}

export default App;
