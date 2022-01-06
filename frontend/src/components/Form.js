import React from 'react';
import emailjs from "emailjs-com";
import './Form.scss'
import { useState } from 'react';


const Form = () => {

    function sendMail(e){
        e.preventDefault();
        emailjs.sendForm('service_4m5j5lq', 'template_prmn5f4', e.target, 'user_PoozJwyLbxQ1CnVKbB7bs'
    ).then(res =>{
        console.log(res);
        alert('Bericht werd succesvol verzonden!');
        setValues({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }).catch(err => console.log(err))
}
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message:''
    });
    console.log(values);

    const handleChange = (e) =>{
        setValues(values =>({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div>
        <h1 className="page-title">Formulier</h1>
        <div className="container">
            <form onSubmit={sendMail} style={{margin: 0, padding: 0, display: 'flex', justifyContent: 'center'}}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                    <label>name</label> 
                        <input type="text" className="form-control" placeholder="Naam" name="name"
                        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                            required
                        />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <label>email</label> 
                            <input handleChange={handleChange} type="email" className="form-control" placeholder="Email" name="email"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                        <label>onderwerp</label> 
                            <input handleChange={handleChange} type="text" className="form-control" placeholder="Onderwerp" name="subject"
                            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                                required
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                        <label>bericht</label> 
                            <textarea handleChange={handleChange} className="form-control" id="" cols="30" rows="8" placeholder="Uw bericht" name="message"
                            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                            required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn-btn-info" value="Verstuur!"/>
                        </div>
                </div>
            </form>
        </div>
        </div>

    )
}

export default Form
