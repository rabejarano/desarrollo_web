import React from 'react';
const { Component } = { ...React };

type MyProps = { title: string };
type MyState = { contador: number };


class Contador extends Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = { contador: 0 };
    this.changeContador = this.changeContador.bind(this);
  }

  // componentDidMount() {
  //   console.log('estoy montado');
  // }


  functionName<Type>(arg: Type): void {
    console.log(`arg ${arg}`);
  }

  changeContador() {
    console.log('Estoy entrando');
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    const { title = '' } = { ...this.props };
    const { contador = 0 } = { ...this.state };
  
    return <div>
      <h1>{title} {contador}</h1>
      {/* <h1 onClick={() => {
        this.functionName<boolean>(true);
      }}>Hello {name}</h1> */}
      <button type="button" onClick={this.changeContador}>Sumar</button>
    </div>;
  }
}


export default Contador;