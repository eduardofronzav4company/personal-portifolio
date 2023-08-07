import { useState } from "react";
import contactImg from '../assets/img/contatc-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmmit =  async (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        let response = await  fetch("https://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charest=utf-8"
            },

            body: JSON.stringify(formDetails),
        });
        setButtonText('Send')
        let result = response.json();
        setFormDetails(formInitialDetails);

        if(result.code === 200){
            setStatus({ success: true, message: 'Message successfully'});
        } else {
            setStatus({ success: false, message: 'Something  went wrong, please try again later' })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                    type="text" 
                                    value={formDetails.lastNameName} 
                                    placeholder="Last Name" 
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                    type="email" 
                                    value={formDetails.email} 
                                    placeholder="Email Address" 
                                    onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                    type="tel" 
                                    value={formDetails.phone} 
                                    placeholder="Phone Number" 
                                    onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submmit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&   
                                    <Coll>
                                        <p className={status.success === false ?  "danger" : "success"}>{status.message}</p>
                                    </Coll>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}