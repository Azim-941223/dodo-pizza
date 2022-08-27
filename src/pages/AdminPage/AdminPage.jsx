import { Link } from "react-router-dom"
import PizzaCard from "../../components/pizzaCard/PizzaCard"
import { useSelector } from 'react-redux';

function AdminPage() {
  const pizzas = useSelector((state) => state.pizzas.data)
  const drinks = useSelector((state) => state.drinks.data)
  return (
    <div className="container page">
        <h1>Admin panel</h1>
        <h2 className="title">Пицца</h2>
        <Link to='/create-new-item' className="btn">Add new element</Link>
        <div className="cards_wrapper">
        {
            pizzas.map((item) => (<PizzaCard key={item.id} {...item}  isAdmin={true} link='pizza'/>))
        }
        </div>
        <h2 className="title">Напитки</h2>
        <div className="cards_wrapper">
            {
                drinks.map((item) => (<PizzaCard key={item.id} {...item} isAdmin={true} link='drinks'/>))
            }
        </div>
    </div>
  )
}

export default AdminPage