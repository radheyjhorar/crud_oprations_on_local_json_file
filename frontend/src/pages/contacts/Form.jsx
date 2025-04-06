import { useEffect, useState } from "react";
import "./Contacts.css";
import { addNewContact, updateContact } from "../../api/ContactApi";

const Form = ({
  contacts,
  setContacts,
  updateDataApi,
  setUpdateDataApi,
}) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  let isUpdateEmpty = Object.keys(updateDataApi).length === 0;

  // get the Updated data and into input field
  useEffect(() => {
    updateDataApi &&
      setFormData({
        name: updateDataApi.name || "",
        email: updateDataApi.email || "",
      });
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addContactData = async () => {
    const res = await addNewContact(formData);
    // console.log("Response: ", res);

    if (res.status === 201) {
      setContacts([...contacts, res.data]);
      setFormData({ name: "", email: "" });
    }
  };

  const updateContactData = async () => {
    try {
      const res = await updateContact(updateDataApi.id, formData);
      // console.log("res: ", res);

      if (res.status === 200) {
        setContacts((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });
      }
      setFormData({ name: "", email: "" });
      setUpdateDataApi({});
    } catch (error) {
      console.log("Error in updating data: ", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    // console.log("Form Submit btn: ", action)

    if (action === "Add") {
      addContactData();
    } else if (action === "Edit") {
      updateContactData();
    }
  };

  return (
    <div className="add_new_contact_container">
      <div>
        <h2>+ Add New Contact</h2>
      </div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <label htmlFor="contact_name_input">Name</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
            id="contact_name_input"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="contact_email_input">E-Mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            id="contact_email_input"
            placeholder="E-Mail"
            required
          />
        </div>
        <button type="submit" value={isUpdateEmpty ? "Add" : "Edit"}>
          {isUpdateEmpty ? "+Add" : "Edit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
