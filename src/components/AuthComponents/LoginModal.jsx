import React from 'react';
import { MdClose } from 'react-icons/md';

function LoginModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
            <div className="modal-container relative py-[25px] px-[20px] bg-white rounded-lg shadow-lg w-full max-w-[300px] mx-4">
                <button onClick={onClose} className="absolute top-1 right-3 text-xl">
                    <MdClose />
                </button>
                {children}
            </div>
        </div>
    );
}

export default LoginModal;
