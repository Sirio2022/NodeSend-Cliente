'use client';

import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import { USUARIO_AUTENTICADO } from '@/app/types';

import axiosInstance from '@/app/config/axios';

const AuthState = ({ children }) => {
  // Definir un state inicial
  const initialState = {
    token: '',
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  // Definir el reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Registrar nuevos usuarios
    const registrarUsuario = async (datos) => {
        try {
            const respuesta = await axiosInstance.post('/api/usuarios', datos);
            console.log(respuesta);
        } catch (error) {
            console.log(error);
        }
    };

  // Usuario autenticado
    const usuarioAutenticado = (nombre) => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre,
        });
    };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        usuarioAutenticado,
        registrarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
