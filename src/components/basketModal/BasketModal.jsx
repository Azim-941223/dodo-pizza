//import { useSelector } from "react-redux"
import BasketOrder from "../basketOrder/BasketOrder"
import css from "./BasketModal.module.css"

function BasketModal({ opened, onBasketOpen, basket, onDelete }) {
  //const test = useSelector((state) => state);
  //console.log(test);

  const getSum = () => {
    const result = basket.reduce((sum, item) => {
      return sum + Number(item.price)
    }, 0)
    return result
  }
  return (
    <div className={`${css.wrapper} ${opened ? css.active : ''}`}>
      <div onClick={onBasketOpen} className={css.darkBlock}>Dark side</div>
      <div className={css.modal}>
        {
          basket.length ?
            <div>
              <div className={css.basketModal_container}>
                <div className={css.header}>
                  {getSum() > 365 ? <h2>{basket.length} товар на {getSum()} cом </h2>: <div className={css.minSum}><h2>{basket.length} товар на {getSum()} cом </h2>
                  <h3>До минимальной суммы на доставку - {(365-getSum())}  сом</h3> </div>}
                </div>
                <div className={css.order}>
                  {
                    basket.map((item) => (<BasketOrder
                      title={item.title} price={item.price}
                      description={item.description} id={item.id} onDelete={onDelete} />))
                  }
                </div>
              </div>
              <div className={css.do_order}>
                <input className={css.input} type="text" placeholder="Промокод" />
                <hr />
                <div className={css.info_our_order}>
                  <h4>{basket.length} товар</h4>
                  <h4>{getSum()} cом</h4>
                </div>
                <div className={css.info_our_order}>
                  <h4>Начислим додокоины</h4>
                  <h4>+32 </h4>
                </div>
                <div className={css.info_our_order}>
                  <h4>Доставка</h4>
                  <h4>Бесплатно</h4>
                </div>
                <hr />
                <div className={css.info_our_order}>
                  <h3>Сумма заказа</h3>
                  <h3>{getSum()} cом</h3>
                </div>
                <button className={`btn ${css.btn}`}>К оформлению заказа</button>
              </div>
            </div> : 
            <div className={css.container}>
              <img src="https://cdn.dodostatic.net/site-static/dist/121df529925b0f43cc73.svg" alt="dog with empty pizza box" />
              <h2>Ой, пусто!</h2>
              <p>Ваша корзина пуста, откройте «Меню»
                и выберите понравившийся товар.
                Мы доставим ваш заказ от 365 сом</p>
              <button className="btn">Вернуться в меню</button>
            </div>
        }
      </div>
    </div>
  )
}

export default BasketModal



