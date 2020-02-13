import React, {Fragment} from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faAt, faEdit } from "@fortawesome/free-solid-svg-icons"
import './styles.scss'

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {successful: false};
    }
    render(){
        const encode = (data) => {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
        }
        return (
            <Fragment>
                <Formik
                    initialValues={{
                    name: '',
                    email: '',
                    message: '',
                    }}
                    onSubmit={(values, actions) => {
                        fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: encode({ "form-name": "contact-demo", ...values })
                        })
                        .then(() => {
                        //alert('Success');
                        const FormContainer = document.getElementById("Form_1-Heading");
                        const Form = document.getElementById("formik-netlify");
                        const SuccessMessage = document.getElementById("success");
                        FormContainer.innerHTML ="Thank You!";
                        Form.style.display = 'none';
                        SuccessMessage.style.display = "block"
                        actions.resetForm()
                        })
                        .catch(() => {
                        alert('Error');
                        })
                        .finally(() => actions.setSubmitting(false))
                        }
                    }
                    validate={values => {
                    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    const errors = {};
                    if(!values.name) {
                        errors.name = 'Name is Required'
                    }
                    if(!values.email || !emailRegex.test(values.email)) {
                        errors.email = 'Valid Email is Required'
                    }
                    if(!values.message) {
                        errors.message = 'Message is Required'
                    }
                    return errors;
                    }}
                >
                {() => (
                    <Form id="formik-netlify" name="contact-demo" netlify-honeypot="bot-field" data-netlify={true}>
                        <input type="hidden" name="bot-field" />

                        <div className="form__fieldset fieldset__required">
                            <div className="form-label__holder">
                                <div>
                                    <span>*</span>
                                    <label htmlFor="name"> Name</label>
                                </div>
                                <FontAwesomeIcon icon={faUserAlt} color="gray" />
                            </div>
                            <Field name="name"  />
                            <ErrorMessage className="error" component="span" name="name" />
                        </div>

                        <div className="form__fieldset fieldset__required">
                            <div className="form-label__holder">
                                <div>
                                    <span>*</span>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <FontAwesomeIcon icon={faAt} color="gray" />
                            </div>
                            <Field name="email" />
                            <ErrorMessage className="error" component="span" name="email" />
                        </div>

                        <div className="form__fieldset fieldset__required">
                            <div className="form-label__holder">
                                <div>
                                    <span>*</span>
                                    <label htmlFor="message">Message</label>
                                </div>
                                <FontAwesomeIcon icon={faEdit} color="gray" />
                            </div>    
                            <Field name="message" component="textarea" rows='5' />
                            <ErrorMessage className="error" component="span" name="message"/>
                        </div>

                        <div className="form__fieldset buttons">
                            <button className="buttons__reset" type="reset">Clear</button>
                            <button className="buttons__submit" type="submit">Submit</button>
                        </div>
                    </Form>
                )}
                </Formik>
            </Fragment>
        )
    }
}

export default ContactForm