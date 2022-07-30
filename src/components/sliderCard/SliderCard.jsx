import css from './SliderCard.module.css'

function SliderCard(props) {
  return (
    <div className={css.wrapper}>
        <img src={props.img || "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg"} alt="pizza" />
    </div>
  )
}

export default SliderCard