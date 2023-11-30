import { FaStar } from "react-icons/fa6";
import './Comments.css'

export const Comments = ({ data }) => {

    const { author, text, ocupation, calification, img } = data;

  return (
    <div className="comments max-w-[500px] h-[400px] bg-white rounded-[32px]">
        <div className="px-[10%] h-[30%] flex items-center">
            <div className="comment-img w-[70px] h-[70px] rounded-[50%] bg-orange-200 flex items-center overflow-hidden">
                <img src={img} alt="Foto" 
                    className="max-w-[100%]" />
            </div>
        </div>
        <div className="h-[45%] px-[10%] text-justify">
            <p className="line-clamp-6">{text}</p>
        </div>
        <div className="h-[20%] flex items-center justify-between px-[10%]">
            <div className="border-orange-200 border-l-[4px] max-h-[45px] flex flex-col justify-center gap-1">
                <div className=" indent-4">{author}</div>
                <div className="text-gray-500 text-[14px] font-light indent-4">{ocupation}</div>
            </div>
            <div className="flex items-center justify-center gap-1">
                <span className="font-medium text-[16px]">{calification}</span> <FaStar color="#ffbf00"/>
            </div>
        </div>
    </div>
  )
}
