import { useEffect, useState } from "react";
import "./Contacts.css";
import { Link } from "react-router-dom";
import { deleteOneContact, getContacts } from "../../api/ContactApi";
import Form from "./Form.jsx";
import DeleteConfirmationPopUp from "../../components/popup/DeleteConfirmationPopUp.jsx";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  const [isDelConfPopupOpen, setIsDelConfPopupOpen] = useState(false);
  const [curEleId, setCurEleId] = useState(null);

  const getContactsData = async () => {
    const res = await getContacts();
    setContacts(res.data);
    // console.log("data: ",res.data);
  };

  useEffect(() => {
    getContactsData();
  }, []);

  // Handle delete button click
  const handleDeleteContact = async (id) => {
    setIsDelConfPopupOpen(true); // Open the popup
    setCurEleId(id);
  };

  // Confirm deletion
  const handleDeleteConfirm = async () => {
    const id = curEleId;
    try {
      const res = await deleteOneContact(id);
      if (res.status === 200) {
        const newUpdatedContacts = contacts.filter((curretContacts) => {
          return curretContacts.id !== id;
        });
        setContacts(newUpdatedContacts);
      } else {
        console.log("Failed to delete the contact: ", res.status);
      }
      // console.log(res);
    } catch (error) {
      console.log("Error delete contact: ", error);
    }

    //
    setIsDelConfPopupOpen(false); // Close the popup after deletion
  };

  // Close the popup without deletion
  const handleCancel = () => {
    setIsDelConfPopupOpen(false); // Simply close the popup
    setCurEleId(null);
  };

  const handleUpdateContact = (curElem) => {
    setUpdateDataApi(curElem);
    // console.log("Current Element: ",curElem);
  };

  return (
    <div className="contacts-container">
      <div className="contacts-page-header">
        <h2>Save your Contacts Safely</h2>
        <div className="add_new_contact_btn">
          <button>
            <Link to={"/add-contact"}>+ Add New Contact</Link>
          </button>
        </div>
        <div>
          <Form
            contacts={contacts}
            setContacts={setContacts}
            updateDataApi={updateDataApi}
            setUpdateDataApi={setUpdateDataApi}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Oprations</th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((curElem, index) => {
              const { id, name, email } = curElem;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <div className="opration-btns">
                      <button onClick={() => handleUpdateContact(curElem)}>
                        Update
                      </button>
                      <button onClick={() => handleDeleteContact(id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <DeleteConfirmationPopUp
        isOpen={isDelConfPopupOpen}
        onDelete={handleDeleteConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Contacts;
