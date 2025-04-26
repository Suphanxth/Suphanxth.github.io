import './Card.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Card() {
  const [cards] = useState([
    {
      title: 'Easible: Automated Network Device Configuration and Verification Web Application',
      content: 'Thesis Project',
      image: '/src/assets/easible.png',
      text: "Thesis Project: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: '/myproject/easible',
    },
    {
      title: 'EoX Check',
      content: 'EoX Check',
      image: '/src/assets/ciscodevnet.png',
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: '/myproject/eoxcheck',
    }
  ]);

  return (
    <div className="home__cards">
      {
        cards.map((card, i) => (
          <Link to={card.link} className="home__card__item" key={i}>
            <img src={card.image} alt={card.title} className="home__card__item__image" />
            <h2 className="home__card__item__title">{card.title}</h2>
            <p className="home__card__item__text">{card.text}</p>
          </Link>
        ))
      }
    </div>
  );
}

export default Card;