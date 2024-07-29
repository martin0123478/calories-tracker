import { useMemo } from "react"
import { Activity } from "../types"
import { Calories } from "./Calories"

type CaloriesTrackerProps = {
    activities: Activity[]
}
export const CaloriesTracker = ({ activities }: CaloriesTrackerProps) => {

    //contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])

    const caloriesburned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <Calories
                    calories={caloriesConsumed}
                    text="Consumidas"
                />

                <Calories
                    calories={caloriesburned}
                    text="Quemadas"
                />
            </div>


        </>
    )
}
