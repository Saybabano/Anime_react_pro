import React, { useEffect, useState } from 'react';
import Slider from './Slider';


function AddCard({handleClick}) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then((response) => response.json())
      .then((data) => setAnimeList(data.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Slider />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '2rem',
          marginBottom: '3rem',
        }}
      >
        {animeList.map((anime) => (
          <div
            key={anime.mal_id}
            style={{
              width: '200px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              marginBottom: '1rem',
              height: '490px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                padding: '10px',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <h3
                style={{
                  fontSize: '15px',
                  margin: '0 0 10px 0',
                  textAlign: 'center',
                }}
              >
                {anime.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#555',
                  textAlign: 'justify',
                }}
              >
                {anime.synopsis
                  ? anime.synopsis.substring(0, 100) + '...'
                  : 'No description available.'}
              </p>
              <button
                onClick={() => handleClick(anime)}
                style={{
                  backgroundColor: 'rgb(11, 212, 247)',
                  color: 'white',
                  border: 'none',
                  padding: '6px 10px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  marginTop: '1rem',
                  alignSelf: 'center',
                  width: '80%',
                  textAlign: 'center',
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCard;
