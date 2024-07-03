import { useNavigate } from "react-router-dom"

const ProductCard = ({star, price, image_url}) => {
    const navigate = useNavigate();
    return(
        <div className="p-card-container">
            <div className='star-wrapper'>
                <img src='/images/star-10.png' alt=''/>
                <div>star</div>
            </div>
            <span className='price-wrapper'>
                {`$${price}`}
            </span>
            <img className='logo' alt='' src={image_url}/>
            <div className='btn-view' onClick={(e) => {
                navigate('/product-detail');
            }}>
                View Product
            </div>
        </div>
    )
}

const ProductList = () => {
    const products = [
        {star: 4.7, price: '2.99', image_url : '/images/products/1.png'},
        {star: 4.5, price: '3.99', image_url : '/images/products/2.png'},
        {star: 4.4, price: '1.99', image_url : '/images/products/3.png'},
        {star: 4.2, price: '2.30', image_url : '/images/products/4.png'},
        {star: 3.9, price: '1.98', image_url : '/images/products/5.png'},
        {star: 3.9, price: '1.98', image_url : '/images/products/1.png'},
        {star: 4.2, price: '2.30', image_url : '/images/products/3.png'},
        {star: 3.9, price: '1.98', image_url : '/images/products/4.png'},
        {star: 3.9, price: '1.98', image_url : '/images/products/2.png'},
    ]
    const options = [
        {value: 'rate', label: 'rate'},
        {value: 'newest', label: 'newest'}
    ]
    return(
        <div className="product-list">
            <div className="sort-option-container">
                <div className='sort-option-wrapper'>
                    <span className="text-lg">Sort By:</span>
                    <select id="sort-option" className="sort-option">
                        <option value="rate">rate</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>
            <div className='products-wrapper'>
            {
                products.map((product, index) => (
                    <ProductCard price = {product.price} star={product.star} image_url={product.image_url} />
                ))
            }
            </div>
            <div className='btn-similar'>
                <img src='/images/btn-similar-icon.png' alt=''/>
                <span>Similar To</span>
            </div>
        </div>
    )
}

export default ProductList;