import React, {useState} from 'react'
import { MessageWrapper, MessageForm } from './MessageStyle'

function Messages() {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: "",
    });


    let name, value;
    const postUserData = (event) => { //getting the value of each input data by using the name every onChange event
        name = event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]:value});
    };

    //connect with firebase
    const submitData = async(event) => { //send input when button is send
        event.preventDefault();
        const {firstName, lastName, email, phoneNumber, service, message} = userData;

        if(firstName && lastName && email && service && message){ //checking if all the fields have inputs - i discarded the pgone dta because it is just an optional for the user
 
            const res = await fetch( //fetching input data and sending to the firebase
                "https://wbldweb-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        service,
                        message,
                    }),
                }
            );

            if(res) {
                setUserData({ //clearning the textfield after sending
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    service: "",
                    message: "",
                });
                alert("Data sent!");
            } else {
                alert("Missing data");
            }
        } else{
            alert("Complete the form"); // form should be filled
        }
    };


    return (
        <>
            <MessageWrapper>

            <h1 data-aos='zoom-in'>Get your business done !</h1>

                <MessageForm data-aos='slide-up'>
                    <form method="POST">
                        <div className="fullname">
                            <div className="firstName">
                                <label htmlFor="firstName">First name*</label> <br />
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    placeholder='John' 
                                    required
                                    value={userData.firstName}
                                    onChange={postUserData}
                                />
                            </div>

                            <div className="lastName">
                                <label htmlFor="lastName">Last name*</label> <br />
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    placeholder='Doe' 
                                    required
                                    value={userData.lastName}
                                    onChange={postUserData}
                                />
                            </div>
                        </div>


                        <div className="details">
                            <label htmlFor="email">Email*</label>
                            <input 
                                type="email"
                                name="email" 
                                placeholder='johndoe@gmail.com'
                                required
                                value={userData.email}
                                onChange={postUserData}
                             />

                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input 
                                type="number" 
                                name="phoneNumber" 
                                placeholder='e.g. 09923432302'
                                value={userData.phoneNumber}
                                onChange={postUserData}
                            />

                            <label htmlFor="service">Service Needed*</label>
                            <select name="service" 
                                required
                                value={userData.service}
                                onChange={postUserData}
                            >
                                <option value="Landing Page">Landing page</option>
                                <option value="Website Design">Website Design</option>
                                <option value="Web App Design">Web app Design</option>
                                <option value="Mobile Design">Mobile Design</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Portfolio Website">Portfolio Website</option>
                                <option value="Website">Website</option>
                            </select>

                            <label htmlFor="message">Tell Us More About your business</label>
                            <textarea 
                                name="message" 
                                cols="30" 
                                rows="8" 
                                placeholder='My business is about this and I need help with that...'
                                value={userData.message}
                                onChange={postUserData}
                            ></textarea>
                        </div>

                        <div className="send">
                            <button onClick={submitData}>Send Message</button>
                        </div>

                    </form>    
                </MessageForm>    
            </MessageWrapper>  
        </>
    )
}

export default Messages
