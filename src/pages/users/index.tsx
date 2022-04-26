import {
    useNavigate,
} from "react-router-dom";

function Users() {
    let navigate = useNavigate();
    return <div>

        <h2>Users</h2>;
        <button onClick={() => {
            navigate('/', { replace: true });
        }}>Atras</button>
        <button onClick={() => {
            let key: string = 'Item1';
            localStorage.removeItem(key);
        }}>Clear Storage</button>
    </div >
}

export default Users;