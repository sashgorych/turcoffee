# location
вставити біля div.language (у двох місцях, є в хедері і є в мобільному меню), огорнути в div.location-lang. приклад як має виглядати структура:
В *Ваше місто* виводити назву міста або фразу 'Ваше місто' у разі якщо не вибрано місто 
```
 <div class="location-lang">
                    <div class="language">......</div>
                    <div class="location-chose">
                        <div class="current-location">
                            <img src="/images/icons/loc.svg" alt="Україна">
                            <div class="selected-location">
                                <span>Ваше місто</span>
                            </div>
                        </div>
                    </div>
                </div>
```
popup вставити після section.footer 
```
<div class="location-popup hidden-object">
    <div class="location-close">
        <div class="icon-close"><span></span></div>
    </div>
    <div class="location-popup-in">
        <img src="/images/logo.svg" class="lozad" data-src="/images/logo.svg" alt="turcoffee" data-loaded="true">
        <p class="loc-pop-tittle">Оберіть своє місто</p>
        <ul>
            <li><a href="">Чернівці</a></li>
            <li><a href="">Київ</a></li>
            <li><a href="">Ужгород</a></li>
        </ul>
    </div>
</div>
```
popup js
```
 $('.location-close').click(function (e){
        e.preventDefault()
        closeLocationPopup()
    })
    $('.location-chose').click(function (e){
        e.preventDefault()
        openLocationPopup()
    })
    function openLocationPopup(){
        $('.location-popup').addClass('show-location')
        $('.location-popup').removeClass('hidden-object')
        lockBg()
    }
    function closeLocationPopup(){
        $('.location-popup').removeClass('show-location')
        $('.location-popup').addClass('hidden-object')
            unlockBg()
    }
```
location css
```

.location-lang {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center; }

.location-chose {
  cursor: pointer;
  margin-left: 10px; }
  .location-chose:hover span {
    text-decoration: underline; }
  .location-chose .current-location {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center; }
    .location-chose .current-location .selected-location {
      margin-top: 3px; }
    .location-chose .current-location .selected-location span {
      color: black;
      font-size: 14px; }
    .location-chose .current-location img {
      margin-right: 10px;
      width: 19px;
      height: 19px;
      margin-top: 3px; }

.location-popup {
  position: fixed;
  z-index: 25;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  overflow-y: auto;
  opacity: 0; }
  .location-popup.show-location {
    display: block;
    opacity: 1;
    -webkit-transition: opacity .5s;
    -o-transition: opacity .5s;
    transition: opacity .5s; }
  .location-popup .location-close {
    z-index: 26;
    position: absolute;
    top: 35px;
    right: 35px; }
  .location-popup .location-popup-in {
    max-height: 100%;
    width: 100%;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    max-width: 1180px;
    margin: auto;
    padding: 40px 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); }
    .location-popup .location-popup-in > p {
      font-size: 21px;
      color: black;
      margin-bottom: 40px; }
    .location-popup .location-popup-in > img {
      margin-bottom: 40px;
      max-width: 375px;
      width: 100%;
      display: block; }
  .location-popup ul {
    padding-bottom: 40px;
    gap: 40px;
    -webkit-column-count: 3;
       -moz-column-count: 3;
            column-count: 3; }
    .location-popup ul li {
      margin-bottom: 8px; }
    .location-popup ul a {
      color: black;
      font-size: 17px; }
      .location-popup ul a:hover {
        text-decoration: underline; }
      .location-popup ul a:before {
        content: "";
        margin-right: 10px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../images/icons/loc.svg");
        background-size: 18px auto; }

@media screen and (max-width: 900px) {
  .location-chose {
    margin-left: 0;
    margin-top: 5px; }
  .location-lang {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start; } }

@media screen and (max-width: 576px) {
  .location-popup .location-close {
    top: 15px;
    right: 15px; }
  .location-popup .location-popup-in > img {
    width: 60vw; }
  .location-popup ul {
    -webkit-column-count: 2;
       -moz-column-count: 2;
            column-count: 2; }
  .location-popup ul a {
    font-size: 15px; }
  .location-popup .location-popup-in > p {
    font-size: 17px; } }
```

# pdf
1) Сторінка для користувача. вигляд:
 ![Alt-текст](https://github.com/sashgorych/turcoffee/blob/master/image.png "Орк")   

код:
```
<section class="catalog online-catalog catalog-lvl1">
    <div class="container-block">
<div class="title-line-block">
     <div class="title-line-block-text">
          <h1 class="title-line-block-text-text">Електронний каталог</h1>
     </div>
     <div class="title-line-block-line"></div>
     
</div>
        <div class="catalog-content active">
            <div class="catalog-items">
                <div class="product-list">
                    <div class="products-container">
                        <a href="#cat1" class="item-online-catalog">
                            <p class="item-online-catalog-title">Кава</p>
                            <img src="/images/icon_pdf.svg" alt="">
                        </a>
                        <a href="#cat2" class="item-online-catalog">
                            <p class="item-online-catalog-title">Кава</p>
                            <img src="/images/icon_pdf.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="catalog_for_pdf_container" style="display: none;">
</div>
```
При кліку на ```<a class="item-online-catalog"> ```   
1)аяксом підвантажуємо потрібний html у прихований блок,  
2)Після того як загрузився html, el = document.querySelector('section.catalog_pdf');    
3)викликаєм generatePDF(el) і передаєм el   
   


``` div.catalog_for_pdf_container ``` прихований блок, сюди аяксом завантажуєм html для вибраної категорії. див.```<section class="catalog_pdf"> ```   
Структура блоку який підгружається:   
``` div.titul``` титулка, перша сторінка в pdf. завжди одинакова   
```div.pdf_title ``` Заголовок   
```div.catalog_pdf_list ``` список товарів - ```catalog_pdf_item ```     

