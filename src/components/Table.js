import React, { useState } from "react";

function Table({ tabelaVisivel }) {
  return (
    <div className="main-table">
      <div className="tabela">
        <h2 className="table-h2">Dados da Nota Fiscal</h2>
        {tabelaVisivel && (
          <table>
            <tr>
              <th className="table-th">Código de verificação:</th>
              <td className="table-td">5489654123</td>
            </tr>
            <tr>
              <th className="table-th">Número da nota:</th>
              <td className="table-td">5487</td>
            </tr>
            <tr>
              <th className="table-th">Data de emissão:</th>
              <td className="table-td">12/05/2022</td>
            </tr>
            <tr>
              <th className="table-th">Razão social:</th>
              <td className="table-td">Num sei oq, num sei oq lá</td>
            </tr>
            <tr>
              <th className="table-th">CPF/CNPJ:</th>
              <td className="table-td">12.345.678/0001-90</td>
            </tr>
            <tr>
              <th className="table-th">Telefone:</th>
              <td className="table-td">(81) 3222-2121</td>
            </tr>
            <tr>
              <th className="table-th">Valor total da nota:</th>
              <td className="table-td">R$ 2.357,22</td>
            </tr>
            <tr>
              <th className="table-th">Rua:</th>
              <td className="table-td">Rua Dois</td>
            </tr>
            <tr>
              <th className="table-th">Número do endereço:</th>
              <td className="table-td">30</td>
            </tr>
            <tr>
              <th className="table-th">CEP:</th>
              <td className="table-td">50254487</td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;
