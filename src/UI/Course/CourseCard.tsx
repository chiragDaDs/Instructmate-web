import { useState } from "react";
import { Books, Users, ArrowBigRight } from "tabler-icons-react";
import "./cardStyle.css"

type Instructor = {
  name: string;
  profileImage: string;
};
type Props = {
  title: string;
  description: string;
  instructor: Instructor;
  studentCount: number;
  color?: string;
  key?:number,
  ck?:number
};

const CourseCard: React.FC<Props> = ({
  title,
  description,
  instructor,
  studentCount,
  key,
  ck
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const colorHexList = ["FF99C8","FCF6BD","D0F4DE","A9DEF9","E4C1F9"];
  const LargeColorHexList=["bg-[#FFADAD]","bg-[#FFD6A5]","bg-[#FDFFB6]","bg-[#CAFFBF]","bg-[#9BF6FF]","bg-[#A0C4FF]","bg-[#BDB2FF]","bg-[#FFC6FF]"];
  ck = Number(ck);
  ck = ck?ck:1;
  
  const colorkey2 = (ck % 8) + 1;

  const colorClass = LargeColorHexList[colorkey2];


  // const colorCla
  // console.info(colorkey,colorkey2,secondColor,color );
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  
  return(<>
    <div className={` card-${colorkey2  }  rounded-[24px] shadow-xl overflow-hidden min-h-[350px]  flex flex-col`}>
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between w-full">
            <Books size={30} strokeWidth={0.5} color={"#000000"} />
            <div className="flex font-serif text-lg">
              <Users size={30} strokeWidth={0.5} color={"#000000"} />
              {studentCount}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {title}
            </h2>
            <p className="text-gray-800 text-base mb-4">
              {description}
            </p>
          </div>
        </div>
        <div id="card-footer" className="flex justify-between">
          <div className="flex items-center">
            <img
              src={instructor.profileImage}
              alt="Instructor"
              className="h-10 w-10 rounded-full mr-2"
            />
            <span className="text-gray-800 text-sm">{instructor.name}</span>
          </div>
          <button>
            <ArrowBigRight
              className="scale-100 hover:scale-150"
              size={35}
              strokeWidth={0.5}
              color={"#000000"}
            />
          </button>
        </div>
      </div>
    </div>
  </>
  )
};

export default CourseCard;
