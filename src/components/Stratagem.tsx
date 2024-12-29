import type { stratagem } from "../assets/types"

type StratagemProps = {
    ID: number,
    strat: stratagem
}


const StratagemComp = ({ID, strat}: StratagemProps): JSX.Element => {
    
    return (
        <div className="flex flex-col justify-between gap-1 h-full p-2 md:p-4" id={String(ID)}>
            <img className="justify-start object-contain h-4/6 hover:cursor-pointer" src={strat.imagePath} alt={strat.name}/>
            <p className=" text-xs md:text-base text-center">{strat.name}</p>
        </div>
    )

}

export {StratagemComp}