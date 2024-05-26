import { notification1 } from "../assets";
import { notificationImages } from "../constants";
import robotimg from '../images/Chat bot-pana.svg';
const Notification = ({ className, title, title2 }) => {
  return (
 
   <div>
     <div
        className={`${
          className || ""
        } flex items-center p-4 pr-2 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
      >
        <img
          src={robotimg}
          width={85}
          height={192}
          alt="image"
          className="rounded-xl"
        />

        <div className="flex-1">
          <h6 className="mb-1 font-semibold text-base">{title}</h6>

          {/* <div className="flex items-center justify-between">
            <ul className="flex -m-0.5">
              {notificationImages.map((item, index) => (
                <li
                  key={index}
                  className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                >
                  <img
                    src={item}
                    className="w-full"
                    width={20}
                    height={20}
                    alt={item}
                  />
                </li>
              ))}
            </ul>
            
          </div> */}
        </div>
      </div>

   </div>
     
  );
};

export default Notification;
