'use client';

import { USUARIO_AUTENTICADO } from "@/app/types";

export default function authReducer(state, action) {
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
