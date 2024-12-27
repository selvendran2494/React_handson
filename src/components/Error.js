import { useRouteError } from "react-router-dom"

const Error = () =>{
    const err = useRouteError();
    return(
        <div>
            <p>Error page {err.status}</p>           
        </div>
    )
}
export default Error