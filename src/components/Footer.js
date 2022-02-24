import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div
      style={{
        // position: "fixed",
        // bottom: 0,
        // height: "40px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100vw",
        margingTop: "10px",
      }}
    >
      <div>
        <h3>Contact Us:</h3>
      </div>
      <div className="row">
        <div className="col" style={{ fontSize: "15px" }}>
          ShopOnline@gmail.com
        </div>
        <div className="col">
       
          <MailOutlineIcon color="Primary" style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ fontSize: "15px" }}>
          1234567890
        </div>
        <div className="col">
          <PhoneIcon color="secondary" style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
