function ArtistCard({ artist }) {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <img
          className="w-16 h-16 rounded-badge mx-auto"
          src={artist.profile_img_url}
        />
        <div className="card-body">
          <h2 className="card-title text-center">{artist.name}</h2>
          <span>
            <small>
              <strong>@Email:</strong> {artist.email}
            </small>
          </span>
          <p>
            <strong>{artist.bio}</strong>
          </p>
          <p>
            <strong>$</strong>
            {artist.price}
          </p>
          <p>{artist.rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-warning">Higher Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
