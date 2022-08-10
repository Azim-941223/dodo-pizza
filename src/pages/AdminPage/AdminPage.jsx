import { Link } from "react-router-dom"
import PizzaCard from "../../components/pizzaCard/PizzaCard"

function AdminPage({pizzas,drinks}) {
  return (
    <div className="container page">
        <h1>Admin panel</h1>
        <h2 className="title">Пицца</h2>
        <Link to='/create-new-item' className="btn">Add new element</Link>
        <div className="cards_wrapper">
        {
            pizzas.map((item) => (<PizzaCard key={item.id} {...item}  isAdmin={true}/>))
        }
        </div>
        <h2 className="title">Напитки</h2>
        <div className="cards_wrapper">
            {
                drinks.map((item) => (<PizzaCard key={item.id} {...item} isAdmin={true}/>))
            }
        </div>
    </div>
  )
}

export default AdminPage