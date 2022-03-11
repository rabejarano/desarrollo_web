
import {
    useNavigate,
    useParams,
} from "react-router-dom";

import Contador from '../../components/contador_class';

type QueryParams = { id: string };

function About() {
    let params: Readonly<Partial<QueryParams>> = useParams<QueryParams>();
    console.log(`El parametro id es ${params.id}`);
    let navigate = useNavigate();

    return <div>

        <h2>About {params.id}</h2>;
        <Contador title="Contador"/>

        <button onClick={() => {
            navigate(-1);
        }}>Atras</button>
    </div >;

}

export default About;