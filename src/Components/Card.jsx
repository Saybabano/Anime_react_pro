import React from 'react';
import './Card.css';

function Card() {
  const cards = [
    {
      image: 'https://c8.alamy.com/comp/K86JWC/anime-poster-K86JWC.jpg',
      title: 'Darling in the FranXX',
      year: '2018',
    },
    {
      image: 'https://c8.alamy.com/comp/TRGKYT/penguin-highway-2018-directed-by-hiroyasu-ishida-and-starring-kana-kita-y-aoi-landen-beattie-and-miki-fukui-impressive-anime-adaptation-of-tomihiko-morimis-magical-fantasy-novel-about-the-mysterious-appearance-of-penguins-in-a-village-TRGKYT.jpg',
      title: 'Penguin highway',
      year: '2014',
    },
    {
      image: 'https://img.freepik.com/premium-photo/anime-nature-wallpaper-4k-quality_1164885-14459.jpg',
      title: 'Guilty Crown',
      year: '2011',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWPfCE4fXMZ7Vn73KA5guHLitHt_UEe4La0u3r0W8KnjTuhS-8INFGonWm5oxFoseJqw&usqp=CAU',
      title: 'Your Name',
      year: '2006',
    },
    {
      image: 'https://img.freepik.com/premium-photo/girl-boy-showing-love-each-other-anime-art-style_1104630-1258.jpg',
      title: 'Yona of the Dawn',
      year: '1996',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYnAzJi0uUnEu_Rxer9j48m3aFeX5ImJVl0OaM6in_IBUgH9XyIeGsdXU0_U6Te3QSkM&usqp=CAU',
      title: 'Trinity Seven',
      year: '2014',
    },
  ];

  return (
    <div className="card-container">
      {cards.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="info">
            <h3>{item.title}</h3>
            <p>{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
