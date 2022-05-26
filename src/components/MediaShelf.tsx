import Modal from '@mui/material/Modal';
import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";

type MediaItemProps = {
  imageUrl: any;
  caption: any;
}

const MediaItem: React.FC<MediaItemProps> = ({ imageUrl, caption }) => {

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    console.log(open);
  }, [open]);

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
