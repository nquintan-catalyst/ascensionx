type ListProps = {
  desc: String[];
}

const List: React.FC<ListProps> = ({ desc }) => {
  return(
    <ul>
      {desc.map((item: any, index: any) => (
        <li className="media-shelf--list-item" key={index}>{item}</li>
      ))}
    </ul>
  );
}

type TextShelfProps = {
    media: { name: string; key: number; desc: string | String[]; }[];
  };

const TextShelf: React.FC<TextShelfProps> = ({ media }) => {
    return (
      <div className="media-shelf-container">
        <ul className="media-shelf">
          {media.map(({ name, key, desc }) => (
            <li key={key} className="media-shelf--item">
              <figure>
                <h2>{name}</h2>
                {typeof desc === "string" ? <p>{desc}</p> : <List desc={desc} /> }
              </figure>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TextShelf;