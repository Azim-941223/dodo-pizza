import BasketModal from "../basketModal/BasketModal";
import css from './Navbar.module.css'
import { useState } from 'react';

function Navbar({basket, onDelete}) {
  const [isModalOpen, setModalOpen] = useState(false)
  const onBasketOpen = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div className={`container ${css.wrapper}`}>
      <div className={css.navigation}>
        <a href="#">Пицца</a>
        <a href="#">Комбо</a>
        <a href="#">Закуски</a>
        <a href="#">Десерты</a>
        <a href="#">Напитки</a>
        <a href="#">Другие товары</a>
        <a href="#">Акции</a>
        <a href="#">Контакты</a>
        <a href="#">О нас</a>
      </div>
      <button onClick={onBasketOpen} className={`btn ${css.btn}`}>
        Корзина {basket.length ? <span className={css.number}>| {basket.length}</span>: ''}
      </button>
      <BasketModal opened={isModalOpen} onBasketOpen={onBasketOpen} basket={basket} onDelete={onDelete}/>
    </div>
  )
}

export default Navbar