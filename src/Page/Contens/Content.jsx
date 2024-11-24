import Giam_gia from '@Components/Image/Text.png';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductList } from '@Context/ProductProvider/ProductProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

export default function Content() {
    const handleAdd = async (id, name, price, oldPrice) => {
        console.log('Check ', id, name, price, oldPrice);
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
    const {
        container,
        wrapper,
        SideBar,
        ProductTop,
        items,
        sale,
        products__option,
        name__product,
        price__product,
        price__old,
        click__buy__box,
        click__buy,
        items_details,
    } = Styles;
    const { products } = useContext(ProductList);
    return (
        <>
            <div className={container}>
                <div className={wrapper}>
                    <img src={Giam_gia} alt="" className={SideBar} />
                </div>
                <div className={ProductTop}>
                    {products.map((product, index) => (
                        <div className={items} key={index}>
                            <div className={items_details}>
                                <img src={product.img} alt={product.name} className={sale} />
                                <Link className={products__option} to={`/product/${product.title}/${product.id}`}>
                                    <h4 className={name__product}>{product.name}</h4>
                                    <h3 className={price__product}>{product.price}</h3>
                                </Link>
                                <h3 className={price__old}>{product.oldPrice}</h3>
                            </div>
                            <div className={click__buy__box}>
                                <Link
                                    onClick={() => {
                                        handleAdd(product.id, product.name, product.price, product.oldPrice);
                                    }}
                                    className={click__buy}
                                >
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination count={10} color="primary" />
            </div>
        </>
    );
}
