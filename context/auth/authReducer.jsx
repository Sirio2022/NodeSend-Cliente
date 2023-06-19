// Implementación del reducer para el contexto de autenticación

import { USUARIO_AUTENTICADO } from '../../types';


export default function AuthReducer ( state, action ) {
  switch (action.type) {
    case USUARIO_AUTENTICADO:
        return {
            ...state,
            usuario: action.payload,
        };
    default:
      return state;
  }
}