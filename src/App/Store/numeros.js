// estado inicial desse reducer
const estadoInicial = {
  min: 1,
  max: 10,
};

// por eu ter esportado ele assim, no storeConfig basta eu coloca numeros e
// fica tudo certo
export default (state = estadoInicial, action) => {
  switch (action.type) {              // voce pega o type e verifica se ele é do tipo
    case "NUM_MIN_ALTERADO":          // que voce espera, nesse caso mudar valor minimo
      return {                        // sendo voce retorna um novo estado com o valor min
        ...state,                     // alterado
        min: action.payload,
      };
    case "NUM_MAX_ALTERADO":
      return {
        ...state,
        max: action.payload,
      };

    default:                          // e caso nao seja os type que voce queria, voce
      return state;                   // retorna o state que recebeu do estado anterior
  }
};
