import Giam_gia from '@Components/Image/Text.png';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductList } from '../../Context/ProductProvider/ProductProvider';
import { useDispatch } from 'react-redux';
import { addItemsAction } from '../../Redux/Action';
export default function Content() {
    const dispatch = useDispatch();

    const { products } = useContext(ProductList);
    const handleAddItem = product => {
        console.log(product.name);
        dispatch(
            addItemsAction({
                id: product.id,
                name: product.name,
                price: product.price,
            })
        );
    };
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    <img src={Giam_gia} alt="" className={Styles.SideBar} />
                </div>
                <div className={Styles.ProductTop}>
                    {products.map((product, index) => (
                        <div className={Styles.product} key={index}>
                            <img
                                src={product.img}
                                alt={product.name}
                                className={Styles.products}
                            />
                            <Link
                                className={Styles.products__option}
                                to={`/product/${product.title}/${product.id}`}
                            >
                                <h4 className={Styles.name__product}>
                                    {product.name}
                                </h4>
                                <h3 className={Styles.price__product}>
                                    {product.price}
                                </h3>
                            </Link>
                            <h3 className={Styles.price__old}>
                                {product.oldPrice}
                            </h3>
                            <div className={Styles.click__buy__box}>
                                <Link
                                    onClick={() => {
                                        handleAddItem(product);
                                    }}
                                    className={Styles.click__buy}
                                >
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className={Styles.product}>
                    <img src={title_dienthoai} alt="" className={Styles.sales} />
                    <div className={Styles.contents__feture}>
                        {products.map((product, index) => (
                            <div className={Styles.contents} key={product.id}>
                                <img src={product.img} alt={product.name} className={Styles.products} />
                                <Link className={Styles.products__option} to={`/product/mobile/${product.id}`}>
                                    <h4 className={Styles.name__product}>{product.name}</h4>
                                    <h3 className={Styles.price__product}>{product.price}</h3>
                                </Link>
                                <h3 className={Styles.price__old}>{product.oldPrice}</h3>
                                <Link to={`/product/${product.id}`} className={Styles.click__buy}>
                                    Mua ngay
                                </Link>
                            </div>
                        ))}
                    </div> */}
                {/* <img src={title_laptap} alt="" className={Styles.sales} />
                    <div className={Styles.contents__feture}>
                        {products.map((product, index) => (
                            <div className={Styles.contents} key={product.id}>
                                <img src={product.img} alt={product.name} className={Styles.products_laptop} />
                                <Link className={Styles.products__option} to={`/product/laptop/${product.id}`}>
                                    <h4 className={Styles.name__product}>{product.name}</h4>
                                    <h3 className={Styles.price__product}>{product.price}</h3>
                                </Link>
                                <h3 className={Styles.price__old}>{product.oldPrice}</h3>
                                <Link to={`/product/laptop/${product.id}`} className={Styles.click__buy}>
                                    Mua ngay
                                </Link>
                            </div>
                        ))}
                    </div>
                    <img src={title_phukien} alt="" className={Styles.sales} />
                    <div className={Styles.contents__feture}>
                        {products.map((product, index) => (
                            <div className={Styles.contents} key={product.id}>
                                <img src={product.img} alt={product.name} className={Styles.products} />
                                <Link className={Styles.products__option} to={`/product/phukien/${product.id}`}>
                                    <h4 className={Styles.name__product}>{product.name}</h4>
                                    <h3 className={Styles.price__product}>{product.price}</h3>
                                </Link>
                                <h3 className={Styles.price__old}>{product.oldPrice}</h3>
                                <Link to={`/product/phukien/${product.id}`} className={Styles.click__buy}>
                                    Mua ngay
                                </Link>
                            </div>
                        ))}
                    </div> */}
            </div>
            {/* </div> */}
        </>
    );
}
