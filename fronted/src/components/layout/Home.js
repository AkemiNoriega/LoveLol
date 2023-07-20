import { useEffect } from "react"; //Maggie Video 64










const Home = ({ match }) => { //Maggie Video 64

}






const [category, setCategory] = useState('') //Maggie video 66

const categories = [ //Maggie video 66
    'Skins',
    'Merchandaising'
]

const keyword = match.params.keyword  //Maggie Video 64
    
useEffect(() => { //Maggie Video 64
        if (error) {  //Maggie Video 64
            return alert.error(error)  //Maggie Video 64
        }

        dispatch(getproducts(keyword, currentPage, category)); //Maggie Video 64 y 66

}, [dispatch, alert, error, keyword, currentPage, category]) //Maggie Video 64 y 66



    const {loading, products, error, productsCount, resPerPage, filtredProductsCount} = //Maggie video 66
        useSelector(state => state.products)   //Maggie video 66
















    let count = productsCount; //Maggie video 66
    if(keyword) {
        count = filteredProductsCount
    }
































                                                <hr className="my-5"/>  //Maggie Video 66//
                                                <div className="mt-5"> 
                                                    <h4 className="mb-3"> 
                                                        Categories
                                                    </h4>

                                                    
                                                    <ul className="pl-0"> 
                                                        {categories.map(category =>(     //Maggie Video 66
                                                            <li 
                                                                style={{cursor: 'pointer', 
                                                                        listStyleType: 'none'
                                                                    }}
                                                                key={category}
                                                                onClick={() => setCategory(category)
                                                                }
                                                            >
                                                            {category}
                                                            </li>
                                                        ))}
                                                    </ul>                    
                                                    </div>







                        














                        {resPerPage <= count && (   //Maggie video 66






                                                                