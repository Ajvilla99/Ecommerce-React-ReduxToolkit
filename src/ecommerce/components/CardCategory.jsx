import { Link } from "react-router-dom"

export const CardCategory = ({ data }) => {

  const { name, imgURL } = data;

  return (
    <li className="w-[100%] h-32 bg-gray-300 rounded-lg overflow-hidden shadow-md 
                   lg:min-h-[250px]
                   xl:max-2-[]">
          <Link to={`/${name}`}
            className="">
            <div className="flex justify-center items-center h-[70%] lg:h-[70%]">
              <img 
                className="w-11/12 max-h-[90%] object-contain
                          lg:min-w-[50%]
                          xl:max-w-[90%] xl:w-[70%] xl:object-contain"
                src={imgURL} alt={name} 
              />
            </div>
            <div className="bg-white p-[5px] h-[30%] flex items-center justify-center
                              lg:h-[30%]
                            ">
              <p className="text-center first-letter:uppercase text-xs lg:text-lg lg:text-gray-200">{ name }</p>
            </div>
          </Link>
    </li>
  )
}
