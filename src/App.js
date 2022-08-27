import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { useEffect } from "react";
import Footer from './components/footer/Footer';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateNewElement from './pages/CreateNewElement/CreateNewElement';
import { useDispatch } from 'react-redux';
import { getAllPizzas } from './redux/pizzasSlice';
import { getAllDrinks } from './redux/drinksSlice';
import { useSelector } from 'react-redux';

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

  //const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch()
  const isPizzasLoading = useSelector((state) => state.pizzas.isLoading)
  const isDrinksLoading = useSelector((state) => state.pizzas.isLoading)

  useEffect(() => {
    dispatch(getAllPizzas())
    dispatch(getAllDrinks())
  }, [dispatch]);

  if (isPizzasLoading || isDrinksLoading) {
    return <h1>...Loading</h1>;
  }
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/create-new-item' element={<CreateNewElement/>} />
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;
