import css from './BasketOrder.module.css'

function BasketOrder(props) {

    const onDelete = () => {
        props.onDelete(props.id)
    }

    return (
        <div className={css.bgr}>
            <div className={css.content}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKS9u6q4oNzvjMss74JavcdU6nVJRXMTD2hGKpRYw444ABxq3Ic40Ar6TuXRPgoiEu8A&usqp=CAU" alt="" />
                <div className={css.content_info}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <button onClick={onDelete} className={css.x}>x
                </button>
            </div>
            <hr />
            <div className={css.order_basket}>
                <h3>{props.price} сом</h3>
            </div>
        </div>
    )
}

export default BasketOrder