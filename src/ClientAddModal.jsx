import { Button, Modal } from "react-bootstrap";

const ClientAddModal = ({
    param1,
    param2,
    clientName,
    setClientName,
    saveClient
}) => {
    return (
        <Modal show={param1} onHide={param2}>
            <Modal.Header closeButton>
                new client info
            </Modal.Header>
            <Modal.Body>
                <input type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={saveClient}>Save client</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ClientAddModal;