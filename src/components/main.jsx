import { useState } from 'react';

function Main() {

    let [num, setNum] = useState(0);

    if ( num < 0) {
        num = 0;
    }

    return (
    <div className="conteiner">
        <h1>Counter</h1>
        <button className="minus" onClick={() => setNum(num - 1)}>-</button>
        <span className="result">{num}</span>
        <button className="plus" onClick={() => setNum(num + 1)}>+</button>
    </div>
    )
};

export default Main;