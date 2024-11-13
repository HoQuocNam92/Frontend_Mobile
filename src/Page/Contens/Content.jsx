import title_laptap from '../../Components/Image/7685c44fb50570d8a36489fb366aa0b2.png';
import Giam_gia from '../../Components/Image/Text.png';
import title_dienthoai from '../../Components/Image/cf787a5e50db0b5649f26f0b3ddf8c10.png';
import title_phukien from '../../Components/Image/f61159eca7790da71793dcdf229fad86.png';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductList } from '../../Context/ProductProvider/ProductProvider';
export default function Content() {
    const { products, products_mobile, products_laptap, products_phukien } = useContext(ProductList);

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    <img src={Giam_gia} alt="" className={Styles.SideBar} />
                </div>
                <div className={Styles.ProductTop}>
                    {products.map((product, index) => (
                        <div className={Styles.product} key={product.id}>
                            <img src={product.img} alt={product.name} className={Styles.products} />
                            <Link className={Styles.products__option} to={`/product/list/${product.id}`}>
                                <h4 className={Styles.name__product}>{product.name}</h4>
                                <h3 className={Styles.price__product}>{product.price}</h3>
                            </Link>
                            <h3 className={Styles.price__old}>{product.oldPrice}</h3>
                            <Link to={`/product/list/${product.id}`} className={Styles.click__buy}>
                                Mua ngay
                            </Link>
                        </div>
                    ))}
                </div>
                {/* <div className={Styles.product}> */}
                {/* <img src={title_dienthoai} alt="" className={Styles.sales} />
                    <div className={Styles.contents__feture}>
                        {products_mobile.map((product, index) => (
                            <div className={Styles.contents} key={product.id}>
                                <img src={product.img} alt={product.name} className={Styles.products_mobile} />
                                <Link className={Styles.products__option} to={`/product/${product.id}`}>
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
                        {products_laptap.map((product, index) => (
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
                        {products_phukien.map((product, index) => (
                            <div className={Styles.contents} key={product.id}>
                                <img src={product.img} alt={product.name} className={Styles.products_phukien} />
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
                {/* </div> */}
            </div>
        </>
    );
}
