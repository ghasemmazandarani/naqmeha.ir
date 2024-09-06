import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";
import img4 from "../assets/p4.jpg";

const images = [
  img1,
  img2,
  img4,

];

const Slideshow = () => {
  return (
    <div className="grid place-items-center bg-pink-400 p-10">
      <div className="slide-container w-64 h-36 ">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img className="bg-cover bg-center" key={index}  src={each} />)
          }
        </Zoom>
      </div>
    </div>

  )
}

export default Slideshow;