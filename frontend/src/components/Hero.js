import React from "react";

const Hero = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Connect and Hire</h1>
        <p style={styles.text}>
        The Collaboration Platform for College and Career Connections. 
Unleashing limitless opportunities for students and employers alike.
        </p>
      </div>
      <img src='https://img.freepik.com/free-photo/business-partners-handshake-international-business-concept_53876-104046.jpg?w=996&t=st=1676205186~exp=1676205786~hmac=f03d9d4d2950b81782a8d682ab2468ce40d458b7c59390e6921c79f5275232e7' alt="Collaboration" style={styles.img} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "400px",
    width: "100%",
    padding: "0 50px",
  },
  textContainer: {
    width: "45%",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#333",
  },
  img: {
    width: "45%",
  },
};

export default Hero;