import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default ModalConfirmation = (props) => {
    let {
        onConfirm,
        show,
        handleClose
    } = props;

    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>
                    Confirmation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <p>
                        Are you sure?
                    </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button 
                    variant="primary" 
                    onClick={onConfirm}
                >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}