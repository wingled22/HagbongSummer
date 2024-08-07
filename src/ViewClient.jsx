import { useParams } from "react-router-dom";

const ViewClient = () => {

    const {clientId} = useParams();

    return ( 
        <h1>
            Clientid that was passed here is : <b>{clientId}</b>
        </h1>
     );
}
 
export default ViewClient;