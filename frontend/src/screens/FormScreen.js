import React from 'react'
import './FormScreen.css';
import {Link} from 'react-router-dom';
import Form from '../components/Form';
import { useFormik } from 'formik';
import emailjs from "emailjs-com";



const FormScreen = () => {
    return (
        <div>
        <Form  />
        </div>
    )
}

export default FormScreen;
