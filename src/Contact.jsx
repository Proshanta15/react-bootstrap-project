import React, { useState } from 'react';

const Contact = () =>{

    const [data , setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    })

    const inputEvent = (event) =>{
        const { name, value} = event.target;

        setData((preVal) =>{
            return{
                ...preVal , 
                [name] : value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone Number is ${data.phone}. My Email is ${data.email}. And My message is ${data.message}`)
    }

    
return(
<>
    <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row mb-5">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                            name="fullname"
                            value={data.fullname}
                            onChange={inputEvent}
                            placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="exampleFormControlInput2"
                            name="phone"
                            value={data.phone}
                            onChange={inputEvent}
                            placeholder="+880--------" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput3" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput3"
                            name="email"
                            value={data.email}
                            onChange={inputEvent}
                            placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea5" className="form-label">Message</label>
                        <textarea className="form-control"
                        name="message"
                        value={data.message}
                        onChange={inputEvent}
                         id="exampleFormControlTextarea5" rows="3"></textarea>
                    </div>

                    <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit Form</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</>
)
}
export default Contact;