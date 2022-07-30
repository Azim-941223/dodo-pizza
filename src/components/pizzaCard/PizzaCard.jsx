import css from "./PizzaCard.module.css";

function PizzaCard(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          src={
            props.img ||
            "https://cdn.picpng.com/pizza/pizza-pizza-icon-pizza-slice-56532.png"
          }
          alt={props.title}
        />
      </div>
      <div className={css.title}>{props.title}</div>
      <div className={css.description}>{props.description}</div>
      <div className={css.footer}>
        <div className={css.price}>от {props.price} сом</div>
        <button className="btn">Выброть</button>
      </div>
    </div>
  );
}

export default PizzaCard;