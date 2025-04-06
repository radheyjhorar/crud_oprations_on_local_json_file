import "./Popups.css";

// Delete Confirmation Popup Component
const DeleteConfirmationPopUp = ({ isOpen, onDelete, onCancel }) => {
  
  if (!isOpen) return null; // Don't render the popup if it's not open

  return (
    <div style={overlayStyle} className="popup-container">
      <div style={popupStyle} className="p-c-popup-style">
        <h3>Are you sure you want to delete?</h3>
        <div>
          <button onClick={onDelete} style={buttonStyle}>Yes</button>
          <button onClick={onCancel} style={buttonStyle}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// Styles for the popup and buttons
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "300px",
};

const buttonStyle = {
  margin: "10px",
  padding: "8px 16px",
  backgroundColor: "#00c67e",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  width: "80px",
};

export default DeleteConfirmationPopUp