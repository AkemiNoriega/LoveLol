












export const getProducts = (keyword = '', currentPage = 1, category) => async (dispatch) => { //Maggie Video 64 y 66 category
    try { //Maggie Video 64

        dispatch({ type: ALL_PRODUCTS_REQUEST }) //Maggie Video 64

            const { data } =  await axios.get(`/api/v1/products?keyword=${keyword}&page=${currentPage}`) //Maggie Video 64

        if (category)
            link = `/api/v1/products?keywords=${keyword}&page=${currentPage}&category=${category}` //Maggie Video 66
        }
    