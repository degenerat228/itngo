import React, {useState} from 'react';
import "./FormStyles.css";
import axios from "axios";
import Swal from 'sweetalert2';

const Form = () => {

    /*const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: ""
    });
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
    }
    const [loading, setLoading]=useState()
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const responce = await axios.post("http://127.0.0.1:8000/api/addnew", userField);
            console.log(responce)
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }*/

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5b8cf8a5-ce8f-4438-83a5-1e1ef3d8b62f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      /*if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }*/
      if (data.success) {
        Swal.fire({
            title: "Success!",
            text: "Message sent successfuly!",
            icon: "success"
        });
        event.target.reset();
      }

    }

    return(
        <div className="form" id="form">
            <form onSubmit={onSubmit}>
                <label>Ваше имя</label>
                <input type="text" placeholder="Имя" name="name" required></input>
                <label>Email</label>
                <input type="email" placeholder='Email' name="email" required></input>
                <label>Сообщение</label>
                <textarea rows="6" name="message" placeholder="Сообщение" required/>
                <button type="submit" className="btn">Отправить</button>
            </form>
        </div>
    )
};

export default Form;