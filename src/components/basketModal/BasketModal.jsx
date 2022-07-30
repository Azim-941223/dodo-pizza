import css from "./BasketModal.module.css"

function BasketModal(props) {
  return (
    <div className={`${css.wrapper} ${props.opened ? css.active : ''}`}>
      <div onClick={props.onBasketOpen} className={css.darkBlock}>Dark side</div>
      <div className={css.modal}>
        <div className={css.container}>
          <img src="https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg" alt="dog with empty pizza box" />
          <h2>Ой, пусто!</h2>
          <p>Ваша корзина пуста, откройте «Меню»
            и выберите понравившийся товар.
            Мы доставим ваш заказ от 365 сом</p>
            <button className="btn">Вернуться в меню</button>
        </div>
      </div>
    </div>
  )
}

export default BasketModal