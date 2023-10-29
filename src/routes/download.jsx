import React from 'react';
import appData from "../appData.json"

import Header from '../components/Header';
import Footer from '../components/Footer';

function Download() {

  const handleDownload = () => {
    const apkFileName = appData.apkname;
    const apkFilePath = process.env.PUBLIC_URL + '/' + apkFileName;

    const downloadLink = document.createElement('a');
    downloadLink.href = apkFilePath;
    downloadLink.download = apkFileName;
    downloadLink.click();
    setTimeout(() => {
      window.location.href = "/"
    }, 3000)
  };

  handleDownload()

  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#292929"
      }}>
        <Header />
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15
        }}>
        <h1 style={{
          fontSize: 25,
          color: "#fff"
        }}>O download do aplicativo está sendo iniciado...</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Download;