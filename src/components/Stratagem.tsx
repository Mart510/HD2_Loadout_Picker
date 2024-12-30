import type { stratagem } from "../assets/types"

type StratagemProps = {
    ID: number,
    strat: stratagem,
    onReRoll: () => void
}


const StratagemContainer = ({ ID, strat, onReRoll}: StratagemProps): JSX.Element => {
    
    return (
        <div className="flex flex-col gap-0 sm:gap-1 md:gap-6 h-min p-2 md:p-4 max-w-20 md:max-w-48" id={String(ID)} onClick={onReRoll}>
            {/* <h3 className="text-base md:text-xl">stratagem {ID}</h3> */}
            <img className="justify-start object-contain h-12 sm:h-32 lg:h-40 hover:cursor-pointer" src={strat.imagePath} alt={strat.name}/>
            <p className=" text-xs md:text-base text-center">{strat.name}</p>
        </div>
    )

}

export {StratagemContainer}