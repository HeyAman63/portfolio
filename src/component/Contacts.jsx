import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contacts = () => {
    const form = useRef();
    const sendEmail = async (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_YOUR_SERVICE_ID,
            import.meta.env.VITE_YOUR_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_YOUR_PUBLIC_KEY
        ).then(
            toast.success("Email has been send")
        ).catch((error)=>{
          toast.error(error.message)
        }
            
        )
    }
  return (
    <div id="contact" className="mb-5 relative lg:w-[80%] lg:left-[20%]">
      <h2 className="mt-15 text-2xl font-bold tracking-widest border-b-3 border-blue-300 mb-10 inline-block ml-3">
        Contacts
      </h2>
      <div className="lg:flex justify-between">
        <div className="flex flex-col gap-5 pr-20 bg-gray-50 p-5">
          <div className="flex items-center  group cursor-pointer gap-4 ml-2">
            <div className="px-4  transition duration-300 group-hover:bg-blue-400 py-3 rounded-full bg-blue-50">
              <i className="fa-solid text-blue-400 fa-location-dot text-2xl  transition duration-300 group-hover:text-white"></i>
            </div>
            <p>
              <span className="block font-bold text-lg">Address</span>Kautilya
              Hall University of Lucknow, New Campus
            </p>
          </div>
          <div className="flex items-center group cursor-pointer gap-4 ml-2">
            <div className="px-4  transition duration-300 group-hover:bg-blue-400 py-3 rounded-full bg-blue-50">
              <i className="fa-solid text-blue-400 fa-phone text-xl  transition duration-300 group-hover:text-white"></i>
            </div>
            <p>
              <span className="block font-bold text-lg">Phone No.</span>
              +91 6389451621
            </p>
          </div>
          <div className="flex items-center group cursor-pointer gap-4 ml-2">
            <div className="px-4  transition duration-300 group-hover:bg-blue-400 py-3 rounded-full bg-blue-50">
              <i className="fa-solid text-blue-400 fa-envelope text-xl  transition duration-300 group-hover:text-white"></i>
            </div>
            <p>
              <span className="block font-bold text-lg">Email</span>
              <a>chaurasiyaaman741@gmail.com</a>
            </p>
          </div>
          <div className="md:ml-2">
            <iframe
            className="md:w-[34rem] w-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.2975691649582!2d80.93909806831591!3d26.922057788169614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995653e6a81c17%3A0x9515faff2a500fc1!2sKautilya%20Hall%2C%20University%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1752041884904!5m2!1sen!2sin"
              height={400}
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        <div className="bg-gray-50 lg:w-[50%]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex md:flex flex-col items-center md:justify-around mt-3">
              <div className="w-[90%] flex Justify-center flex-col">
                <p className="text-lg font-semibold mb-3">Name</p>
                <input type="text" name="name" placeholder="Full Name" className="focus:outline-none border-2 border-gray-300 px-8 py-3" />
              </div>
              <div className="w-[90%] flex Justify-center flex-col">
                <p className="text-lg font-semibold mb-3">Email</p>
                <input type="email" name="email" placeholder="Email Id" className="focus:outline-none border-2 border-gray-300 px-8 py-3" />
              </div>
            </div>
            <div className="md:w-full w-[90%] flex flex-col justify-center md:items-center  md:mt-10">
                <p className="text-lg font-semibold text-start w-full pl-6 mt-3 mb-3">Subject</p>
                <input type="text" name="subject" placeholder="Subject" className="ml-[5%] md:w-[90%] focus:outline-none border-2 border-gray-300 px-8 py-3" />
            </div>
            <div className="w-full flex flex-col items-center mt-3 md:mt-10">
                <label className="text-lg font-semibold w-full pl-6 text-start" htmlFor="message">Message</label>
                <textarea id="message" name="message" type="text" placeholder="Message" className=" mt-4 w-[90%] focus:outline-none border-2 border-gray-300 px-8 py-3"></textarea>
            </div>
            <button className="ml-[30%] md:ml-[40%] mt-8 text-lg py-2 px-5 bg-blue-500 rounded-full cursor-pointer text-white font-semibold ">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
