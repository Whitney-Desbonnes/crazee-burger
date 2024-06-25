import { useNavigate } from "react-router-dom"

export default function ErrorPage() {
    // state (état, données)
    const navigate = useNavigate();

    // comportenemts
    const handleClick = () => {
        navigate("/");
    }

    // render / affichage
    return (
        <>
            <h1>ErrorPage</h1>
            <button onClick={handleClick}>Retour à la page d'accueil</button>
        </>
    )
}