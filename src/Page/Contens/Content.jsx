import './Content.css';
import { useContext } from 'react';
import { ProductList } from '@Context/ProductProvider/ProductProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
export default function Content() {
    const handleAdd = async (id, name, price, oldPrice) => {
        try {
            const responve = await axios.post('http://localhost:8080/api/routes/cart', {
                id: id,
                name: name,
                price: price,
                oldPrice: oldPrice,
            });
            if (responve.data && responve.status === 200) {
                toast.success('Thêm sản phẩm thành công!');
            } else {
                toast.error('Thêm sản phẩm vào giỏ hàng thất bại!');
            }
        } catch (err) {
            alert('Không thể thêm sản phẩm vào giỏ hàng.');
        }
    };

    const { products } = useContext(ProductList);
    <Pagination count={10} color="primary" />

    return (
  
    <div className="product-items">
        {products.map((items, index)=>(
        <div className="item">
            <img src={items.img} alt="iphone" />
            <h2>{items.name}</h2>
            <p>{items.price}</p>
        </div>
        ))}
       
    </div>
    
    )
         
}