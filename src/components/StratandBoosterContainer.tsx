import { StratagemContainer } from "./Stratagem"
import type { stratagem } from "../assets/types"
import { useState } from "react"

// type StratandBoosterProps = {
//     stratArray: stratagem[]
//     boosterArray: booster[]
// }

import { stratagems } from "../assets/stratagems"
import { BoosterContainer } from "./Booster"
// import { boosters } from "../assets/booster"

// type displayArray = stratagem[] & { length: 4 };

const StratAndBoosterContainer = (): JSX.Element => {

    const rollStrats = (arrayOfAllStrats: stratagem[]): stratagem[] => {
        const returnArray: stratagem[] = []

        while (returnArray.length < 4) {
            // filter array of strats to  remove any in the return array already
            const currentArrayState = arrayOfAllStrats.filter((strat) => 
                !returnArray.some((returnStrat) => returnStrat.name === strat.name)
            )

            // pick one at random form that and assing to the return array
            const randomStrat = currentArrayState[Math.floor(Math.random() * currentArrayState.length)]

            returnArray.push(randomStrat)
        }

        // sort the return array
        const sortedArray = stratSort(returnArray)

        return sortedArray
    }

    // const refreshAllStrats = () => {
    //     const newStrats = rollStrats(stratArray)
    //     setStrats(newStrats)
    // }

    const reRollSingleStrat = (elementIndex:number, arrayOfAllStrats: stratagem[]):void => {

        const currentStratArray = stratsSelected

        const unselectedStratArray = arrayOfAllStrats.filter((strat) => !currentStratArray.some((currentStrat) => (currentStrat.name) === strat.name)
        )

        const newStrat = unselectedStratArray[Math.floor(Math.random() * unselectedStratArray.length)]

        const updatedArray = [...currentStratArray];
        updatedArray[elementIndex] = newStrat;
    
        setStrats(updatedArray);
    }

    // sort strats into order of display for ease of picking
    const stratSort = (arrayOfStrats: stratagem[]): stratagem[] => {
        const sortedArray = arrayOfStrats.sort(
            (a, b) => a.priority - b.priority || 
            // If priorities are equal, sort by subPriority
            ('subPriority' in a && 'subPriority' in b ? a.subPriority - b.subPriority : 0)
        );
        return sortedArray
    }

    const stratArray = stratagems
    // const boosterArray = boosters

    // const stratArray: stratagem[] = stratagems
    const [stratsSelected, setStrats] = useState(() => 
        rollStrats(stratArray) // intial value
    )


    // re roll individual strat

    // const [boosterSelected, setBooster] = useState(() => 
    //     // initial value
    //     boosterArray[Math.floor(Math.random() * boosterArray.length)]
    // )

    // re roll booster



    return (
        <div className="flex flex-row gap-6 justify-evenly h-min border-2 m-6 rounded-md w-full">
            {/* strat 1 */}
            <StratagemContainer ID={1} strat={stratsSelected[0]} onReRoll={() => reRollSingleStrat(0, stratArray)}/>
            {/* strat 2 */}
            <StratagemContainer ID={2} strat={stratsSelected[1]} onReRoll={() => reRollSingleStrat(1, stratArray)}/>
            {/* strat 3 */}
            <StratagemContainer ID={3} strat={stratsSelected[2]} onReRoll={() => reRollSingleStrat(2, stratArray)}/>
            {/* strat 4 */}
            <StratagemContainer ID={4} strat={stratsSelected[3]} onReRoll={() => reRollSingleStrat(3, stratArray)}/>
            {/* booster */}
            <BoosterContainer/>
        </div>
    )
}

export {StratAndBoosterContainer}