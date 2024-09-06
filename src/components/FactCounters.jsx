import {useState} from "react";
import CountUp from "react-countup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool, faChalkboardTeacher,faUsers} from "@fortawesome/free-solid-svg-icons";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from 'framer-motion';

function FactCounters() {
   const countReq = 9;
  const countOrg = 85;
  const countThreat = 16;
  const [counterOn,setCounterOn] = useState(false);
  const toPersianNumber = (num) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return num.toString().split("").map(digit => persianDigits[digit] || digit).join("");
  };

  return (
    <>
    <p className=" text-xl pb-8 lg:pb-20 text-center text-white lg:text-4xl"> توانمندی های ما </p>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} >

        <div className="flex flex-row justify-around">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col text-center text-white text-4xl">
            <FontAwesomeIcon className="pb-3 sm:pb-6" icon={faSchool} />
            {counterOn &&<CountUp className=" text-3xl" end={countReq} duration={3} formattingFn={toPersianNumber}/>}
            <p className="text-sm py-2 lg:text-xl">سال فعالیت آموزشی</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col text-center text-white text-4xl">
            <FontAwesomeIcon className="pb-3 sm:pb-6" icon={faUsers} />
            {counterOn &&<CountUp className=" text-3xl" end={countOrg} duration={3} formattingFn={toPersianNumber}/>}
            <p className="text-sm py-2 lg:text-xl">گنجایش دانش آموز</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="flex flex-col text-white text-center text-4xl">
            <FontAwesomeIcon className="pb-3 sm:pb-6" icon={faChalkboardTeacher} />
            {counterOn &&<CountUp className=" text-3xl " end={countThreat} duration={3} formattingFn={toPersianNumber}/>}
            <p className="text-sm py-2 lg:text-xl"> کادر آموزشی فعال</p>
          </motion.div>


        </div>
      </ScrollTrigger>
    </>
  )
}

export default FactCounters;