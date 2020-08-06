import React from "react";
import "./CSS/Intervalo.css";
import Card from "./Card";

// o metodo connect criado pelo desenvolvedores
// react é o responsavel por conectar o redux ao componente
import { connect } from "react-redux";

const Intervalo = (props) => {
  const { min, setMin, max, setMax } = props;
  return (
    <Card title="Numeros">
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
          />
        </span>
        <span>
          <strong>Maximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
          />
        </span>
      </div>
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

// esse metodo recebe o dispatch do connect
// e é ele o responsavel por jogar a action pros reducers
// mas como pode ver, voce nao joga dispatch pro componente
// voce jogar um metodo que ao ser chamado ele chama o dispatch
// pois assim, esse metodo pode fazer tudo, e so depois fazer o dispatch
// colocando o dispatch dentro de um timeOut ele so vai ser chamado
// depois que o timeOut termina, colocando dentro de um then de uma
// promise ele so vai ser chamado quando a promise resolver
const mapDispatchToProps = (dispatch) => {
  return {
    setMin(novoNumero) {
      // pode fazer qualquer coisa aqui, e so depois chamar o dispatch
      dispatch({
        type: "NUM_MIN_ALTERADO",
        payload: novoNumero,
      });
    },

    setMax(novoNumero) {
      dispatch({
        type: "NUM_MAX_ALTERADO",
        payload: novoNumero,
      });
    },
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
export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
