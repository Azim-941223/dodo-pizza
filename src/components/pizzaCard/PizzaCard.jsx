import css from "./PizzaCard.module.css";

function PizzaCard({title,price,description,addToBasket, img, id, isAdmin, isDrink}) {
  const handlClick = () => addToBasket(
    {title,price,description,addToBasket, img, id, isDrink})
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
        {!isAdmin && <button onClick={handlClick} className="btn">Выброть</button>}
      </div>
          {isAdmin && <div className="add_del">
            <button className="btn">Изменить</button> 
            <button className="btn">Удалить</button>
            </div>}
    </div>
  );
}

export default PizzaCard;