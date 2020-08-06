import React from "react";
import { Provider } from "react-redux"; // Responsavel por conectar o redux ao react
import storeConfig from "./Store/storeConfig";
import "./App.css";

import Intervalo from "./Components/Intervalo";
import Media from "./Components/Media";
import Soma from "./Components/Soma";
import Sorteio from "./Components/Sorteio";

// Aqui voce cria uma Store, podendo ter mais que
// uma, mas nesse caso o jeito mais simples e jogar
// o storeConfig() dentro do Provider
//const store = storeConfig();

export default (props) => {
  return (
    // para que toda a sua aplicaçao tenha acesso ao redux
    // e com isso de qualquer lugar voce altera qualquer lugar
    // é preciso que toda sua aplicaçao esteja envolvido pelo Provider
    <Provider store={storeConfig()}>
      <div className="App">
        <h1>Exercicio React-Redux</h1>
        <div className="linha">
          <Intervalo />
        </div>
        <div className="linha">
          <Media />
          <Soma />
          <Sorteio />
        </div>
      </div>
    </Provider>
  );
};
