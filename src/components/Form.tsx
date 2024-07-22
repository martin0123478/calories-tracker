import { useState } from "react"
import { categories } from "../data/categories"
export const Form = () => {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0

    })

    const handleChange = (e) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }
    return (
        <form action="" className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select name="" id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {
                        categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>

                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="name" className="font-bold">Actividad:</label>
                    <input type="text" id="name" className="border border-slate-300 rounded-lg p-2" placeholder="Ej. Comida,jugo de naranja, Ensalada, ejercicio, pesas, bicicleta " value={activity.name}
                        onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className="font-bold">Calorias:</label>
                    <input type="number" id="calories" className="border border-slate-300 rounded-lg p-2" placeholder="Calorias. ej 200 o 300 " value={activity.calories}
                        onChange={handleChange} />
                </div>

                <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer" value='Guardar comida o Guardar ejercicio' />
            </div>
        </form>
    )
}
