type MediaShelfProps = {
  media: { imageUrl: string; caption: string }[];
};

const MediaShelf: React.FC<MediaShelfProps> = ({ media }) => {
  return (
    <div className="media-shelf-container">
      <ul className="media-shelf">
        {media.map(({ imageUrl, caption }) => (
          <li key={`${caption}-${imageUrl}`}>
            <figure>
              <picture>
                <img src={`/ascensionx/${imageUrl}`} alt={caption} loading="lazy" />
              </picture>
              <figcaption>{caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaShelf;
