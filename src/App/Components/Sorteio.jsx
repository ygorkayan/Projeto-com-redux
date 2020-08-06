import React from "react";
import Card from "./Card";

// o metodo connect criado pelo desenvolvedores
// react é o responsavel por conectar o redux ao componente
import { connect } from "react-redux";

const Sorteio = (props) => {
  const { min, max } = props;
  const sorteio = Math.round(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio">
      <span>Resultado: </span>
      <strong>{sorteio}</strong>
    </Card>
  );
};

// Esse metodo recebe em state tudo que esta dentro do combineReducers
// e o meio de voce acessar eles é state.valor.valorDentro
// como no meu so tem:
// numeros: (stete, action) => {
//  return {
//    min: 10,
//    max: 100,
//  };
//},
// eu acesso state.numeros. min ou max
const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

// o metodo connect é o responsavel por pegar o state e o dispatch e
// colocar para dentro do componente, com isso voce passa a ter acesso
// pelo props, nesse caso em state como retorno isso:
// {
//  min: state.numeros.min,
//  max: state.numeros.max,
// }
// eu acesso assim: props.min e props.max
export default connect(mapStateToProps)(Sorteio);
