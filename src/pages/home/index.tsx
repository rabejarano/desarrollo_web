
import {
    useNavigate,
    NavigateFunction
} from "react-router-dom";


function Home() {
    let navigate: NavigateFunction = useNavigate();

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
    </div >;
}

export default Home;