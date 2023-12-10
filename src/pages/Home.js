import React, { useState } from "react";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="home">
      <div className="main-upload">
        <h1 className="upload-title">Selecione um arquivo.</h1>
        <label className="input-btn-label" for="input-btn">
          Escolha o arquivo.
        </label>
        <input type="file" id="input-btn" onChange={handleFileChange} />
        {selectedFile && (
          <div className="doc-preview">
            <h2>Preview do documento.</h2>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="image-preview"
            />
          </div>
        )}
      </div>
      <div className="extraction">
        <div className="inner-extraction">
          <h1>TESTE 2</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