Код:
```
   <section class="catalog_pdf" id="cat1">
        <div class="titul">
            <img src="/images/titul.jpg" alt="turcoffee catalog">
        </div>
        <div class="content-pdf">
            <img src="/images/logo.svg" alt="turcoffee" class="pdf-logo">
            <div class="cat-pad">
                <div class="pdf_title">
        <span class="art">Кава
            <img src="/images/triangle-right.svg" alt="">
        </span>
                    <span>Мелена</span>
                </div>
                <div class="no-break"></div>
                <div class="catalog_pdf_list">
                    <div class="catalog_pdf_item">
                        <div class="img">
                            <img src="./images/temp/product-img.jpg" alt="">
                        </div>
                        <div class="item-title">
                            <p> Кава мелена Elite
                            </p>
                        </div>
                        <div class="bottom-block">
                            <div class="bottom-block-left">
                                <div class="bottom-block-left-line">
                                    <span>Роздрібна</span>
                                    <p>182 <span>грн</span></p>
                                </div>
                                <div class="bottom-block-left-line">
                                    <span>Від 500 грн</span>
                                    <p>165 <span>грн</span></p>
                                </div>
                            </div>
                            <div class="bottom-block-right">
                                <div class="buy-img">
                                    <img src="/images/icons/basket_white_buy.svg" alt="add to cart">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
```
Ось так він виглядає 
 ![Alt-текст](https://github.com/sashgorych/turcoffee/blob/master/msg558545446-175797.jpg "Орк")










[Сторінка продукту](#Сторінка-продукту)
[Залогінений юзер](#Авторизація)
[Реєстрація](#Реєстрація)
[Корзина](#Корзина)
[Кабінет](#Кабінет)
# new Каталог в шапці  
## пункт без підкатегорії
```
<li class="lvl1">
    <a href="" class="">
       <span class="img-cat">
         <img src="./images/iconTurcoffe/coffee-machine.png" alt="">
       </span>
        Кавоварки
    </a>
</li>
```
 ## пункт з підкатегорією  
 - li.lvl1 має клас has_drop_li
 - після цього li в <a> є клас has_drop
 - присутній div.submenu  
  в div.list-title Заголовок категорії,    
  ul.list-items - підкатегорії,    
  div.submenu-image - картинка-банер для підкатегорії
```
<li class="lvl1 has_drop_li">
    <a href="" class="has_drop">
        <span class="img-cat">
            <img src="./images/iconTurcoffe/coffee-beans.png" alt=""></span>
        Кава
    </a>
    <div class="submenu">
        <div class="submenu-container">
            <div class="submenu-content">
                <div class="card-wrap" style="">
                    <div class="content-right">
                        <div class="list-title">
                            <a href="">Кава</a>
                        </div>
                        <ul class="list-items">
                            <li><a href="">Зернова</a></li>
                            <li><a href="">Мелена</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="submenu-image">
                <img src="/images/test-img.png" alt="">
            </div>
        </div>
    </div>
</li>
```
# new end Каталог в шапці  
# Попап додавання в корзину
showCartPopup()
```
<div class="default_popup cart_popup">
    <div class="popup_close">
        <div class="icon-close"><span></span></div>
    </div>
    <div class="popup_content">
        <div class="title-line-block">
            <div class="title-line-block-text">
                <h3 class="title-line-block-text-text">Ваш кошик</h3>
            </div>
            <div class="title-line-block-line"></div>
            <p class="title-line-block-link">В кошику <span> 1 товар</span> на суму <span>182 грн.</span></p>
        </div>
        <div class="cart_items_title cart_item">
            <div class="cart_itm_p2">

                <div class="stocks">

                </div>
                <div class="cart_itm_img"></div>
                <div class="cart_itm_p1">
                    <div class="cart_itm_title"><span>Назва товару</span></div>
                    <div class="cart_itm_kinds">
                        <div class="weights">
                            <span>Вага</span>
                        </div>
                        <div class="colors">
                            <span>Колір</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart_itm_price_block">
                <div class="counter-title">
                    <span>Кількість</span>
                </div>
                <div class="price">
                    <span>Ціна</span>
                </div>
                <div class="delete-t">
                    <span>Очистити</span>
                </div>
            </div>
        </div>
        <div class="cart_items">
            <div class="cart_item pr__colors">
                <div class="cart_itm_p2">
                    <div class="stocks">
                        <span class="new-stock_text">new</span>
                        <span class="new-discount_text">Знижка</span>
                    </div>
                    <div class="cart_itm_img"><a href=""><img src="./images/temp/product-img.jpg" alt=""></a></div>
                    <div class="cart_itm_p1">
                        <div class="cart_itm_title"><p><a href="">ARZUM OKKA MINIO OK004-D(ОРХІДЕЯ)</a></p></div>
                        <div class="cart_itm_kinds ">
                            <div class="weights">
                                <p class="c-title">Вага</p>
                                <span class="empty">—</span>
                                <p class="weight-name">1 кг</p>

                            </div>
                            <div class="colors">
                                <p class="c-title">Колір</p>
                                <span class="empty">—</span>

                                <span class="color-name" title="Червоний" style="background: red"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_itm_price_block">
                    <div class="more_info_block">
                        <div class="info_icon">
                            <span>i</span>
                        </div>
                        <div class="opt_info_block_content">
                            <p>При замовленні від <span>10</span>шт. ціна: 90.5 грн.</p>
                        </div>
                    </div>
                    <div class="counter">
                        <button class="minus" tabindex="0">–</button>
                        <input type="text" id="" value="1" name="" data-step="1" inputmode="numeric" tabindex="0">
                        <button class="plus" tabindex="0">+</button>
                    </div>
                    <div class="price">
                        <div class="discount">
                            <div class="prev_price">
                                <span>1700 грн.</span>
                            </div>
                            <div class="discount_count"><span>20%</span></div>
                        </div>
                        <p>1600 грн</p>
                    </div>
                    <a href="" class="delete">
                        <span>Видалити</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="cart_popup_bottom">
            <a class="return_to_products">Продовжити покупки</a>
            <button type="submit" class="custom-button__white" id="">Оформити замовлення</button>
        </div>
    </div>
</div>

```

# реферальне посилання
вставити на початок в футер ```<section class="footer">```

```
<div class="referal-block">
    <div class="referal-copy-popup">
        <span>Посилання скопійовано</span>
    </div>
    <div class="referal-link">
        <textarea class="js-copytextarea hidden-object">https://turcoffee.ua/ua</textarea>
        <div class="ref-info">
            <div class="ref-icon">
                <span>i</span>
            </div>
            <div class="ref-text">
                <span>Отримати реферальне посилання на поточну сторінку</span>
            </div>
        </div>
        <img src="./images/icons/icon_referal.svg" alt="ref">
    </div>
</div>

```
# Модуль/Блок FAQ
```
<div class="container-block faq-container">
    <div class="title-line-block">
        <div class="title-line-block-text">
            <h3 class="title-line-block-text-text">Вопросы и ответы</h3>
        </div>
        <div class="title-line-block-line"></div>
    </div>
    <div class="faq">
        <div class="accordion">

            <div class="accordion-item">
                <div class="accordion-item-header"><span>Do You Accept Credit Cards or Financing Options?</span></div>
                <div class="accordion-item-body text_content" style="max-height: 0px;">
                    <div class="accordion-item-body-content"><span>Yes, we do.<br></span></div>
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-item-header"><span>Do You Accept Credit Cards or Financing Options?</span></div>
                <div class="accordion-item-body text_content" style="max-height: 0px;">
                    <div class="accordion-item-body-content"><span>Yes, we do.<br></span></div>
                </div>
            </div>

        </div>
        <div class="bottom-orange-line"></div>
    </div>
</div>

```
# На сторінках перегляду категорій, під стрічкою товарів потрібно додати блок з описом категорії.
```
<section class="category-info-block">
    <div class="container-block">
        <div class="title-line-block drop-info-btn">
            <div class="title-line-block-text">
                <h2 class="title-line-block-text-text">[Купити] [%назва категорії%] [в %місто%]</h2>
            </div>
            <div class="title-line-block-line"></div>
        </div>
        <div class="drop-info-text text_content hidden-object">
            <p>З метою автоматизації процесу приготування кави по-турецьки, у 2014 році турецька компанія&nbsp;Arzum&nbsp;випустила на ринок кавоварку під назвою&nbsp;Arzum OKKA.</p>
            <p>З метою автоматизації процесу приготування кави по-турецьки, у 2014 році турецька компанія&nbsp;Arzum&nbsp;випустила на ринок кавоварку під назвою&nbsp;Arzum OKKA.</p>
            <p>З метою автоматизації процесу приготування кави по-турецьки, у 2014 році турецька компанія&nbsp;Arzum&nbsp;випустила на ринок кавоварку під назвою&nbsp;Arzum OKKA.</p>
        </div>
    </div>
</section>

```
# Статті по темі
(майже те саме що і Інші статті)
```
<section>
    <div class="container-block">
    <div class="title-line-block small-title-line-block">
        <div class="title-line-block-text">
            <h2 class="title-line-block-text-text">
                Цікаві статті</h2>
        </div>
        <div class="title-line-block-line"></div>
        <a href="" class="title-line-block-link">Всі статті по темі</a>
    </div>
        <div class="blog_archive" style="margin-bottom: 40px">
            <div class="blog_archive_slider">
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
                <div class="blog-item frame-button-r-block">
                    <div class="blog_i_date">
                        <span>Тема</span>
                        <span>22.12.2020</span>
                    </div>
                    <div class="blog-item-text">
                        <a href=""><p class="blog-item-title st-title">
                            TURCOFFEE UKRAINE
                            ОФІЦІЙНИЙ КАВОВИЙ
                            ПАРТНЕР ПАРУСНОЇ РЕГАТИ
                        </p></a>
                        <div class="blog-item-text-content">
                            <p>
                                На Дніпрі 27-28 травня в Києві
                                проводилася традиційна вітрильна
                                регата...
                            </p>
                        </div>
                    </div>

                    <div class="link">
                        <a href="">Детальніше</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>


```
# Блог - додаємо перемикач категорій:
блок перемикача можна взяти в каталозі і вставити так само як він вставлений в каталозі
# аудіо / відео 
так само як і на тітон

# Інфо про оптову ціну
код: 
```
<div class="more_info_block">
  <div class="info_icon">
    <span>i</span>
  </div>
  <div class="opt_info_block_content">
    <p>При замовленні від <span>10</span>шт. ціна: 90.5 грн.</p>
  </div>
</div>
 ```
- каталог. вставити код в ```div.product-counter-prices ``` перед ```div.counter```
- Сторінка товару. вставити код в ```div.product__price-counter_btns ``` перед ```div.counter```
- Корзина. вставити код в ```div.cart_itm_price_block ``` перед ```div.counter```


# Слайдер продуктів
в div.item зараз є div.item-wr . в div.item вставити всі потрібні товари щоб вийшла структура
```
<div class="item">
	<div class="item-wr all-item-inlink-4e54075e-4524-11eb-95f7-7824af9fe030 switch-item-279"></div>
	<div class="item-wr all-item-inlink-4e54075e-4524-11eb-95f7-7824af9fe030 switch-item-280" style="display:none;"></div>
	<div class="item-wr all-item-inlink-4e54075e-4524-11eb-95f7-7824af9fe030 switch-item-281" style="display:none;"></div>
</div>
```
# Лист корзиа
```
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>mail</title></head>
<style>
    body {
        margin: 0;
        padding: 0;
        text-align: center;
        font-family: arial;
        background: #f3f3f3;
    }
    .wrapper {
    }
    .logo {
        margin: 11px;
        height: 139px;
        background: #fff;
    }
    .user {
        font-weight: bold;
    }
    .img-l {
        margin: 0 auto;
        margin-top: 18px;
    }
    .title {
        margin-top: 30px;
        margin-bottom: 16px;
    }
    .data {
        margin-bottom: 25px;
        text-align: left;
        float: left;
    }
    .info {
        float: left;
        clear: both;
        text-align: left;
        font-size: 15px;
        margin-top: 19px;
        margin-bottom: 60px;
    }
    .user-d {
        color: #505151;
        line-height: 1.4;
    }
    .log {
        color: #000;
    }
    .b-panel {
        clear: both;
        background: #272b34;
    }
    .coop {
        clear: both;
        height: 45px;
        color: #919397;
        font-size: 13px;
        line-height: 45px;
        text-align: center;
        background: #22262f;
    }
    .center {
        max-width: 550px;
        margin: 0 auto;
    }
    .contact {
        color: #fbfbfb;
        font-size: 14px;
        padding-top: 36px;
        margin-bottom: 28px;
        display: flex;
        justify-content: space-between;
    }
    .bl {
        text-align: left;
        line-height: 1.4;
    }
    .h-l {
        color: #fff;
        text-decoration: none;
    }
    .status {
        color: #aa3838;
        font-size: 16px;
    }
    .info-order {
        color: #9a9a9a;
        font-size: 15px;
        margin-top: 23px;
    }
    .prise {
        color: #ab3939;
    }
    .tg {
        border-collapse: collapse;
        border-spacing: 0;
        border-color: #aabcfe;
        width: 97%;
        margin: 0 1.5%;
    }
    tr {
        border-bottom: 1px solid #f4f4f4;
    }
    .tg td {
        font-family: Arial, sans-serif;
        font-size: 14px;
        padding: 10px 5px;
        border-style: solid;
        border-width: 1px;
        overflow: hidden;
        word-break: normal;
        border-color: #aabcfe;
        border: none;
        color: #000;
        background-color: #e8edff;
    }

    .tg th {
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: normal;
        padding: 10px 5px;
        border-style: solid;
        border-width: 1px;
        overflow: hidden;
        word-break: normal;
        border-color: #aabcfe;
        border: none;
        color: #000;
        background-color: #f3f3f3 !important;
    }

    .tg .tg-5986 {
        background-color: #ffffff;
        border-color: inherit;
        text-align: center;
        vertical-align: top
    }
    .tg .tg-3xi5 {
        background-color: #ffffff;
        border-color: inherit;
        text-align: center;
        vertical-align: top
    }
    .text-order {
        width: 97%;
        display: flex;
        align-items: center;
        align-content: center;
        height: 77px;
        margin: 0 1.5%;
        background: #fff;
    }
    .o-t {
        padding-left: 19px;
    }

    /*table*/
    .h_total {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        padding: 5px 5px;
        box-sizing: border-box;
    }
    .h_total p {
        font-size: 23px;
    }
    .h_total p:first-child {
        margin-right: 25px;
    }

    .h_product_table .h_p_row .colors .color-name {
        position: relative;
        border-radius: 50%;
        font-size: 10px;
        line-height: 16px;
        width: 14px;
        height: 14px;
        margin: auto;
        border-radius: 50%;
        display: none;
    }
    .h_product_table .h_p_row .weights .weight-name {
        display: none;
    }
    .h_product_table .h_p_row.pr__weight .weights .empty {
        display: none;
    }
    .h_product_table .h_p_row.pr__weight .weights .weight-name {
        display: block;
    }
    .h_product_table .h_p_row.pr__colors .colors .empty {
        display: none;
    }
    .h_product_table .h_p_row.pr__colors .colors .color-name {
        display: flex;
    }

    .h_product_table {
        border: 1px solid #aeaeae;
    }
    .h_product_table .h_p_row {
        border-bottom: 1px solid #aeaeae;
        display: flex;
        font-size: 16px;
    }
    p{
        margin-top: 0;
        margin-bottom: 0;
    }
    .h_product_table .h_p_row:nth-child(2n+1) {
        background: #e7e7e7;
    }
    .h_product_table .h_p_row:nth-child(1) {
        background: #d1d1d1;
    }
    .h_product_table .h_p_row:nth-child(1) .h_p_col:first-child {
        justify-content: center !important;
    }
    .h_product_table .h_p_row:nth-child(1) p {
    }

    .h_product_table .h_p_row .h_p_col {
        padding: 4px 5px;
        border-left: 1px solid #aeaeae;
        display: flex;
        align-items: center;
    }
    .h_product_table .h_p_row .h_p_col:nth-child(1) {
        border: none;
        justify-content: flex-start;
        width: 52%;
    }
    .h_product_table .h_p_row .h_p_col:nth-child(2) {
        justify-content: center;
        width: 11%;
    }
    .h_product_table .h_p_row .h_p_col:nth-child(3) {
        justify-content: center;
        width: 12%;
    }
    .h_product_table .h_p_row .h_p_col:nth-child(4) {
        justify-content: center;
        width: 11%;
    }
    .h_product_table .h_p_row .h_p_col:nth-child(5) {
        justify-content: center;
        width: 14%;
    }
    .draw_up_order .h_product_table .h_p_row .h_p_col:nth-child(1) {
        width: 32%;
    }
    .draw_up_order .h_product_table .h_p_row .h_p_col:nth-child(6) {
        justify-content: center;
        width: 20%;
    }
    .draw_up_order_table {
        max-width: 1120px;
        margin: 0 auto 30px;
    }
    .draw_up_order_table .h_total {
        border-top: 1px solid #aeaeae;
    }

    .draw_up_order_table .table_content {
        overflow-x: auto;
    }
    .draw_up_order_table .h_p_row {
        min-width: 650px;
    }
    .h_product_table .table_content .h_p_row:last-child{
        border-bottom: none;
    }
</style>


<body style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-family:arial;background-color:#f3f3f3;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;">
<div class="wrapper">
    <div class="logo"
         style="margin-top:11px;margin-bottom:11px;margin-right:11px;margin-left:11px;height:139px;background-color:#fff;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;">
        <img class="img-l" src="http://<%$OUT?['GLOBALS']['server-addr']&amp;1%>/images/mail.logo.jpg" alt="Turcoffee"
             style="width: 400px;margin-top:18px;margin-bottom:0;margin-right:auto;margin-left:auto;"></div>
    <div class="center" style="overflow: hidden; max-width:550px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;" >
        <div class="title" style="margin-top:30px;margin-bottom:16px;" >
            <div class="hi">Приветсвуем <span class="user" style="font-weight:bold;" > <%$OUT?['GLOBALS']['username']%>,  </span></div>
            <div class="status" style="color:#aa3838;font-size:16px;" >Ваш заказ прийнят в обработку</div>
            <div class="info-order" style="color:#9a9a9a;font-size:15px;margin-top:23px;" >Информация о заказе</div>
        </div>
        <div class="data" style="margin-bottom:25px;text-align:left;" >
            <div class="user-d" style="color:#505151;line-height:1.4;" >№ заказа: <span class="log" style="color:#000;" > <%$OUT?['GLOBALS']['zakaz-index']%></span></div>
            <div class="user-d" style="color:#505151;line-height:1.4;" >Дата заказа: <span class="log" style="color:#000;" > <%$OUT?['GLOBALS']['zakaz-date']%></span></div>
            <div class="user-d" style="color:#505151;line-height:1.4;" >Сума заказа: <span class="log " style="color:#000;" > <span class="prise" style="color:#ab3939;" ><%$OUT?['GLOBALS']['zakaz-sum']%>  грн.</span></span></div>
            <div class="user-d" style="color:#505151;line-height:1.4;" >Спосoб доставки: <span class="log" style="color:#000;" > <%$OUT?['GLOBALS']['delivery-service']%></span></div>
            <div class="user-d" style="color:#505151;line-height:1.4;" >Город НП: <span class="log" style="color:#000;" > <%$OUT?['GLOBALS']['np-city-name']%> </span></div>

            <div class="user-d" style="color:#505151;line-height:1.4;" >Отделение НП: <span class="log" style="color:#000;" > <%$OUT?['GLOBALS']['np-wh-name']%> </span></div>

            <div class="user-d" style="color:#505151;line-height:1.4;" >Адрес: <span class="log" style="color:#000;" > <%$OUT?['GLOBALS']['delivery-adress']%></span></div>
        </div>
    </div>
    <div class="draw_up_order_table">
        <div class="h_product_table">
            <div class="table_content">
                <div class="h_p_row">
                    <div class="h_p_col"><p>Назва товару</p></div>
                    <div class="h_p_col"><p>Вага</p></div>
                    <div class="h_p_col"><p>Колір</p></div>
                    <div class="h_p_col"><p>Кількість</p></div>
                    <div class="h_p_col"><p>Ціна</p></div>
                </div>
                <div class="h_p_row pr__colors">
                    <div class="h_p_col"><p>Кава мелена Elite </p></div>
                    <div class="h_p_col">
                        <div class="weights">
                            <span class="empty">—</span>
                            <p class="weight-name">1 кг</p>
                        </div>
                    </div>
                    <div class="h_p_col">
                        <div class="colors">
                            <span class="empty">—</span>
                            <span class="color-name" title="Червоний" style="background: red"></span>
                        </div>
                    </div>
                    <div class="h_p_col"><p>1</p></div>
                    <div class="h_p_col"><p>250 грн</p></div>
                </div>
                <div class="h_p_row pr__weight">
                    <div class="h_p_col"><p>Кава мелена Elite </p></div>
                    <div class="h_p_col">
                        <div class="weights">
                            <span class="empty">—</span>
                            <p class="weight-name">1 кг</p>
                        </div>
                    </div>
                    <div class="h_p_col">
                        <div class="colors">
                            <span class="empty">—</span>
                            <span class="color-name" title="Червоний" style="background: red"></span>
                        </div>
                    </div>
                    <div class="h_p_col"><p>1</p></div>
                    <div class="h_p_col"><p>250 грн</p></div>
                </div>
                <div class="h_p_row">
                    <div class="h_p_col"><p>Кава мелена Elite </p></div>
                    <div class="h_p_col">
                        <div class="weights">
                            <span class="empty">—</span>
                            <p class="weight-name">1 кг</p>
                        </div>
                    </div>
                    <div class="h_p_col">
                        <div class="colors">
                            <span class="empty">—</span>
                            <span class="color-name" title="Червоний" style="background: red"></span>
                        </div>
                    </div>
                    <div class="h_p_col"><p>1</p></div>
                    <div class="h_p_col"><p>250 грн</p></div>
                </div>
            </div>
            <div class="h_total">
                <p>Загальна сума:</p>
                <p>4567 грн.</p>
            </div>
        </div>
    </div>
    <div class="b-panel"
         style="clear:both;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;">
        <div class="coop"
             style="clear:both;height:45px;color:#000000;font-size:13px;line-height:45px;text-align:center;background-color:#e7e7e7;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;">
            Copyright :copyright: &lt;%$OUT?['GLOBALS']['current-year']&amp;1%&gt; Turcoffee.ua
        </div>
    </div>
</div>
</body>
</html>


```

# Попап *нема потрібної кількості*
```
showCountErrorPopup()
closeCountErrorPopup()
```
```
<div class="default_popup countErrorPopup">
        <div class="popup_close">
            <div class="icon-close"><span></span></div>
        </div>
        <div class="popup_content">
            <p class="popup_title">Деяких товарів немає в наявності</p>
            <div class="order_table">
                <div class="order_row order_title_row pr__weight pr_colors">
                    <div class="order_col order_name"><p>Назва</p></div>
                    <div class="order_col order_w">
                       <p>Вага</p>
                    </div>
                    <div class="order_col order_c">
                        <p>Колір</p>
                    </div>
                    <div class="order_col order_count"><p>Замовлена к-сть</p></div>
                    <div class="order_col order_price"><p>Наявна к-сть</p></div>
                </div>

                <div class="order_row pr__weight">
                    <div class="order_col order_name"><p>Кава optimum</p></div>
                    <div class="order_col order_w">
                        <p>1 <span>кг</span></p>
                        <span class="empty">—</span>
                    </div>
                    <div class="order_col order_c">
                        <span class="product_color" title="Червоний" style="background: red"></span>
                        <span class="empty">—</span>
                    </div>
                    <div class="order_col order_count"><p>1</p></div>
                    <div class="order_col order_price"><p>0</p></div>
                </div>
                <div class="order_row pr__colors">
                    <div class="order_col order_name"><p>Кава optimum</p></div>
                    <div class="order_col order_w">
                        <p>1 <span>кг</span></p>
                        <span class="empty">—</span>
                    </div>
                    <div class="order_col order_c">
                        <span class="product_color" title="Червоний" style="background: red"></span>
                        <span class="empty">—</span>
                    </div>
                    <div class="order_col order_count"><p>1</p></div>
                    <div class="order_col order_price"><p>0</p></div>
                </div>

            </div>
            <div class="text_content">
                <p>Деякий текст</p>
            </div>
            <div class="cart_bottom">
                <button class="custom-button__white return_to_cart">Повернутися до кошика</button>
                <button class="custom-button">Продовжити замовлення</button>

            </div>

        </div>
    </div>
```
# Відновлення паролю
```
<section class="restore_pass_section">
    <div class="container-block">
        

        <div class="restore_pass">
            <div class="title-line-block">
     <div class="title-line-block-text">
          <h1 class="title-line-block-text-text">Відновлення паролю</h1>
     </div>
     <div class="title-line-block-line"></div>
     
</div>
				
            <div class="default_register_block">
            
				
            <div class="contacts__form register_form">
                <form action="/register/check_ua" id="register-form">
                    <input type="hidden" name="obj[data][reffral-code]" value="">
                    <div class="form__in">
                        <div class="form_part">
                            <div class="form-row regfrm-rows regfrm-surname-row">
                                <span class="label">Введите email или номер телефона</span>
                                <input class="all-cback-inp" value="" required="" placeholder="" name="obj[data][surname]" type="text">
                                <span class="all-cback-inp-span cback-inp-error-text" id="cback-inp-err-surname-span">*обов`язкове поле</span>
                            </div>
							
                            
                            

                        </div>
                        
                    </div>
<div class="text_anotation">
                <p>Вам відправлено .....</p>
            </div>
                    

                    

                    <button type="submit" class="custom-button__white left_btn" id="">Отримати код</button>
                </form>
            </div>
        </div>
            
        </div>

    </div>
</section>
```

# Форма відгуку
ось тут ``` <input class="js-rating-input" name="rating" type="hidden" value="5"> ``` знаходиться значення зірочок 
Перевірку на пустий textarea зробив js-ом.

```
<div class="default_popup review_popup">
    <div class="popup_close">
        <div class="icon-close"><span></span></div>
    </div>
    <div class="popup_content">
        <p class="popup_title">Залишити відгук</p>
        <div class="contacts__form register_form">
            <form action="" id="cback-form" class="">
                <div class="form_one_col">
                    <div class="form-row">
                        <div class="menu-main-top-auth authorized">
                            <div class="authorized__block">
                                <div class="user__data">
                                    <div class="user__photo">
                                        <div class="user__photo_in"><img src="./images/default-images/user_avatars.svg"
                                                                         alt=""></div>
                                    </div>
                                    <div class="user_right_col">
                                        <div class="user__name"><span>Іван Іванович</span></div>
                                        <div class="rating_container">
                                            <span class="label">Ваша оцінка</span>
                                            <div class="rating-box">
                                                <div class="rating">
                                <span class="checked"><input type="radio" name="userside_rating" id="str5"
                                                             value="5"><label
                                        for="str5"></label></span>
                                                    <span class="checked"><input type="radio" name="userside_rating"
                                                                                 id="str4" value="4"><label
                                                            for="str4"></label></span>
                                                    <span class="checked"><input type="radio" name="userside_rating"
                                                                                 id="str3" value="3"><label
                                                            for="str3"></label></span>
                                                    <span class="checked"><input type="radio" name="userside_rating"
                                                                                 id="str2" value="2"><label
                                                            for="str2"></label></span>
                                                    <span class="checked"><input type="radio" name="userside_rating"
                                                                                 id="str1" value="1"><label
                                                            for="str1"></label></span>
                                                </div>
                                                <input class="js-rating-input" name="rating" type="hidden" value="5">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <textarea placeholder="Написати відгук на продукт..." name="reviewtext"></textarea>
                        <span class="all-cback-inp-span cback-inp-error-text">*обов`язкове поле</span>
                    </div>
                </div>
                <div class="buttons-row2">
                    <a class="custom-button__white cancel">Скасувати</a>
                    <button type="submit" class="custom-button send-review disabled">Залишити відгук</button>
                </div>
            </form>
        </div>
    </div>
</div>

```

# Айтем продукту
стандартний айтем 
```
 <div class="item">
    <div class="item-wr">
        <div class="stocks">
          <span class="new-stock_text">new</span>
            <span class="new-discount_text">Знижка</span>
        </div>
        <div class="set-favourite">
            <a href="" class=""></a>
        </div>
        <div class="img">
            <a href="">
                <img src="./images/temp/product-img.jpg" alt="">
            </a>
        </div>
        <p class="item-title">
            <a href="" title="" tabindex="0">Кава мелена Elite</a>
        </p>
        <div class="middle-block">
            <div class="rating" data-rate="50">
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
            </div>

        </div>
        <div class="not-available-block">
            <p>немає в наявності</p>
            <a href="">Повідомити про наявність</a>
        </div>
        <div class="item-kinds colors">
           <a href="#" class="state-active"><span style="background: #979A9A"></span></a>
            <a href="#" class=""><span style="background: #979A9A"></span></a>
             <a href="#" class=""><span style="background: #979A9A"></span></a>
        </div>
        <div class="item-kinds weights">
            <a href="" class=""><span>0.1 кг</span></a>
            <a href="" class=""><span>0.25 кг</span></a>
            <a href="" class="state-active"><span>1 кг</span></a>
        </div>

        <div class="bottom-block">
            <div class="product-counter-prices">
                <div class="counter">
                    <button class="minus" tabindex="0">-</button>
                    <input type="text" id="" value="1" name="" data-step="1" inputmode="numeric" tabindex="0">
                    <button class="plus" tabindex="0">+</button>
                </div>
                <div class="product-prices">
                    <p class="product-price">182 <span>грн</span></p>
                    <div class="product-price-old">
                        <div class="product-price-old-container">
                            <p>210 <span>грн</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="add-to-cart"><img src="./images/icons/basket_white_buy.svg" alt="cart">
            </button>
        </div>
        <button class="make-order">Замовити</button>

    </div>
 </div>
```
---

# link
# Різні стани товару
Все керується додаванням класу до div.item

- клас pr__origin - товар без кольорів і різних фасувань
- клас pr__weight - товар з різними фасуваннями
- клас pr__colors - товар з різними кольорами 
- клас not-available - робить товар неактивним (немає в наявності)
- клас discount - Показує маркер що товар зі знижкою.  відображає акційну і стару ціну
- клас pr_new - показує маркер *новинка*


На картинці показано можливі варіанти вигляду товару, а в списку класи які треба додати.
По дефолту має завжди бути клас item і якись з нище перелічених(без них товар буде криво відображатись):

1) pr__origin має вийти ```<div class="item pr__origin">```
2) pr__weight not-available має вийти ```<div class="item pr__weight not-available">```
3) pr__colors має вийти ```<div class="item pr__colors">```
4) pr__weight має вийти ```<div class="item pr__weight">```
5) pr__colors not-available має вийти ```<div class="item pr__colors not-available">```
6) pr__origin not-available має вийти ```<div class="item pr__origin not-available">```
 
 ![Alt-текст](https://github.com/sashgorych/akrona/blob/master/%D1%96%D0%B2%D0%B0%D0%B2%D0%B0%D0%B2%D0%B0.jpg "Орк")
---
# блок з акціями (*червоні маркери на товарі)
Поки що було тільки 2 акційні маркери знижка і новинка. 
```
<div class="stocks">
   <span class="new-stock_text">new</span>
   <span class="new-discount_text">Знижка</span>
</div>
```
---
# Рейтинг товару
в data-rate вставляти рейтинг у % (в прикладі 50%) далі js-ом все обробиться
```
<div class="middle-block">
            <div class="rating" data-rate="50">
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
                <span class="rateStarPopup"></span>
            </div>
</div>
```
---
# Неактивний товар
Блок який відобразиться коли товар неактивний
```
 <div class="not-available-block">
            <p>немає в наявності</p>
            <a href="">Повідомити про наявність</a>
        </div>
```    
нище по коду буде ще кнопка 
 
```
<button class="make-order">Замовити</button>
```
---

# Блок з кольором і вагою

цей блок відповідає за різновиди кольору. в span в style треба закидувати колір товару

Клас state-active в <a> показує якого кольору товар відображається.( в дизайні кружочок активного кольору має активний стан.) 

```
<div class="item-kinds colors">
            <a href="#" class="state-active"><span style="background: #979A9A"></span></a>
            <a href="#" class=""><span style="background: #979A9A"></span></a>
             <a href="#" class=""><span style="background: #979A9A"></span></a>
 </div>
```
 
цей блок відповідає за різновид по масі упакування      
Клас state-active в <a> показує якої фасовки товар зараз відображається( в дизайні цифра 'активної' фасовки має активний стан.) 

```
        <div class="item-kinds weights">
            <a href="" class=""><span>0.1 кг</span></a>
            <a href="" class=""><span>0.25 кг</span></a>
            <a href="" class="state-active"><span>1 кг</span></a>
        </div>
```

Ці два блоки можна відображати одночасно, css сховає лишнє

---

# Ціна товару
в div.product-price-old-container стара ціна. в div.product-price актуальна ціна. якщо немає акції то відображається ціна в div.product-price
```
<div class="product-prices">
                    <p class="product-price">182 <span>грн</span></p>
                    <div class="product-price-old">
                        <div class="product-price-old-container">
                            <p>210 <span>грн</span>
                            </p>
                        </div>
                    </div>
 </div>
 ```
# Інше
в кінці футера, перед скріптами є section.text-templates
в цьому блоці шаблони для підсказок в товарі (наведи на сердечко, кошик). Вивів це в html для зручності переводу на різні мови


---

# Сторінка продукту
## Фото продукту

в ```<a href="./images/temp/product-item500x500.jpg" class="item">  вставляється велика картинка (буде відкриватись на весь екран)```
 в ```<img src="./images/temp/product-item500x500.jpg" alt="">``` вставляється маленька картинка, ну або та ж сама велика
 в ``` <div class="product__media-360"> ``` тут 360 і відеоогляд товару. якщо нема то повність не виводиш div.product__media-360
```
               <div class="product__media">
                        <div class="product__media-main__img">
                            <a href="./images/temp/product-item500x500.jpg" class="item">
                                <img src="./images/temp/product-item500x500.jpg" alt="">
                            </a>
                            <a href="./images/temp/product-img3.jpg" class="item">
                                <img src="./images/temp/product-img3.jpg" alt="">
                            </a>
                            <a href="./images/temp/product-img2.jpg" class="item">
                                <img src="./images/temp/product-img2.jpg" alt="">
                            </a>
                        </div>
                    <div class="product__media-360">
                        <div class="item item-360">
                            <div class="item-in">
                                <img src="./images/temp/product-item500x500.jpg" alt="">
                            </div>
                        </div>
                        <div class="item item-video">
                            <div class="item-in">
                                <img src="./images/temp/product-item500x500.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="product__media-thumbs">
                        <div class="item">
                            <div class="item-in">
                                <img src="./images/temp/product-item500x500.jpg" alt="">
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-in">
                            <img src="./images/temp/product-img3.jpg" alt="">
                        </div>
                        </div>
                        <div class="item">
                            <div class="item-in">

                            <img src="./images/temp/product-img2.jpg" alt="">
                        </div>
                        </div>
                    </div>
            </div>

```
## Акції
Тут так само як і в акціях в каталозі
до section.product-page додаються класи
1) discount - якщо є знижка + там де ціна вивести альтернативну ціну. css все відобразить
2) pr_new - якщо товар новинка
3) not-available - якщо товару нема в наявності + 
                                                  в коді є div
                                                  ```
                                                   <div class="not__available">
                                                      <p>Немає в наявності</p>
                                                      <button class="make-order">Замовити</button>
                                                    </div>
                                                   ```
                                                  тут або button - якщо буде попап або``` <a>``` якщо посилання 

