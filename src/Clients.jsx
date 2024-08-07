import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ClientAddModal from './ClientAddModal.jsx'
import { NavLink } from 'react-router-dom';

const Clients = () => {
    const [client, setClient] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showAddModal, setShowAddModal] = useState(false);
    const makeAddModalAppear = () => setShowAddModal(!showAddModal);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const makeUpdateModalAppear = () => setShowUpdateModal(!showUpdateModal);

    const [clientName, setClientName] = useState("");

    const [selectedClientId, setSelectedClientId] = useState(0);
    const [selectedClient, setSelectedClient] = useState({
        id: 0,
        clientName: "",
        residency: ""
    })

    const getClients = async () => {
        const response = await fetch(
            "http://localhost:5184/api/ClientApi/GetClients"
        );
        const result = await response.json()
        setClient(result)
        setLoading(false);
    }

    const getClient = async (id) => {
        const response = await fetch(
            "http://localhost:5184/api/ClientApi/GetClient?id=" + id
        );
        const result = await response.json()
        setSelectedClient(result)
        makeUpdateModalAppear();
    }

    const saveClient = async () => {
        const dataToSend = {
            "clientName": clientName,
            "residency": "quite place"
        }

        const response = await fetch(
            "http://localhost:5184/api/ClientApi/saveclient",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            }
        );
        getClients();
        makeAddModalAppear();
    }

    const updateClient = async () => {

        const response = await fetch(
            "http://localhost:5184/api/ClientApi/updateclient?id=" + selectedClientId,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selectedClient)
            }
        );

        getClients();
        makeUpdateModalAppear();
    }

    const DeleteClient = async (id) => {

        const response = await fetch(
            "http://localhost:5184/api/ClientApi/deleteclient?Id=" + id,
            {
                method: "DELETE",
            }
        );
        getClients();
    }


    useEffect(() => {
        getClients();
    }, []);

    if (loading) return <center><h1>Loading</h1></center>

    return (
        <>
            <ClientAddModal param1={showAddModal}
                param2={makeAddModalAppear}
                clientName={clientName}
                setClientName={setClientName}
                saveClient={saveClient}
            />

            <Modal show={showUpdateModal} onHide={makeUpdateModalAppear}>
                <Modal.Header closeButton>
                    update client info
                </Modal.Header>
                <Modal.Body>
                    <input type="text"
                        value={selectedClient.clientName}
                        onChange={(e) =>
                            setSelectedClient((c) =>
                                ({ ...c, clientName: e.target.value }))
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={updateClient}>Save client</Button>
                </Modal.Footer>
            </Modal>

            <div className="container mt-5">
                <Button
                    className='mb-2'
                    onClick={makeAddModalAppear}
                >Add new Client</Button>
                <ul>
                    {
                        client.map((c) =>
                            <li key={c.id} >{c.clientName} || {c.residency}
                                <Button className='btn-warning'
                                    onClick={() => {
                                        getClient(c.id);
                                        setSelectedClientId(c.id);
                                    }}
                                >Update</Button> {" "}
                                <Button onClick={() => DeleteClient(c.id)}>Delete</Button>

                                <NavLink to={"/client/"+c.id}>
                                    Goto client
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default Clients;