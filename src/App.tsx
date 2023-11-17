import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import {NewComponent} from "./NewComponent";
import {topCars} from "./home-work-01/TopCars";
import {NewComponent} from "./home-work-01/NewComponent";
import {Counter} from "./counter/Counter";
import {Button} from "./counter/Button";

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Ruble', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Ruble', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Ruble', value: 50, number: ' v1234567890'},
    ])

    // const filteredMoney = money.filter((cash, index)=> cash.banknots === 'Dollars');

const [filter, setFilter]=useState('all')

    let filteredMoney = money;

    if (filter === 'dollar') {
        filteredMoney = money.filter((cash, index) => cash.banknots === 'Dollars');
    }
    if (filter === 'ruble') {
        filteredMoney = money.filter((cash, index) => cash.banknots === 'Ruble');
    }

    const onClickFilterHandler = (titleButton: string) => setFilter(titleButton)



    return (
        <>
            <ul>
                {filteredMoney.map((objectMoney, index) => {
                    return (
                        <li key={index}>
                            <span>{objectMoney.banknots}</span>
                            <span>{objectMoney.value}</span>
                            <span>{objectMoney.number}</span>
                        </li>
                    )
                    document.write(objectMoney.banknots)
                })}
            </ul>
            <div style={{margin: "40px"}}>

                <Button onClick={() => onClickFilterHandler('all')} title={'all'}/>
                <Button onClick={() => onClickFilterHandler('dollar')} title={'Dollars'}/>
                <Button onClick={() => onClickFilterHandler('ruble')} title={'Rubles'}/>
                {/*<button onClick={onClickFilterHandler('Dollars')}>dollar</button>*/}
                {/*<button onClick={onClickFilterHandler('Rubel')}>rubel</button>*/}

            </div>
        </>
    )


}

export default App;
