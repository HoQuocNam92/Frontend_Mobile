import Styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <footer className="footer_box">
                <div className="footer_one">
                    <div className="h5"> Tổng đài hỗ trợ</div>
                    <p>
                        Gọi mua <a href="/dsa"> 038 790 1461</a>
                    </p>
                    <p>
                        Khiếu nại <a href="/s"> 1800 1062</a>
                    </p>
                    <p>
                        Bảo hành <a href="/s"> 1900 232 464</a>
                    </p>
                </div>
                <div className="footer_one">
                    <div className="h5">Về công ty</div>
                    <p>
                        Giới thiệu công ty<a href="/dsa"> 038 790 1461</a>
                    </p>
                    <p>
                        Tuyển dụng <a href="/s"> 1800 1062</a>
                    </p>
                    <p>
                        Tìm siêu thị 2.966 Shop <a href="/s"> 1900 232 464</a>
                    </p>
                </div>
                <div className="footer_one">
                    <div className="h5">Thông tin khác</div>
                    <p>
                        Tích điểm Quà tặng VIP <a href="/dsa"> Nhắn tin qua Em Nam Store</a>
                    </p>
                    <p>
                        Lịch sử mua hàng
                        <a href="/s"> Nhắn tin qua em Nam Store</a>
                    </p>
                    <p>
                        DV vệ sinh máy lạnh<a href="/s"> 1900 232 464</a>
                    </p>
                </div>
            </footer>
            <div>
                <p className="footer_loithoai">
                    © 2018. Công ty cổ phần Quốc Nam. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007.
                    GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang
                    Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1,
                    P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com. Chịu
                    trách nhiệm nội dung: Huỳnh Văn Tốt. Email: hotrotmdt@thegioididong.com. Xem chính sách sử dụng
                </p>
            </div>
        </>
    );
}
