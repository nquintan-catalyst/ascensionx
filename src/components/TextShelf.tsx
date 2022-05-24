type TextShelfProps = {
    media: { name: string; key: number; desc: string }[];
  };

const TextShelf: React.FC<TextShelfProps> = ({ media }) => {
    return (
      <div className="media-shelf-container">
        <ul className="media-shelf">
          {media.map(({ name, key, desc }) => (
            <li key={key} className="media-shelf--item">
              <figure>
                <h2>{name}</h2>
                <p>{desc}</p>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TextShelf;