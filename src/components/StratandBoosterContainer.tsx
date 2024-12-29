import { StratagemComp } from "./Stratagem"
import type { booster, stratagem } from "../assets/types"
import { useState } from "react"

// type StratandBoosterProps = {
//     stratArray: stratagem[]
//     boosterArray: booster[]
// }

import { stratagems } from "../assets/stratagems"
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

        console.log('stratArray')
        console.log(stratArray)

        console.log('returnArray')
        console.log(returnArray)

        // sort the return array
        const sortedArray = stratSort(returnArray)

        console.log('sortedArray')
        console.log(sortedArray)
        return sortedArray
    }

    const refreshAllStrats = () => {
        const newStrats = rollStrats(stratArray)
        setStrats(newStrats)
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
        <div className="flex flex-row gap-6 justify-evenly h-24 md:h-56 border-2 m-6 rounded-md w-full">
            {/* strat 1 */}
            <StratagemComp ID={1} strat={stratsSelected[0]}/>
            {/* strat 2 */}
            <StratagemComp ID={2} strat={stratsSelected[1]}/>
            {/* strat 3 */}
            <StratagemComp ID={3} strat={stratsSelected[2]}/>
            {/* strat 4 */}
            <StratagemComp ID={4} strat={stratsSelected[3]}/>
            {/* booster */}
        </div>
    )
}

export {StratAndBoosterContainer}