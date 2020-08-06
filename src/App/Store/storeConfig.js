// createStore é o metodo que cria sua Store
// combineReducers pega toda as suas reducer e as combina
import { createStore, combineReducers } from "redux";

// como tender a crecer muito, os reducer pode ser colocado em outro arquivo
import numeros from "./numeros";

// Quando é chamado o diaspatch ele envia a action para o reducers abaixo
// e ela sai executando cada metodo que esta ai dentro, nesse caso so tem o de numeros
// quando esse metodo é chamado, é colocado 2 parametros, o 1º é o estado anterior, e
// o 2º é action que veio do dispatch contendo o type e payload
const reducers = combineReducers({
  numeros,
});

// é necessario voce retorna uma funcao que ao ser chamada retorna
// um createStore, pois com isso voce pode ter varias store!!
export default () => createStore(reducers);
