import React from 'react';
import emailjs from "emailjs-com";
import './Form.scss'
import { useState } from 'react';


const Form = () => {

    const [values, setValues] = useState({
        naam: '',
        email: '',
        onderwerp: '',
        bericht:''
    });
    console.log(values);

    const handleChange = (e) =>{
        setValues(values =>({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.send('service_4m5j5lq', 'template_prmn5f4', values, 'user_PoozJwyLbxQ1CnVKbB7bs')
        .then(response =>{
            console.log('Succes!', response);
            setValues({
                naam: '',
                email: '',
                onderwerp: '',
                bericht: '',
            });
            alert('Bericht werd succesvol verzonden!');
        }, error =>{
            console.log('Failed!', error);
        })
    }
    
    return (
        <div>
        <h1 className="page-title">Formulier</h1>
        <div className="container">
            <form onSubmit={handleSubmit} style={{margin: 0, padding: 0, display: 'flex', justifyContent: 'center'}}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Naam" name="naam"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                            <input handleChange={handleChange} type="email" className="form-control" placeholder="Email" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input handleChange={handleChange} type="text" className="form-control" placeholder="Onderwerp" name="onderwerp"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea handleChange={handleChange} className="form-control" id="" cols="30" rows="8" placeholder="Uw bericht" name="bericht"></textarea>
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
