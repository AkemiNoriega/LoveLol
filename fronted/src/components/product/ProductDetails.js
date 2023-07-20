import React, {useEffect} from 'react'

import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import  {getproductDetails, clearErrors} from '../../actions/productActions'


const ProductDetails = ({match}) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector(state => state.ProductDetails)
  useEffect(() => {
    dispatch(getproductDetails(match.params.id))

      if(error) {
        alert.error(clearErrors())
      }

  }, [dispatch, alert, error, match.params.id])
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails