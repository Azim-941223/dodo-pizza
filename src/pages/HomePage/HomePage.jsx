import Slider from "react-slick";
import OrderCard from "../../components/orderCard/OrderCard";
import PizzaCard from "../../components/pizzaCard/PizzaCard";
import SliderCard from "../../components/sliderCard/SliderCard";


const SliderCards = [
    {id:1 , img: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg"},
    {id:2 , img: "https://static.toiimg.com/thumb/56933159.cms?width=1200&height=900"},
    {id:4 , img: "https://biancazapatka.com/wp-content/uploads/2020/09/best-pizza-dough-recipe.jpg"},
    {id:3 , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TKV5tGd4NEaS-iYa8OvFwAfL7oE-5S7jhw&usqp=CAU"},
    {id:5 , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmne2C4nk65C_WLHNuiabJsa03uOdVIqIQrw&usqp=CAU"},
    {id:6 , img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="},
    {id:7 , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkBMBtpI3QYwpNunvWlB656jtHXZRHsw8bw&usqp=CAU"},
    {id:8 , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb-QOETAw_2smnhPtCqsh8A1KTeBnpYEBTQ&usqp=CAU"},
    {id:9 , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuLtwi6pGANYNzs5vnwxWE948iSSteJM1Ig&usqp=CAU"},
    {id:10 , img: "https://d2mekbzx20fc11.cloudfront.net/uploads/pizzas-568cbd2ca6e3ff38a7d3517f5a324dccdce099125f0c4b8bcd6647f4f18b4e3f.png"},
    {id:11 , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHUPybr-TVcPEv7Jfrw-yjKRuggn_jgXkoQ&usqp=CAU"},
    {id:12 , img: "https://images.squarespace-cdn.com/content/v1/58a1ba5503596e1e0cb09ac3/1583970373741-T0GP2ASKQZD959OYJLOB/pizza2.jpg"},
]

const SliderOrderCards = [
  {id:1, img:'https://www.pngkey.com/png/full/52-520173_pizza-pizza-png-hd.png', title: '2 пиццы', price: '999 сом'},
  {id:2, img:'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX2890324.jpg', title: 'мексиканская', price: 'от 499 сом'},
  {id:3, img:'https://media.istockphoto.com/photos/pork-souvlaki-wrap-picture-id174774088?k=20&m=174774088&s=170667a&w=0&h=OEeCON5Czb7GSq5i3jBQarNG7qur3RObu_Q43HjWBDU=', title: 'додстер', price: '169 сом'},
  {id:4, img:'https://irecommend.ru/sites/default/files/product-images/1803601/dU2RaVVSubGSYhydhnX6Q.jpg', title: 'бруслетики, 16шт', price: '169 сом'},
  {id:5, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q9zXvuX8o492lca8XYZK66AINwgtWPiXsQ&usqp=CAU', title: 'Пепперони', price: 'от 399 сом'},
]


function HomePage(props) {
     const settings = {
        dots: false,
        speed: 500,
        infinity: true,
        slidesToShow: 6,
        slidesToScroll: 6,
     }
     const settingsOrder = {
      dots: false,
      speed: 500,
      infinity: false,
      slidesToShow: 4,
      slidesToScroll: 1,
     }
  return (
    <div className="container page">
        <Slider {...settings}>
            {SliderCards.map((item) => <SliderCard key={item.id} img={item.img}/> )}
        </Slider>
        <div className="page">
          <h2 className="title">Часто заказывют</h2>
          <Slider {...settingsOrder}>
            {SliderOrderCards.map((item) => <OrderCard 
            key={item.id} 
            img={item.img} 
            title={item.title} 
            price={item.price}/>)}
          </Slider>
        </div>
        <h1 className="title">Пицца</h1>
        <div className="cards_wrapper">
          {props.pizzas.map((pizza) => <PizzaCard key={pizza.id} title={pizza.title}
            description={pizza.description}
            price={pizza.price}/>)}
        </div>
        <h2 className="title">Напитки</h2>
        <div className="cards_wrapper">
        {props.drinks.map((drink) => (
            <PizzaCard
              key={drink.id}
              img={drink.img}
              title={drink.title}
              description={drink.description}
              price={drink.price}
            />
          ))
        }
        </div>
    </div>
  )
}

export default HomePage