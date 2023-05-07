import React from "react";
import ReactDOM from "react-dom";
import GridDataView from "../src";

const movimentos = [
    { nome: "Paçoca", data: new Date(), descricao: "Doce de amendoim", valor: 2.50 },
    { nome: "Pé de Moleque", data: new Date(), descricao: "Doce de amendoim", valor: 2.50 },
    { nome: "Pudim", data: new Date(), descricao: "Doce de leite", valor: 5.90 },
    { nome: "Doce de leite", data: new Date(), descricao: "Doce de leite", valor: 12.90 },
    { nome: "Jiló", data: new Date(), descricao: "Legume", valor: 3.90 }
];

const headers = {
    datas: [
        { name: 'nome', value: 'Produto' },
        { name: 'data', value: 'Data', type: 'date' },
        { name: 'descricao', value: 'Descrição' },
        { name: 'valor', value: 'Valor', type: 'money' }
    ]
};

const App = () => (
    <GridDataView key={'dataview'} headers={headers} datas={movimentos} />
);

ReactDOM.render(<App />, document.getElementById("root"));