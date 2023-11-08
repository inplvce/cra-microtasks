import React, {FC} from 'react';

// type NewComponentsType = {
//     // cars: Array<TopCarsType>
//     cars: TopCarsType[]
// }
//
//
// type TopCarsType = {
//     id: number
//     manufacturer: string
//     model: string
// }
//
// export const NewComponent = (props: NewComponentsType) => {
//     return (
//         <div>
//             <table>
//                 {props.cars.map((objectFromCarsArray, index) => {
//                     return (
//                         <tr>
//                             <th>{objectFromCarsArray.manufacturer}</th>
//                             <th>{objectFromCarsArray.model}</th>
//                         </tr>
//                     )
//                 })}
//             </table>
//         </div>
//     )
// }


//01

type NewComponentType = {
    car: TopCars[]
}

type TopCars = {
    manufacturer: string
    model: string
}

export const NewComponent: FC<NewComponentType> = ({car})=> {
    return (
        <table>
            {car.map((objectFromCarsArray: TopCars, index)=> {
                return (
                    <tr>
                        <th>{objectFromCarsArray.manufacturer}</th>
                        <th>{objectFromCarsArray.model}</th>
                    </tr>
                )
            })}

        </table>
    )
}