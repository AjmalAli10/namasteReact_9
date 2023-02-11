import { useRouteError } from "react-router-dom";
function Error(){
    const err = useRouteError();
    const {status, statusText, data} = err;
    console.log(err.data)
    return(
        <>
            <h1>Oops!!</h1>
            <h2>Something went wrong😕</h2>
            <h2>{data }</h2>
            <h2>{status + " : " + statusText}</h2>
        </>
    )
}
export default Error;