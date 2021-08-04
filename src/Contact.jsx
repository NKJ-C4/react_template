import React,  {useState} from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent = (event)=>{
        const {name, value}= event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`The response of ${data.fullname} is recorded we will call you on ${data.phone} or mail you at ${data.email} considering your message "${data.msg}" `)
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-7 col-10 height mx-auto">
            <form onSubmit={formSubmit}>
              
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phone 
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Mobile Number"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleInputEmail1"
                    rows="3"
                    placeholder="Enter Your Message Here..."
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                  />
                </div>
                <div className="col-12">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
                </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