## Кольори, вага
виводити або ```<div class="item-kinds colors"> ```
 або
```<div class="item-kinds weights">```
 або
 нічого (якщо нема ні кольорів, ні ваг) (залишаєш <div class="product-kinds"> пустим - не видялаєш його)
```
<div class="product-kinds">
                <div class="item-kinds colors">
                    <a href="" class="state-active" tabindex="0"><span style="background: #979A9A"></span></a>
                    <a href="" class="" tabindex="0"><span style="background: #979A9A"></span></a>
                </div>
                <!--<div class="item-kinds weights">-->
                    <!--<a href="" class="" tabindex="0"><span>0.1 кг</span></a>-->
                    <!--<a href="" class="" tabindex="0"><span>0.25 кг</span></a>-->
                    <!--<a href="" class="state-active" tabindex="0"><span>1 кг</span></a>-->
                <!--</div>-->
            </div>
```

## Відео

ця конструкція передбачена для відео з ютубу. Це потрібно щоб воно прогружалось лише в випадку коли користувач дійсно хоче його подивитись (економія трафіку)

В ```<a>``` class video__link вставляти посилання на відео
```
<div class="product__part4">
                <div class="video">
                    <a class="video__link" href="https://www.youtube.com/watch?v=2sdIzYBoTO4&ab_channel=Arzum">
                        <picture>
                            <source srcset="" type="image/webp">
                            <img class="video__media" src="" alt="video">
                        </picture>
                    </a>
                    <button class="video__button" aria-label="Запустити відео">
                        <svg width="68" height="48" viewBox="0 0 68 48"><path class="video__button-shape" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path class="video__button-icon" d="M 45,24 27,14 27,34"></path></svg>
                    </button>
                </div>
            </div>
```
Якщо потрібно вставляти інші відео(не з ютубу) ось така конструкція
```

<div class="product__part4">
                <div class="video video--enabled">
                <iframe src=''>
                </iframe>
                 </div>
</div>
```

