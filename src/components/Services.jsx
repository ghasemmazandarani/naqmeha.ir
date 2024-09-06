import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCalculator ,
  faMicrophone,
  faBookOpen,
  faBookReader,
  faDrum,faDrumSteelpan,
  faDesktop, faPaintBrush
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';


function Services() {
  return (
    <div className="flex  sm:flex-col pt-4 sm:pt-8 text-white" style={{ direction: "rtl", textAlign: "right" }}>
      <div className="flex flex-col md:flex-row">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faCalculator} />
          <p className=" text-xl py-2"> آموزش تخصصی چرتکه</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faMicrophone} />
          <p className=" text-xl py-2"> آموزش فن بیان </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faBookOpen} />
          <p className=" text-xl py-2">آموزش قصه گویی</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faBookReader} />
          <p className=" text-xl py-2">آموزش روان خوانی</p>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row pt-6">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faDrumSteelpan} />
          <p className=" text-xl py-2">ساز دف</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faDrum} />
          <p className=" text-xl py-2">ساز تنبک</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faDesktop} />
          <p className=" text-xl py-2">آموزش کامپیوتر</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col  text-4xl text-center p-8 basis-1/2 md:basis-1/4">
          <FontAwesomeIcon className="pb-2" icon={faPaintBrush } />
          <p className=" text-xl py-2">آموزش نقاشی</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Services;