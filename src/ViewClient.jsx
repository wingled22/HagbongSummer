import { useParams } from "react-router-dom";

const ViewClient = () => {

    const {clientId} = useParams();
    return ( 
     <h1>this is from client with ClientId : {clientId}</h1>
     );
}
 
export default ViewClient;