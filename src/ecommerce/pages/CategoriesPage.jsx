
import { categories } from "../../helpers/categories"
import { CardCategory } from "../components/CardCategory"

export const CategoriesPage = () => {


  return (
    <>
    <section className="w-full flex justify-center items-center mt-4 lg:mt-8">
      <ul className="w-[90%] grid grid-cols-3 gap-2 lg:w-4/5 
                     lg:gap-10 lg:grid-cols-6
                     xl:w-[1200px] xl:grid-cols-4">
      {
        categories.map( category => (
          <CardCategory key={category.id} data={category} />
        ))
      }
      </ul>
    </section>
    </>
  )
}
