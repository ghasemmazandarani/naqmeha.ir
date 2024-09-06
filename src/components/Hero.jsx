import { Link } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';

function Hero() {

  return (
    <div className="flex flex-row bg-sorati justify-center items-center pt-6 lg:pt-8">
      <img alt="نغمه های زندگی" src="https://naqme.storage.c2.liara.space/photo.png" className="w-1/3 h-1/3 mr-4 lg:pr-16" />
      <div className="flex flex-col justify-center w-full h-32 text-white pt-3">
        <div className="flex flex-row justify-center items-center gap-2 lg:gap-4 lg:pb-4">
          <p className=" text-lg lg:text-5xl text-center">به دبستان </p>
          <p className=" text-lg lg:text-5xl text-center"> و </p>
          <p className=" text-lg lg:text-5xl text-center"> آموزشگاه زبان </p>
        </div>
        <di>
          <p className=" text-lg lg:text-5xl text-center lg:pb-4">نغمه های زندگی </p>
        </di>
        <div className="flex place-content-center">
          <p className="flex text-lg lg:text-5xl text-center  place-content-center"> خوش آمدید</p>
        </div>
        <div className="flex place-content-center gap-2 pt-2  lg:pt-8  lg:gap-6">
          <RouterLink to="/gallery" >
            <button type="button" className="bg-sky-600 hover:bg-sky-700 rounded-full text-white p-2 px-3 text-xs lg:text-xl lg:p-4 lg:px-8">گالری تصاویر</button>
          </RouterLink>
          <Link to="contact" smooth={true} duration={800} >
            <button type="button" className="bg-sky-600 hover:bg-sky-700 rounded-full text-white p-2 px-3 text-xs lg:text-xl lg:p-4 lg:px-8">  تماس با ما</button>
          </Link>
        </div>

      </div>

    </div>

  )
}

export default Hero
