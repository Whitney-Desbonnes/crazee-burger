import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
    // state (état, données)
    const navigate = useNavigate();
    const { username } = useParams();

    // comportements
    const handleClick = () => {
        navigate("/");
    }

    // render / affichage
    return (
        <>
            <h1>Bonjour { username }</h1>
            <button onClick={handleClick}>Déconnexion</button>
        </>
    )
}