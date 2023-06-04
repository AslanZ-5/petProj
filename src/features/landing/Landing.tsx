import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

import 'styles/Landing.scss';
import doctor from 'assets/Landing/rectangle137.webp';

import {
  animalClass,
  tabs,
  servicesList,
  aboutList,
  questionsList,
} from 'const/LandingObjects';

export default function Landing(): JSX.Element {
  const [active, setActive] = useState(0);

  const onChange = (id: SetStateAction<number>) => setActive(id);
  const animalItem = animalClass.map((el) => (
    <div className="animal-item" key={el.title}>
      <div className="item-before">{el.num}</div>
      <div className="item-title">{el.title}</div>
      <img className="item-after" src={el.icon} alt="" />
    </div>
  ));
  const tabItem = tabs.map((el, ind) => {
    let tabclasss = 'tab';
    if (ind === active) tabclasss = `${tabclasss} tab-active`;

    return (
      <div
        role="button"
        className={tabclasss}
        // id={ind}
        tabIndex={ind}
        onClick={() => onChange(ind)}
        onKeyDown={() => onChange(ind)}
        key={`${el.title}${el.icon}`}
      >
        <div className="tab-icon">
          <img src={`${el.icon}`} alt="" />
        </div>
        <span className="tab-title">{el.title}</span>
      </div>
    );
  });

  const tabContent = tabs.map((el, ind) => {
    let classs = 'tabs-content';

    if (ind === active) classs = `${classs} active-tab-content`;
    const tabContentText = el.content.map((itemtext) => (
      <span className="sm-text" key={itemtext}>
        {itemtext}
      </span>
    ));

    return (
      <div className={classs} key={`${el.title}${el.icon}`}>
        <div className="tab-img">
          <img src={`${el.image}`} alt="" />
        </div>
        <div className="tab-item">
          <span className="tab-title">{el.title}</span>
          {tabContentText}
          <button className="Make-appointment Make-appointment-tab">
            ЗАПИСАТЬСЯ НА ПРИЕМ
          </button>
        </div>
      </div>
    );
  });

  const servicesContent = servicesList.map((el) => (
    <Link to="/" key={`${el}`} className="spanlist">
      {el}
    </Link>
  ));
  const aboutContent = aboutList.map((el) => (
    <Link to="/" key={`${el}`} className="spanlist">
      {el}
    </Link>
  ));
  const questionsContent = questionsList.map((el) => (
    <Link to="/" key={`${el}`} className="spanlist">
      {el}
    </Link>
  ));

  return (
    <section className="container">
      <section className="section first-screen">
        <div className="first-screen__text-module">
          <span className="pets-header">Мы заботимся о здоровье</span>
          <span className="pets-health">ВАШИХ ПИТОМЦЕВ</span>
          <button className="Make-appointment">ЗАПИСАТЬСЯ НА ПРИЕМ</button>
        </div>
      </section>
      <section className="section animal-classes">
        <span className="pets-header">Работаем со всеми видами животных</span>
        <div className="animal-items">
          {animalItem}
          <div className="animal-item">
            <button>feedback</button>
          </div>
        </div>
      </section>
      <section className="section clinic-services">
        <span className="pets-header">Услуги нашей клиники</span>

        <span className="pets-description">
          При каких симптомах нужно обратиться в наш ветеринарный центр
        </span>
        <div className="tab-block">
          <div className="tabs">{tabItem}</div>
          {tabContent}
        </div>
      </section>
      <section className="section about">
        <div className="about-text">
          <h1>Ветеринарная клиника Слон в Краснодаре</h1>
          <span>
            Первый филиал сети ветеринарных центров СЛОН открыл свои двери для
            владельцев и их питомцев в 2008 году в городе Сочи. На данный момент
            успешно работают и оказывают квалифицированные услуги 10 филиалов в
            городах Сочи и Краснодаре.
          </span>
          <h3>История создания сети ветеринарных центров «СЛОН»</h3>
          <span className="sm-text">
            Ветеринарная клиника Слон в Краснодаре - одна из ведущих и наиболее
            современных центров по оказанию помощи животным. ...
          </span>
          <span>Читать полностью</span>
          <div className="about-statistic">
            <div className="statistic-item">
              <span>12 лет</span>
              <span>Помогаем животным быть здоровыми</span>
            </div>
            <div className="statistic-item">
              <span>2000+</span>
              <span>Успешно сделанных операций</span>
            </div>
            <div className="statistic-item">
              <span>90%</span>
              <span>Клиентов рекомендуют нас своим знакомым</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section feedback-section">
        <div className="feedback-section-content">
          <span className="pets-header">Остались вопросы?</span>
          <span className="sm-text">
            Заполните форму и администратор свяжется с вами в течение 5 минут
          </span>

          <div className="feedback-section-form">
            <img src={doctor} alt="" />
            <form action="post">
              <h3>Введите ваши данные</h3>
              <input
                className="input-text"
                type="text"
                placeholder="Укажите ваше имя *"
              />
              <input
                className="input-text"
                type="text"
                placeholder="Укажите Ваш телефон *"
              />
              <div className="checbox-group">
                {' '}
                <input id="check" className="input-checkbox" type="checkbox" />
                <label htmlFor="check" className="label-checkbox">
                  Я согласен на обработку моих персональных данных
                </label>
              </div>
              <button className="Make-appointment Make-appointment-form">
                ЗАПИСАТЬСЯ ОНЛАЙН
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer__services">
          <h3 className="footer__title">Услуги</h3>
          {servicesContent}
        </div>
        <div className="footer__about">
          <h3 className="footer__title">Компания</h3>
          {aboutContent}
        </div>
        <div className="footer__questions">
          <h3 className="footer__title">Ответы на вопросы</h3>
          {questionsContent}
        </div>
        <div className="footer__fbblock">
          <div className="logo" />
          <div className="footer__icongroup">
            <span className="twitter" />
            <span className="vk" />
            <span className="fb" />
            <span className="wa" />
          </div>
          <span className="licence">
            Положение о политике персональных данных
            <p>Все права защищены, Ветклиника 2022</p>
          </span>
        </div>
      </section>
    </section>
  );
}
