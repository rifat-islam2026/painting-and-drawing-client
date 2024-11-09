import { useEffect, useState } from "react";
import ArtistCard from "../CraftCard/ArtistCard";

function Artists() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        fetch('/public/artists.json')
            .then(res => res.json())
            .then(data => setArtists(data))
    }, [])
console.log(artists)
  return (
    <div>
          <h1 className="text-4xl text-center font-bold mt-5">Meet the Artists</h1>
          <p className="text-sm text-center pt-3 text-gray-500">The Visionaries Behind the Art</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:px-0 px-5 my-10">
              {
                  artists.map(artist => <ArtistCard key={artist.artist_id} artist={artist } />)
              }
          </div>
    </div>
  )
}

export default Artists
