import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,

} from '../constants/productConstants';
import { disconnect } from 'mongoose';

export const getProducts = ( ) => async (dispatch) => {
    try{

        dispatch({ALL_PRODUCTS_REQUEST})

        const { data } = await axios .get ('/api/v1/products')

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.dat.message
        })
    }



}
// Clear Errors
export const clearErrors = ( ) => async (dispatch) => {
    dispatch({
    type: CLEAR_ERRORS})
}


//linea 5 y 6 de home colocar  import { useDispatch, useSelector }  from 'react-redux' y import { getProducts } from '.../actions/productActions'

//luego en la linea 10 dentro de const Home{ const dipatch = useDispatch(); colocar useEffect(() => {dispatch(getProducts())}, [dispatch])

//dentro de import React en home colocar { ,useEffect}

//productsCount en backend le falta una "s"

//ver otra vez el video #61 en el minuto 5:13 para hacer cambios en el home hasta el 10:03