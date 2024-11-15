import React, { useEffect, useState } from 'react';
import Slider from './Slider';

function AddCard({handleClick}) {
  const [animeList, setAnimeList] = useState([]);


  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => response.json())
      .then(data => setAnimeList(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  

  return (
    <div>
      <Slider />
      {/* Anime List Section */}
      <div className="anime-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '2rem',marginBottom:'3rem' }}>
        {animeList.map(anime => (
          <div
            key={anime.mal_id}
            className="anime-card"
            style={{
              width: '200px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              marginBottom:'1rem'
  
            }}
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{ width: '200px', height: '250px' }}
            />
            <div className="anime-details" style={{ padding: '10px' }}>
              <h3 style={{ fontSize: '15px', margin: '0 0 10px 0' }}>{anime.title}</h3>
              <p style={{ fontSize: '14px', color: '#555' }}>
                {anime.synopsis ? anime.synopsis.substring(0, 100) + '...' : 'No description available.'}
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
                  marginTop: '10px',
                  marginLeft: '2rem',
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
