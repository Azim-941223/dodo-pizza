import css from './Footer.module.css'

function Footer() {
  return (
    <div className='footer'>
      <div className={css.secret}>
        <div className={`container ${css.secrets}`}>
          <div>
            <img src="http://msksale.group/wp-content/uploads/2018/01/occupation-48-512.png" alt="" />
            <h2>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</h2>
          </div>
          <button className={css.btn}>Заполнить анкету</button>
        </div>
      </div>
      <div className={css.about_us}>
        <div className="container">
          <div className={css.footer_info}>
            <div className={css.info_about_us}>
              <div>
                <h3>Додо Пицца</h3>
                <a href="#">О нас</a>
                <a href="#">Додо-книга</a>
                <a href="#">Блог «Сила ума»</a>
                <a href="#">Додо ИС</a>
              </div>
              <div>
                <h3>Работа</h3>
                <a href="#">В пиццерии</a>
              </div>
              <div className={css.partner}>
                <h3>Партнерам</h3>
                <a href="#">Предложить помещение</a>
              </div>
              <div className={css.interest}>
                <h3>Это интересно</h3>
                <a href="#">Почему мы готовим без перчаток?</a>
                <a href="#">Экскурсии и мастер-классы</a>
              </div>
            </div>
            <div className={css.contacts}>
              <div className={css.contact}>
                <div className={css.call}>
                  <h4>звонок по</h4>
                  <img src="https://halberdbastion.com/sites/default/files/styles/medium/public/2017-10/Megacom-Kyrgyzstan-logo.png?itok=R8hb8ljS" alt="megacom" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLUE-cdUBZbOjNZcoVId_gnf9lRlwko9m1g&usqp=CAU" alt="megacom" />
                  <img src="https://toppng.com/uploads/preview/clip-freeuse-library-cell-phone-number-svg-png-icon-cell-phone-number-ico-11563012493ppmwhf48iv.png" alt="megacom" />
                </div>
                <a className={css.number} href="#">0(551)550-550</a>
                <a className={css.facebook} href="#">feedback@dodopizza.kg</a>
              </div>
              <div className={css.pay}>
                <h3>Принимаем к оплате</h3>
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLUE-cdUBZbOjNZcoVId_gnf9lRlwko9m1g&usqp=CAU" alt="o! pay" />
                  <img src="https://w7.pngwing.com/pngs/266/454/png-transparent-wallet-computer-icons-lignum-wealth-management-coin-purse-wallet-blue-service-rectangle.png" alt="pay" />
                  <img src="https://pngimages.in/uploads/png-thumb/bitcoin_photo1.png" alt="balance" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={css.footer_}>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl3ohcsw4hh9zMpf2s-VfD3XUvdIbfWJhZg&usqp=CAU" alt="" />
              <h3>© 2022 Правовая информация</h3>
            </div>
            <div className={css.network}>
              <img src="https://toppng.com/uploads/preview/gray-facebook-logo-png-11536002413lctvryrhnt.png" alt="facebook" />
              <img src="https://i.pinimg.com/originals/5c/e6/c2/5ce6c2c0c6c8f93c5d1f6162cdbfc5ff.jpg" alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

