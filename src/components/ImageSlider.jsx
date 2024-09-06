import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img from "../assets/p1.jpg"
import img2 from "../assets/p2.jpg"
import img3 from "../assets/p4.jpg"
import img4 from "../assets/4.jpg"

const ImageSlider = () => {

  const photos = [
    { src: img },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    // می‌توانید تصاویر بیشتری اضافه کنید
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 h-screen text-green-500 flex flex-col ">
      <h1 className="text-3xl font-bold py-6 text-center">گالری تصاویر نغمه های زندگی</h1>
      <div className="flex-grow relative justify-center content-center">
        <Slider {...settings} className="h-full">
          {photos.map((photo, index) => (
            <div key={index} className="h-full flex items-center justify-center">
              <img
                src={photo.src}
                alt={`اسلاید ${index + 1}`}
                className="max-h-screen w-screen bg-fixed"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;

// نمونه استفاده:
