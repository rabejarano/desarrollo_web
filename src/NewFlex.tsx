import React, { useState, useEffect } from 'react';
import { addSyntheticTrailingComment } from 'typescript';
import './NewFlex.css';

function Space({ space }: { space?: number }) {
  return <div style={{ width: space ?? 8 }} />
}

const initialState: number[] = [];
type IProps = { name: String, lastName: String };
export default function NewFlex(props: IProps) {

  const [contador, setContador] = useState(initialState);

  useEffect(() => {
    console.log('init lifeCycle');
    setContador([1, 2, 3, 4, 5, 6, 7, 8]);
    return () =>{
//  addSyntheticTrailingCommen
    }
  }, [props.lastName]);

  return <div id="fullScreen">
    {contador.map((value: number, index: number) => {
      return <p key={`key-${index}`}>Texto {value} </p>;
    })}

    <button onClick={() => {
      var newContador: number[] = [...contador, contador.length + 1];
      setContador(newContador);
    }

    }>Agregar</button>
  </div >
}
