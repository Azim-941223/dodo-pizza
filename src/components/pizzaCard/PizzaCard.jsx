import { useDispatch } from "react-redux";
import { basketAction } from "../../redux/basketSlice";
import css from "./PizzaCard.module.css";
import Api from '../../api/Api';

function PizzaCard({title,price,description, img, id, isAdmin, isDrink, link}) {
  //const handlClick = () => addToBasket(
  //  {title,price,description,addToBasket, img, id, isDrink})

  const dispatch = useDispatch()


  const handlReduxClick = () => {
    dispatch(basketAction.addToBasket({title,price,description, img, id, isDrink}))
  }

  const deleteItem = () => {
    if (link === 'pizza') {
      Api.deletePizza(id).then(() => {
        window.location.reload()
      })
    } else {
      Api.deleteDrink(id).then(() => {
        window.location.reload()
      })
    }
    //fetch(`${base_url}${link}/${id}` , {
    //  method:'DELETE'
    //})
    //.then(() => {
    //  alert('OK')
    //  window.location.reload()
    //})
  }
  
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          src={
            img ||
            "https://cdn.picpng.com/pizza/pizza-pizza-icon-pizza-slice-56532.png"
          }
          alt={title}
        />
      </div>
      <div className={css.title}>{title}</div>
      <div className={css.description}>{description}</div>
      <div className={css.footer}>
        <h2 className={css.price}>от {price} сом</h2>
        {!isAdmin && <button onClick={handlReduxClick} className="btn">Выброть</button>}
      </div>
          {isAdmin && <div className="add_del">
            <button className="btn">Изменить</button> 
            <button onClick={deleteItem} className="btn">Удалить</button>
            </div>}
    </div>
  );
}

export default PizzaCard;