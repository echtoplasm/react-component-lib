import React from 'react';
import { useState } from 'react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card">
      <p className="explainer">
        This component demonstrates modal dialogs in React. Clicking the button toggles the
        `showModal` state, which conditionally renders the Modal component. The modal uses a dark
        overlay (modal-overlay) and a content box (modal-content). The overlay's onClick closes the
        modal, while `e.stopPropagation()` on the content prevents clicks inside the modal from
        bubbling up to the overlay. This pattern creates a common UX where clicking outside the
        modal dismisses it.
      </p>
      <div className="modal-container">
        <button onClick={handleOpenModal}>Show Modal</button>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <h2>This is a modal :)</h2>
            <p>Modal content blah blah blah</p>
            <button onClick={handleCloseModal}>x</button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ModalComponent;
