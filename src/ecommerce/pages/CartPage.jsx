


export const CartPage = () => {
  return (
    <section className="w-full flex flex-wrap items-center justify-center mt-4">
      <div className="w-full min-h-[calc(100vh-200px)] lg:w-[90%] flex flex-col items-center justify-between flex-wrap gap-4
                      xl:flex-row xl:w-[1200px] xl:flex-nowrap xl:items-start">
        <div className="w-11/12 bg-white rounded-lg overflow-hidden
                        xl:w-2/3">
          {/* title */}
          <div className="h-16 flex items-center border-b-1 p-[15px] border-b-[1px] border-gray-100">
            <h3 className="capitalize text-gray-200 font-medium">productos</h3>
          </div>

          {/* product */}
          <ul className="bg-gray-100 flex flex-col gap-[1px]">
            <li className="h-36">
              <div className="h-1/2 bg-white px-[15px] flex gap-1 items-center">
                <div className="h-full">
                  <img src="https://i.imgur.com/kXM6Y3t.jpg" alt="img" className="h-full"/>
                </div>
                {/* text and buttons */}
                <div className="flex flex-col gap-2">
                  <span className="line-clamp-1 text-[12px]">Bascula Digital De Peso Corasdasdasdasd</span>
                  <div className="flex gap-4">
                    <button className="text-sm capitalize text-[#3483fa]">eliminar</button>
                    <button className="text-sm capitalize text-[#3483fa]">guardar</button>
                  </div>
                </div>
              </div>
              <div className="h-1/2 bg-white flex items-center justify-around">
                <div className="h-[40px] w-[100px] bg-white shadow-md rounded-sm flex items-center justify-center border-gray-300 border-2">
                  <button className="h-full w-1/3">-</button>
                  <div className="h-full w-1/3 flex items-center justify-center">
                    <span className="">0</span>
                  </div>
                  <button className="h-full w-1/3">+</button>
                </div>
                <div>
                  <span className="font-light text-xl">$ 33300</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Confirmar pago */}
        <div className="w-full min-h-20 flex flex-col gap-2 items-center py-[20px] bg-white rounded-lg sticky bottom-0 shadow-[0px_-10px_20px_10px_#00000024]
                        xl:w-[30%] xl:shadow-none xl:pt-0 xl:top-0">
          <div className="w-full h-16 flex border-b-1 p-[15px] border-b-[1px] border-gray-100">
            <h3 className="capitalize text-gray-200 font-medium">Resumen de compra</h3>
          </div>
          <div className="flex w-11/12 text-gray-200 justify-between
                          xl:w-10/12">
            <span className="capitalize xl:text-sm">productos{ `(1)` }</span>
            <span className="">
              <span>$ </span>
              457.856
            </span>
          </div>
          <div className="flex w-11/12 text-gray-200 justify-between
                          xl:w-10/12">
            <span className="capitalize xl:text-sm">enviós</span>
            <span className="">
              <span>$ </span>
              0
            </span>
          </div>
          <div className="flex w-11/12 text-gray-200 justify-between
                          xl:w-10/12">
            <span className="capitalize font-semibold">total</span>
            <span className="font-semibold">
              <span className="">$ </span>
              457.856
            </span>
          </div>
          <button className="bg-blue-succes w-11/12 font-semibold text-white h-[50px] rounded-lg first-letter:uppercase
                          xl:w-10/12">
            continuar compra
          </button>
        </div>
      </div>
    </section>
  )
}
