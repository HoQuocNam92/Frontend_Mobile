import title_laptap from "../Image/7685c44fb50570d8a36489fb366aa0b2.png";
import Giam_gia from "../Image/Text.png";
import title_dienthoai from "../Image/cf787a5e50db0b5649f26f0b3ddf8c10.png";
import title_phukien from "../Image/f61159eca7790da71793dcdf229fad86.png";
import "./Content.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductList } from "../AuthProducts/AuthProducts";
export default function Content() {
  const { products, products_mobile, products_laptap, products_phukien } =
    useContext(ProductList);

  return (
    <>
      <div className="container-contents">
        <div className="container--top">
          <img src={Giam_gia} alt="" className="sale" />
        </div>
        <div className="contents-feture">
          {products.map((product, index) => (
            <div className="contents--product" key={product.id}>
              <img src={product.img} alt={product.name} className="products" />
              <Link
                className="products-option"
                to={`/product/list/${product.id}`}
              >
                <h4 className="name-product">{product.name}</h4>
                <h3 className="price-product">{product.price}</h3>
              </Link>
              <h3 className="price-old">{product.oldPrice}</h3>
              <Link to={`/product/list/${product.id}`} className="click-buy">
                Mua ngay
              </Link>
            </div>
          ))}
        </div>
        <div className="container--contents-title">
          <img src={title_dienthoai} alt="" className="sales" />
          <div className="contents-feture">
            {products_mobile.map((product, index) => (
              <div className="contents--product" key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="products_mobile_css"
                />
                <Link className="products-option" to={`/product/${product.id}`}>
                  <h4 className="name-product">{product.name}</h4>
                  <h3 className="price-product">{product.price}</h3>
                </Link>
                <h3 className="price-old">{product.oldPrice}</h3>
                <Link to={`/product/${product.id}`} className="click-buy">
                  Mua ngay
                </Link>
              </div>
            ))}
          </div>
          <img src={title_laptap} alt="" className="sales" />
          <div className="contents-feture">
            {products_laptap.map((product, index) => (
              <div className="contents--product" key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="products_laptop_css"
                />
                <Link
                  className="products-option"
                  to={`/product/laptop/${product.id}`}
                >
                  <h4 className="name-product">{product.name}</h4>
                  <h3 className="price-product">{product.price}</h3>
                </Link>
                <h3 className="price-old">{product.oldPrice}</h3>
                <Link
                  to={`/product/laptop/${product.id}`}
                  className="click-buy"
                >
                  Mua ngay
                </Link>
              </div>
            ))}
          </div>
          <img src={title_phukien} alt="" className="sales" />
          <div className="contents-feture">
            {products_phukien.map((product, index) => (
              <div className="contents--product" key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="products_phukien_css"
                />
                <Link
                  className="products-option"
                  to={`/product/phukien/${product.id}`}
                >
                  <h4 className="name-product">{product.name}</h4>
                  <h3 className="price-product">{product.price}</h3>
                </Link>
                <h3 className="price-old">{product.oldPrice}</h3>
                <Link
                  to={`/product/phukien/${product.id}`}
                  className="click-buy"
                >
                  Mua ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