якщо ж відео нема то не виводити блок div.product__part4



---
# Авторизація

Для пк і моб. різні блоки. В пк версії - блок в хедері. В моб версії - блок в меню.

Пк версія:
до ``` <div class="auth"></div> ``` додається клас authorized щоб вийшло ```<div class="auth authorized"></div> ```

В оновленій версії в цьому діві є ``` <div class="authorized__block"> ``` в ньому розмітка для авторизованого юзера.


В ```<div class="user__status__block">``` є  data-percent="50" - сюди вписується прогрес акаунту (клієнт - партнер - ...)  у % 

Моб. версія.
В меню є  ```<div class="menu-main-top-auth">``` До нього додається клас authorized щоб вийшло   ```<div class="menu-main-top-auth authorized">```

Далі все так само як на пк.

Посилання ``` <a href="" class="custom-link">Вхід</a> <a href="" class="custom-link">Реєстрація</a> ``` можна залишати, вони ховаються css-ом


---
# Корзина

айтем товару ```<div class='cart_item'> ``` аналогічно до інших сторінок різновиди товарів (кольори, вага, знижка...)
До  ```<div class='cart_item'> ``` додається клас:
1) pr__origin має вийти ```<div class="cart_item pr__origin">```
2) pr__colors має вийти ```<div class="cart_item pr__colors">```
3) pr__weight має вийти ```<div class="cart_item pr__weight">```
4) discount - Показує маркер що товар зі знижкою.  відображає акційну ціну
5) pr_new - показує маркер *новинка*

Попап при кліку *додати замовлення*:
Таблиця товарів. Один айтем ```<div class="order_row"></div> ``` додаються такі самі класи які описані вище.

*Підібрати по акціям* слайдер товарів. такий самий як на головній

---

# Реєстрація
По дефолту показується форма. Якщо успішно відправились дані то показується замість форми текст. Щоб його показати треба до ```<section class="register_section"> ``` додати клас step2 щоб вийшло ```<div class="register_section step2"> ```


---
# Кабінет
## Ваш наставник
може бути дефолтний блок туркофі ```<div class="turcoffee"> ``` або конкретний користувач ```<div class="person"> ``` (в коді style='display:none;')

