import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function UserProfile() {
  const [watchedAnime, setWatchedAnime] = useState([]);
  const [favoriteAnime, setFavoriteAnime] = useState([]);

  useEffect(() => {
    fetchUserAnime();
  }, []);

  async function fetchUserAnime() {
    // Fetch watched anime
    const { data: watchedData } = await supabase
      .from('user_anime')
      .select('*')
      .eq('status', 'watched');

    // Fetch favorited anime
    const { data: favoriteData } = await supabase
      .from('user_anime')
      .select('*')
      .eq('status', 'favorite');

    setWatchedAnime(watchedData || []);
    setFavoriteAnime(favoriteData || []);
  }

  return (
    <div className="user-profile">
      <h2>My Anime List</h2>
      
      <div className="anime-section">
        <h3>Watched Anime</h3>
        <div className="anime-grid">
          {watchedAnime.map(anime => (
            <div key={anime.id} className="anime-card">
              <img src={anime.image_url} alt={anime.title} />
              <h4>{anime.title}</h4>
            </div>
          ))}
          {watchedAnime.length === 0 && <p>No watched anime yet</p>}
        </div>
      </div>

      <div className="anime-section">
        <h3>Favorite Anime</h3>
        <div className="anime-grid">
          {favoriteAnime.map(anime => (
            <div key={anime.id} className="anime-card">
              <img src={anime.image_url} alt={anime.title} />
              <h4>{anime.title}</h4>
            </div>
          ))}
          {favoriteAnime.length === 0 && <p>No favorite anime yet</p>}
        </div>
      </div>
    </div>
  );
}

export default UserProfile; 