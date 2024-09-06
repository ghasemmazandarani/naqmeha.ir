import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  return (
    <div className="flex flex-col  text-center text-white lg:pb-8">
      <div className="flex flex-row lg:justify-start  py-3 sm:pb-8 sm:pl-2">
        <FontAwesomeIcon className=" text-sm lg:text-lg pl-1" icon={faLocationDot} />
        <p className=" text-sm text-end lg:text-lg"> آدرس : گرگان، روستای زنگیان، نیایش ۲۳</p>

      </div>
      <div className="flex flex-row py-3 sm:pl-2">
        <FontAwesomeIcon className=" text-sm lg:text-lg pl-1 sm:pb-8 " icon={faInstagram} />
        <p className="text-sm text-end lg:text-lg" style={{direction:"rtl",textAlign:"right"}}>اینستاگرام : naghmehayezendegi.teymoori@</p>
      </div>
      <div className="flex flex-row py-3 sm:pl-2">
        <FontAwesomeIcon className=" text-sm lg:text-lg pl-1 " icon={faPhone} />
        <p className="text-sm text-end lg:text-lg" style={{direction:"rtl",textAlign:"right"}}>شماره تماس : ۰۹۱۱۱۷۰۴۵۰۶ </p>
      </div>
    </div>
  );
}

export default Contacts;