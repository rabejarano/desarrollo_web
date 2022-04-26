
import { useEffect } from "react";
import {
    useNavigate,
    NavigateFunction
} from "react-router-dom";


function Home() {
    let navigate: NavigateFunction = useNavigate();
    useEffect(() => {
        let key: string = 'Item1';
        let valueItem1 = localStorage.getItem(key);
        if (!!valueItem1) {
            navigate('/users');
        }
    });

    return <div>
        <h2>Home</h2>
        <button onClick={() => {
            navigate('/about/12345678');
        }}>navigate to about</button>
        <button onClick={() => {
            navigate(-1);
        }}>atras</button>
        <button onClick={() => {
            navigate('/', { replace: true });
        }}>reset navigator</button>
        <button onClick={() => {
            let key: string = 'Item1';
            localStorage.setItem(key, 'Hola soy Goku');
            navigate('/users');
        }}>Login</button>
    </div >;
}

export default Home;