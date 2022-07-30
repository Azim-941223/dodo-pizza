import css from './Header.module.css'


function Header() {
  return (
    <div className={`container ${css.wrapper}`}>
      <div className={css.header_info}>
        <img src="https://icon2.cleanpng.com/20180430/uoq/kisspng-domino-s-pizza-miraculous-ladybug-cat-noir-the-5ae6e8d2a712b6.4707667715250823226843.jpg" alt="logotype" />
        <h1>DODO PIZZA</h1>
        <div className={css.bish}>
          <h2>Доставка пиццы Бишкек</h2>
          <h3>37 мин 4.61</h3>
        </div>
        <div className={css.phone}>
          <a href="#">0(551)550-550</a>
          <h3>Звонок по телефону</h3>
        </div>
      </div>
      <div className={css.sign}>
        <button>Войти</button>
      </div>
    </div>
  )
}

export default Header