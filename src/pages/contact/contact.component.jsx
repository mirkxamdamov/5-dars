import { useParams } from "react-router-dom"

export const Contact = () => {
    const params = useParams()
    return(
        <>
        contact {params.id}
        </>
    )
}