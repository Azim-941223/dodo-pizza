import { useDispatch } from "react-redux";
import { base_url } from "../../constants/constants";
import { basketAction } from "../../redux/basketSlice";
import css from "./PizzaCard.module.css";

function PizzaCard({title,price,description, img, id, isAdmin, isDrink, link}) {
  //const handlClick = () => addToBasket(
  //  {title,price,description,addToBasket, img, id, isDrink})

  const dispatch = useDispatch()


  const handlReduxClick = () => {
    const test = basketAction.addToBasket({title,price,description, img, id, isDrink})
    console.log(test);
    dispatch(test)
  }

  const deleteItem = () => {
    fetch(`${base_url}${link}/${id}` , {
      method:'DELETE'
    })
    .then(() => {
      alert('OK')
      window.location.reload()
    })
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