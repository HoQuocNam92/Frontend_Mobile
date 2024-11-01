import { Link } from "react-router-dom";
import './css/Buy.css'

import iphone15 from './img/i.jpg'
export default function Buy() {


    return (

        <div className="container">
            <div className="container_box">
                <div className="titiles">
                    <div className="title_box">
                        <h3>Điện thoại Iphone 16 Pro Max 256gb</h3>
                    </div>
                </div>
                <div className="container_content_box">
                    <div className="content_box_left">
                        <div className="img_box">
                            <img src={iphone15} alt="" className="img_box_s" />
                        </div>
                        <div className="info_guarantee">Bảo hành 12 tháng</div>
                        <div className="info_accessory">Phụ kiện kèm theo</div>
                    </div>
                    <div className="content_box_right">
                        <div className="content_box_right_right">
                            <div className="price_buy">Giá bán 9.999 VND</div>
                            <div className="buy_now_sa"><Link to="/buy">Mua ngay</Link></div>
                            <div className="buy_now_s"><Link to="/buygiamgia">Mua trả góp 0Đ</Link></div>
                            <div className="buy_now_a"><Link to="/buygiamgia">Mua trả góp 0% Thẻ</Link></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}