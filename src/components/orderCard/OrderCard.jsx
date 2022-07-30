import css from './OrderCard.module.css'

function OrderCard(props) {
  return (
    <div className={css.wrapper}>
        <img src={props.img} alt="order menu" />
        <div className={css.title}>
            <h4>{props.title}</h4>
            <h5>{props.price}</h5>
        </div>
    </div>
  )
}

export default OrderCard