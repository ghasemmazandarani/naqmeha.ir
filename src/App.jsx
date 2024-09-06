import Hero from "./components/Hero.jsx";
import FactCounters from "./components/FactCounters.jsx";
import Services from "./components/Services.jsx";
import MainServices from "./components/MainServices.jsx";
import TeamSlider from "./components/TeamSlider.jsx";
import MapComponent from "./components/MapComponent.jsx";

import img from "./assets/w.svg"
import ContactUs from "./components/ContactUs.jsx";
function App() {

  return (
    <>
      <h2 className="bg-sorati p-2 text-xs text-white font-bold">زیر نظر وزارت آموزش و پرورش</h2>
      <Hero />
      <div className="bg-sorati">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34D399" fillOpacity="1" d="M0,288L40,277.3C80,267,160,245,240,218.7C320,192,400,160,480,138.7C560,117,640,107,720,128C800,149,880,203,960,224C1040,245,1120,235,1200,192C1280,149,1360,75,1400,37.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
      <div className="flex flex-col h-max w-full bg-emerald-400">
        <FactCounters />
      </div>
      <div className="bg-emerald-400 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#BC7AF9" fillOpacity="1" d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,234.7C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" ></path></svg>      </div>
      <div className="bg-banafsh">
        <MainServices />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L34.3,186.7C68.6,149,137,75,206,74.7C274.3,75,343,149,411,197.3C480,245,549,267,617,245.3C685.7,224,754,160,823,144C891.4,128,960,160,1029,170.7C1097.1,181,1166,171,1234,154.7C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </div>
      <div className="flex flex-col h-max w-full bg-abi text-white">
        <p className="text-center pb-2 text-xl sm:text-3xl sm:pb-8">کلاس های فوق برنامه</p>
        <Services />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#075985" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,197.3C672,192,768,224,864,213.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className="bg-sky-800">
        <TeamSlider />
        <img src={img} />
      </div>
      <div className="flex flex-col p-2 bg-teal-700" id="contact">
        <p className="text-center text-white pb-2 text-xl sm:text-3xl sm:pb-8">ارتباط با ما</p>
        <div className="flex flex-col sm:flex-row p-2 ">
          <div className="basis-1/4 sm:basis-3/5">
            <ContactUs />
          </div>
          <div className="basis-3/4 sm:basis-2/5">
            <MapComponent />
          </div>
        </div>
        <p className="text-white text-xs sm:text-lg pt-6 pb-2 text-center">تمامی حقوق این وبگاه برای مرکز آموزشی نغمه های زندگی محفوظ است</p>
      </div>
    </>
  )
}

export default App
