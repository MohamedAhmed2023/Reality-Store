import React, { useRef, useState } from "react";
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from "./BottomTab.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../component/Home/Header.jsx";
import Footer from "../Footer.jsx";
import img22 from "../Assets/Products/Contact us-pana.png";

const Support = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z019xvl",
        "template_4aq33pm",
        e.target,
        "U92TN4oBo-MyFhWD_"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Thanks for your report we will reply it in very soon..."
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Massage not send");
        }
      );
  };
  return (
    <>
      <Header />
      {/* <Heding title="Contect Us" /> */}
      <div className="support-container">
        <div className="support-left">
          <img src={img22} alt=""></img>
        </div>
        <div className="support-right">
          <div>
            <h2
              className="support__heading"
              style={{
                textAlign: "center",
              }}
            >
              How can we improve our services
            </h2>
            <h2
              className="support__heading"
              style={{
                textAlign: "center",
              }}
            >
              Report us for something...
            </h2>
            <div>
              <form
                style={{
                  width: "600px",
                  margin: "auto",
                  padding: "20px 0",
                }}
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Name"
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "2px solid #e94560",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                    height: "40px",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="to_name"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "2px solid #e94560",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                    height: "40px",
                  }}
                  value={subject}
                  onChange={(e) => setsubject(e.target.value)}
                  name="subject"
                />
                <input
                  type="email"
                  placeholder=" Email"
                  required
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "2px solid #e94560",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                    height: "40px",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="from_name"
                />
                <textarea
                  cols="30"
                  rows="5"
                  required
                  placeholder="message"
                  name="message"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    borderBottom: "2px solid #e94560",
                    margin: "10px 0",
                    fontSize: "1.2vmax",
                  }}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    background: "#e94560",
                    height: "40px",
                    margin: "10px 0",
                    color: "#fff",
                    fontSize: "1.2vmax",
                  }}
                >
                  Submit
                </button>
              </form>
              <div className="animation"></div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
      <BottomTab />
    </>
  );
};

export default Support;
