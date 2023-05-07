import React from 'react'

import { GridDataView } from 'grid-data-view'
import 'grid-data-view/dist/index.css'

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

const App = () => {
  return <GridDataView key={'dataview'} headers={headers} datas={movimentos} />
}

export default App


