import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";
import img4 from "../assets/p4.jpg";
import "./styles.css"
import {faChalkboardTeacher, faUserGraduate} from "@fortawesome/free-solid-svg-icons";
function MainServices() {
  return (
    <>
      <p className="text-xl sm:text-4xl text-white pb-2 sm:pb-8  text-center">خدمات ما</p>
      <div className="flex flex-col xl:flex-row">
        <div className="flex-col py-4 ">
          <p className="flex flex-row justify-center text-white text-center text-xl sm:text-3xl sm:pb-6  py-4 sm:pt-16 font-bold">آموزشگاه
            <p className="px-1 underline underline-offset-[6px] sm:underline-offset-[12px] decoration-4 decoration-green-500"> تخصصی زبان</p>
          </p>
          <img src={img2} className="rounded-2xl mx-auto w-4/5 "/>
        </div>
        <div className="flex-col py-4">
          <p className="flex flex-row justify-center text-white text-center text-xl sm:text-3xl sm:pb-6 py-4 sm:pt-16 font-bold">پیش دبستانی
             <p className="px-1 underline underline-offset-[7px] sm:underline-offset-[12px]  decoration-4 decoration-blue-500">پسرانه</p>
            و
            <p className="px-1 underline underline-offset-[6px] sm:underline-offset-[12px] decoration-4 decoration-pink-500">دخترانه</p>
          </p>
          <img src={img1} className="rounded-2xl mx-auto w-4/5 "/>
        </div >
        <div className="flex-col py-4">
          <p className="flex flex-row justify-center text-white text-center text-xl sm:text-3xl sm:pb-6 py-4 sm:pt-16 font-bold">دبستان
            <p className="px-1 underline underline-offset-[6px] sm:underline-offset-[12px] decoration-4 decoration-pink-500">دخترانه</p>
          </p>
          <img src={img4} className="rounded-2xl mx-auto w-4/5 "/>
        </div>
      </div>
      <p className="text-white text-center text-sm sm:text-2xl pt-10 pb-2 sm:pb-4 sm:pt-20">
        <FontAwesomeIcon icon={faUserGraduate} className="pl-1" />
        دارای مشاور به همراه آموزش مهارت های زندگی
      </p>
    </>
  );
}

export default MainServices;