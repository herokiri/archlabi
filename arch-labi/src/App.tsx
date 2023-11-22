import React, { useState } from 'react';
import './App.css'
import uslImage from './imgs/usl.png';
import { knapsackDynamic } from './logic/knapsackDynamic';
import { knapsackGreedy } from './logic/knapsackGreedy';


function App() {
    const [items, setItems] = useState<{ weight: number; value: number }[]>([]);
    const [knapsackCapacity, setKnapsackCapacity] = useState(0);
    const [currentWeight, setCurrentWeight] = useState('');
    const [currentValue, setCurrentValue] = useState('');

    const handleAddItem = () => {
        if (currentWeight !== '' && currentValue !== '') {
            const weight = parseInt(currentWeight, 10);
            const value = parseInt(currentValue, 10);
            setItems([...items, { weight, value }]);
            setCurrentWeight('');
            setCurrentValue('');
        }
    };

    return (
        <>
            <h3>Лабораторная работа про рюкзак</h3>
            <p>
                Задача о рюкзаке является классической задачей оптимизации, которая возникает в различных областях, таких как логистика, производственное планирование и финансы. Она может быть представлена в двух основных вариантах: непрерывном и дискретном. Давайте рассмотрим оба случая.

                Непрерывная задача о рюкзаке:
                Предположим, у нас есть рюкзак с ограниченной вместимостью W (вес в килограммах), и у нас есть набор предметов с заданными весами (wi) и стоимостями (ci). Наша цель - максимизировать суммарную стоимость предметов в рюкзаке.

                Математическая формулировка:
                <img className='pt-25' src={uslImage} alt="Условие задачи" />

                {/* Форма для ввода предметов и вместимости рюкзака */}
                <div>
                    <h4>Ввод предметов:</h4>
                    <div className='pt-25'>
                        <label htmlFor="weightInput">Вес предмета:</label>
                        <input type="number" id="weightInput" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} />
                    </div>
                    <div className='pt-25'>
                        <label htmlFor="valueInput">Стоимость предмета:</label>
                        <input type="number" id="valueInput" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
                    </div>
                    <button className='mt-25' onClick={handleAddItem}>Добавить предмет</button>

                    <h4>Установить вместимость рюкзака:</h4>
                    <div>
                        <label htmlFor="capacityInput">Вместимость рюкзака:</label>
                        <input type="number" id="capacityInput" value={knapsackCapacity} onChange={(e) => setKnapsackCapacity(parseInt(e.target.value, 10))} />
                    </div>
                </div>

                {/* Вывод результатов */}
                <div>
                    <h4>Решение динамическим программированием:</h4>
                    <p>Выбранные предметы: {knapsackDynamic(items, knapsackCapacity).map(item => `(${item.weight}, ${item.value})`).join(', ')}</p>
                </div>

                <div>
                    <h4>Решение жадным алгоритмом:</h4>
                    <p>Выбранные предметы: {knapsackGreedy(items, knapsackCapacity).map(item => `(${item.weight}, ${item.value})`).join(', ')}</p>
                </div>
            </p>
        </>
    );
}

export default App;