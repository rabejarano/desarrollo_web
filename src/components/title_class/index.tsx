import React from 'react';
const { Component } = { ...React };

type MyProps = { name: string };
type MyState = { apellido: string, contador: number };


export default class Title extends Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = { apellido: 'Venito', contador: 0 };
    this.changeContador = this.changeContador.bind(this);
  }

  componentDidMount() {
    console.log('estoy montado');
  }


  functionName<Type>(arg: Type): void {
    console.log(`arg ${arg}`);
  }

  changeContador() {
    console.log('Estoy entrando');
    this.setState({ contador: this.state.contador + 1 });

  }

  render() {
    const { name = '' } = { ...this.props };
    return <div>
      <h1>Hello {name}</h1>
      <button type="button" onClick={this.changeContador}>Soy Botton {this.state.contador}</button>
    </div>;
  }
}