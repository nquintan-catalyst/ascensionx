import Modal from '@mui/material/Modal';
import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import getText from "./IslandInfo";

type MediaItemProps = {
  imageUrl: any;
  caption: any;
}

const MediaItem: React.FC<MediaItemProps> = ({ imageUrl, caption }) => {
  
  const [open, setOpen] = useState(false);

  return(
    <>
      <li key={`${caption}-${imageUrl}`} className="media-shelf--item">
        <figure>
          <picture>
            <img src={`/ascensionx/${imageUrl}`} alt={caption} loading="lazy" />
          </picture>
          <figcaption>{caption}</figcaption>
          <button onClick={()=>{setOpen(!open)}}>Learn More</button>
        </figure>
      </li>

      <Modal
       open={open}
       onClose={()=>setOpen(false)}
      >
        <div className="media-modal">
          <div className="media-modal--container">

            <button onClick={()=>setOpen(false)}>
              <GrClose />
            </button>
            <h1>{caption}</h1>
            <img src={`/ascensionx/${imageUrl}`} alt={caption} loading="lazy" />
            <p>
              {getText(caption)}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );

}

type MediaShelfProps = {
  media: { imageUrl: string; caption: string }[];
};

const MediaShelf: React.FC<MediaShelfProps> = ({ media }) => {
  return (
    <div className="media-shelf-container">
      <ul className="media-shelf">
        {media.map(({ imageUrl, caption }) => (
          <MediaItem imageUrl={imageUrl} caption={caption} />
        ))}
      </ul>
    </div>
  );
};

export default MediaShelf;
