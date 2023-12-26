import { Link } from "react-router-dom"

export const CardCategory = () => {
  return (
    <li className="w-[100%] bg-gray-300 rounded-lg overflow-hidden shadow-md 
                   lg:min-h-[250px]
                   xl:max-2-[]">
          <Link className="">
            <div className="flex justify-center items-center lg:h-[70%]">
              <img 
                className="w-[87px] lg:min-w-[50%]
                         xl:max-w-[90%] xl:w-[70%] xl:object-contain"
                src="https://i.imgur.com/VcIB8s9.png" alt="Categoria" 
              />
            </div>
            <div className="bg-white p-[5px] lg:h-[30%] 
                            lg:flex lg:items-center lg:justify-center
                            ">
              <p className="text-center first-letter:uppercase text-xs lg:text-lg lg:text-gray-200">nombre de categoria</p>
            </div>
          </Link>
    </li>
  )
}
