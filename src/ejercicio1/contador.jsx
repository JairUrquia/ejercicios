import React, {useState} from "react";
import '../ejercicio1/contador.css'


const Contador =()=>{
    const [Contador, setContandor] = useState(0);


    //funcion incrementar

    const incrementar =()=>{
        setContandor(Contador+1);
    };
    
    const dencrementar =()=>{
        setContandor(Contador-1);
    };

    return (
        <div className="contador-container">
            <h1>Ejercicio 1: decrementar o Incrementar contador</h1>
            <h1>{Contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={dencrementar}>Decrementar</button>
        </div>
    );
};

export default Contador;