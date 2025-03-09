"use client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     padding: 0,
//     outline: "none",
//     width: "fit-content",
//     height: "fit-content",
//     borderRadius: "16px",
//     // transform: "none",
//     // backfaceVisibility: "hidden",
//   },
// };

const customStyles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    outline: "none",
    width: "fit-content",
    height: "fit-content",
    margin: "auto",
    borderRadius: "16px",
    backfaceVisibility: "hidden",
  },
};

const ReactModal = ({ modalIsOpen, setIsOpen, children }) => {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default ReactModal;
