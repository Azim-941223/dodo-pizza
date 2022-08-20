import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { useEffect, useState } from "react";
import Footer from './components/footer/Footer';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateNewElement from './pages/CreateNewElement/CreateNewElement';
import { base_url } from './constants/constants';

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
//const local = ; //need ride code out function, becouse this code be work only one time

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //const[basket,setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])

  const [isLoading, setLoading] = useState(true);

  //useEffect(() => {
  //  localStorage.setItem('basket', JSON.stringify(basket))
  //}, [basket])


  //const addToBasket = (pizza) => {
  //  const isExist = basket.find((item) => item.id === pizza.id && pizza.isDrink === item?.isDrink)
  //  console.log(isExist);
  //  if (!isExist) {
  //    setBasket([...basket, pizza])
  //  }
  //}

  //const deleteBasket = (id) => {
  //  const newArr = basket.filter((item) => item.id !== id)
  //  setBasket(newArr)
  //}

  //const DeleteItem = (id) =>


  useEffect(() => {
    Promise.all([
      fetch(base_url + 'pizza'),
      fetch(base_url + 'drinks'),
    ]).then((res) => {
      Promise.all(res.map((item) => item.json()))
        .then((data) => {
          setLoading(false)
          setPizzas(data[0])
          setDrinks(data[1].map((el) => ({...el, isDrink: true})))
        })
    })
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar  /*onDelete={deleteBasket}*//>

      <Routes>
        <Route
          path="/"
          element={<HomePage drinks={drinks} pizzas={pizzas} />}
        />
        <Route path='/admin' element={<AdminPage pizzas={pizzas} drinks={drinks} />} />
        <Route path='/create-new-item' element={<CreateNewElement/>} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
