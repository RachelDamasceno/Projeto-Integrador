import React, { useState } from "react";
import exampleJson from "../json/example.json";

function Table({ tabelaVisivel }) {
  const codigoVerificacao =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos
      .codigo_de_verificacao_e_autencidade[0].text;

  const numeroNota =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.numero_nota_fiscal[0].text;

  const dataEmissao =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.data_emissao[0].text;

  const razaoSocialPrestador =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos
      .nome_razao_social_prestador_de_servicos[0].text;

  const cpfCnpjPrestador =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.cpf_cnpj_prestador_de_servicos[0]
      .text;

  const telefonePrestador =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.telefone_prestador_de_servicos[0]
      .text;

  const ruaPrestador =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.rua_prestador_de_servicos[0].text;

  const numeroEnderecoPrestador =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos
      .numero_endereco_prestador_de_servicos[0].text;

  const cepPrestador =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.CEP_prestador_de_servicos[0].text;

  const valorTotal =
    tabelaVisivel &&
    exampleJson.resultados[0].camposExtraidos.valor_total_da_nota[0].text;

  return (
    <div className="main-table">
      <div className="tabela">
        <h2 className="table-h2">Dados da Nota Fiscal</h2>
        {tabelaVisivel && (
          <table>
            <tr>
              <th className="table-th">Código de verificação:</th>
              <td className="table-td">{codigoVerificacao}</td>
            </tr>
            <tr>
              <th className="table-th">Número da nota:</th>
              <td className="table-td">{numeroNota}</td>
            </tr>
            <tr>
              <th className="table-th">Data de emissão:</th>
              <td className="table-td">{dataEmissao}</td>
            </tr>
            <tr>
              <th className="table-th">Razão social:</th>
              <td className="table-td">{razaoSocialPrestador}</td>
            </tr>
            <tr>
              <th className="table-th">CPF/CNPJ:</th>
              <td className="table-td">{cpfCnpjPrestador}</td>
            </tr>
            <tr>
              <th className="table-th">Telefone:</th>
              <td className="table-td">{telefonePrestador}</td>
            </tr>
            <tr>
              <th className="table-th">Rua:</th>
              <td className="table-td">{ruaPrestador}</td>
            </tr>
            <tr>
              <th className="table-th">Número do endereço:</th>
              <td className="table-td">{numeroEnderecoPrestador}</td>
            </tr>
            <tr>
              <th className="table-th">CEP:</th>
              <td className="table-td">{cepPrestador}</td>
            </tr>
            <tr>
              <th className="table-th">Valor total da nota (R$):</th>
              <td className="table-td">{valorTotal}</td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;
