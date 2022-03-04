import ITitle from './interface';
import './style.css';


function Title(props: ITitle) {
  return <div>
    <h1>Hello {props.name}</h1>
    <h2>Hello {props.lastName}</h2>
  </div>;
}

export default Title;
