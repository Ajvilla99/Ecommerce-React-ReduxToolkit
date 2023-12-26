import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <div className='w-full h-[90vh] box-border flex flex-col justify-center items-center relative  overflow-hidden'>
    <form className='w-11/12 flex flex-col gap-5 lg:w-96'>
      <div className='w-full flex flex-col justify-center items-center gap-5 mb-4'>
            <div className='w-3/5 h-12 rounded-md flex justify-center items-center bg-gray-200 uppercase text-gray-300'>LOGO</div>
            <h2 className='text-3xl text-gray-200'>Crear Cuenta</h2>
      </div>
      <div className="w-full flex gap-5">
        <input type="text" className="w-full h-12 rounded-md outline-none indent-4 capitalize" placeholder="nombre*"/>
        <input type="text" className="w-full h-12 rounded-md outline-none indent-4 capitalize" placeholder="apellido*"/>
      </div>
      <div className="w-full flex flex-col gap-5">
        <input type="text" className="w-full h-12 rounded-md outline-none indent-4" placeholder="ej:correo@email.com"/>
        <input type="text" className="w-full h-12 rounded-md outline-none indent-4" placeholder="password"/>
      </div>
      <div className="w-full flex flex-col gap-5">
        <input type="date" placeholder="Fecha de nacimiento" className="w-full h-12 rounded-md outline-none px-5"/>
      </div>
      <div className="">
        <button className="w-full h-12 rounded-md text-gray-300 bg-gray-200 hover:bg-gray-600 ease-in duration-100">Crear cuenta</button>
      </div>
      <Link
        to={'/login'}
        className='text-sm text-gray-500 text-center'>¿Ya tienes una cuenta? iniciar sesión</Link>
    </form>
  </div>
  )
}
