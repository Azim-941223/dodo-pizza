import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { useEffect, useState } from "react";

//const coworkers = [
//  { first_name: 'Max', last_name: 'Mustermann' },
//  { first_name: 'Vladimir', last_name: 'Leles' },
//  { first_name: 'Tobias', last_name: 'Anhalt' },
//];



//const CoworkerList = () => {
//  const [onLine, setOnLine] = useState(coworkers)

//  const click = (name) => {
//    const newArr = onLine.map((item) => {if(name === item.first_name) {return {...item, isOnline: true}} return item})
//    setOnLine(newArr)
//  }
  

//  return (
//    <div className='txt'>
//      <ul>
//        {onLine.map((item) => <li> {item.first_name} {item.last_name}  <button onClick={() => click(item.first_name)}>Click</button> {item?.isOnline ? 'Online': 'Offline'} </li> )}
//      </ul>
//    </div>
//  )
//};
//this is need for me
function App() {
  const [pizzas, setPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://62d01fd0d9bf9f170583e94b.mockapi.io/pizza"),
      fetch("https://62d01fd0d9bf9f170583e94b.mockapi.io/drinks"),
    ]).then((res) => {
      console.log(res);
      Promise.all(res.map((item) => item.json()))
        .then((data) => {
          console.log(data);
          setLoading(false)
          setPizzas(data[0])
          setDrinks(data[1])
        })
    })
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage drinks={drinks} pizzas={pizzas} />}
        />
      </Routes>
    </div>
  );
}


export default App;
