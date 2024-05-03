import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {

    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/' ,[pathname])

    return (
        <header className=" bg-slate-800">
            <div className=" mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="Logotipo" />
                    </div>

                    <nav className='flex gap-4'>
                        <NavLink 
                            to="/"
                            className={({isActive}) => 
                                isActive ? 'text-orange-600 uppercase font-bold' : 'text-white uppercase font-bold'
                            }

                        >
                            Inicio
                        </NavLink>
                        <NavLink 
                            to="/favoritos"
                            className={({isActive}) => 
                                isActive ? 'text-orange-600 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form
                        className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
                    >
                        <div className=' space-y-4'>
                            <label 
                                htmlFor="ingredient"
                                className='block text-white uppercase font-extrabold text-lg'
                            >
                                Nombre o Ingrediente:
                            </label>
                            <input 
                                type="text" 
                                id='ingredient'
                                name='ingredient'
                                className=' p-3 w-full rounded-lg focus:outline-none'
                                placeholder='Nombre o Ingrediente. Ej. Vodka, Tequil, Coffe'
                            />
                        </div>
                        <div className=' space-y-4'>
                            <label 
                                htmlFor="category"
                                className='block text-white uppercase font-extrabold text-lg'
                            >
                                Categoría:
                            </label>
                            <select  
                                id='category'
                                name='category'
                                className=' p-3 w-full rounded-lg focus:outline-none'
                            >
                                <option value="">-- Seleccione --</option>
                            </select>

                        </div>
                        <input 
                            type="button" 
                            value="Buscar Recetas" 
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
