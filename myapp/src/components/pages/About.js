import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.3rem",
        textAlign: "justify",
        padding: "10px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0px" }}>What is the Purpose?</h1>

      <p style={{ maxWidth: "1000px", marginBottom: "20px" }}>
        The purpose of this website is simple, as an avid Pokemon fan and collector, I have found it cumbersome and tedious to go through
        sold Ebay listings, trying to determine the average price of a particular Pokemon card. Thus, the purpose of this is to produce a
        all-in-one-tool for myself that allows me to find average sold listings, individual sold prices, and so on, so as to avoid paying
        a premium where I don't have to.
      </p>
    </div>
  );
};

export default About;
