import React, { useState } from "react";
import Footer from "./Footer";
import Table from "../components/Table";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tabelaVisivel, setTabelaVisivel] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const mostrarTabela = () => {
    setTabelaVisivel(true);
  };

  return (
    <div className="main">
      <section>
        <h1 className="upload-title">Selecione um arquivo</h1>
        <div className="btn-header">
          <label className="input-btn-label" htmlFor="input-btn">
            Escolha o arquivo
          </label>
          <input type="file" id="input-btn" onChange={handleFileChange} />
          {selectedFile && (
            <button className="data-transfer-btn" onClick={mostrarTabela}>
              Extrair dados
            </button>
          )}
        </div>
      </section>

      <div className="home">
        {selectedFile && (
          <div className="doc-preview">
            <h2>Preview do documento</h2>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="image-preview"
            />
          </div>
        )}

        <div className="extraction">
          <h2 className="table-h2">Dados da Nota Fiscal</h2>
          <Table tabelaVisivel={tabelaVisivel} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
