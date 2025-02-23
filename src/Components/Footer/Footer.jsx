import Styles from './Footer.module.scss';

export default function Footer() {
    const {
        footer,
        clearfix__footer__top,
        footer__col,
        f__listmenu,
        arrow__showtaga,
        hidden,
        linkversion,
        f__listtel,
        f__listtel__content,
        f__social,
        link__fb,
        icon__facebook,
        link__ytb,
        icon__youtube,
        f__certify,
        dmca__badge,
        icon__protected,
        f__website,
        icon__dmx,
        icon__bhx,
        icon__maiam,
        f__website__title,
    } = Styles;
    return (
        <div>
            <footer className={footer}>
                <section className={clearfix__footer__top}>
                    <div className={footer__col}>
                        <ul className={f__listmenu}>
                            <li>
                                <a rel="nofollow" href="/lich-su-mua-hang">
                                    Lịch sử mua hàng
                                </a>
                            </li>
                            <li>
                                <a rel="nofollow" href="/daily">
                                    Cộng tác bán hàng cùng TGDĐ
                                </a>
                            </li>
                            <li>
                                <a rel="nofollow" href="/tra-gop">
                                    Tìm hiểu về mua trả góp
                                </a>
                            </li>
                            <li>
                                <a rel="nofollow" href="/bao-hanh">
                                    Chính sách bảo hành
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" clas={arrow__showtaga}>
                                    Xem thêm
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/chinh-sach-bao-hanh-san-pham">
                                    Chính sách đổi trả
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/giao-hang">
                                    Giao hàng &amp; Thanh toán
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/huong-dan-mua-hang">
                                    Hướng dẫn mua online
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/b2b">
                                    Bán hàng doanh nghiệp
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/phieu-mua-hang">
                                    Phiếu mua hàng
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="http://hddt.thegioididong.com">
                                    In hóa đơn điện tử
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/tos">
                                    Quy chế hoạt động
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/noi-quy-cua-hang">
                                    Nội quy cửa hàng
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/chat-luong-phuc-vu">
                                    Chất lượng phục vụ
                                </a>
                            </li>
                            <li className={hidden}>
                                <a
                                    rel="nofollow"
                                    href="/tin-tuc/can-trong-voi-nhung-sieu-thi-thegioididong-khong-chinh-chu--683321"
                                >
                                    Cảnh báo giả mạo
                                </a>
                            </li>
                            <li className={hidden}>
                                <a rel="nofollow" href="/chinh-sach-khui-hop-apple">
                                    Chính sách khui hộp sản phẩm Apple
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={footer__col}>
                        <ul className={f__listmenu}>
                            <li>
                                <a rel="nofollow" href="http://mwg.vn">
                                    Giới thiệu công ty (MWG.vn)
                                </a>
                            </li>
                            <li>
                                <a rel="nofollow" href="http://vieclam.thegioididong.com">
                                    Tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a rel="nofollow" href="/lien-he">
                                    Gửi góp ý, khiếu nại
                                </a>
                            </li>
                            <li>
                                <a rel="nofollow" href="/he-thong-sieu-thi-the-gioi-di-dong">
                                    Tìm siêu thị (2.259 shop)
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="nofollow"
                                    className={linkversion}
                                    href="http://www.thegioididong.com/?sclient=mobile"
                                >
                                    Xem bản mobile
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={footer__col}>
                        <div className={f__listtel}>
                            <p className={f__listtel__content}>
                                <strong>Tổng đài hỗ trợ</strong> (Miễn phí gọi)
                            </p>
                            <p className={f__listtel__content}>
                                <span>Gọi mua:</span> <a href="tel:18001060">1800.1060</a> (7:30 - 22:00)
                            </p>
                            <p className={f__listtel__content}>
                                <span>Kỹ thuật:</span> <a href="tel:18001763">1800.1763</a> (7:30 - 22:00)
                            </p>
                            <p className={f__listtel__content}>
                                <span>Khiếu nại:</span> <a href="tel:18001062">1800.1062</a> (8:00 - 21:30)
                            </p>
                            <p className={f__listtel__content}>
                                <span>Bảo hành:</span> <a href="tel:18001064">1800.1064</a> (8:00 - 21:00)
                            </p>
                        </div>
                    </div>
                    <div className={footer__col}>
                        <div className={f__social}>
                            <a href="https://www.facebook.com/thegioididongcom" className={link__fb}>
                                <i className={icon__facebook}></i>
                                3670.7k Fan
                            </a>
                            <a href="https://www.youtube.com/user/TGDDVideoReviews" className={link__ytb}>
                                <i className={icon__youtube}></i>
                                806k Đăng ký
                            </a>
                        </div>
                        <div className={f__certify}>
                            <a rel="nofollow" href="http://online.gov.vn/Home/WebDetails/20090" target="_blank">
                                <i className="icon-congthuong"></i>
                            </a>
                            <a rel="nofollow" href="/tos#giai-quyet-khieu-nai" target="_blank">
                                <i className="icon-khieunai"></i>
                            </a>
                            <a
                                rel="nofollow"
                                className={dmca__badge}
                                href="https://www.dmca.com/Protection/Status.aspx?ID=5b62e759-2a0c-4d86-b972-af903bfbc89d&amp;refurl=https://www.thegioididong.com/"
                                target="_blank"
                            >
                                <i className={icon__protected}></i>
                            </a>
                        </div>
                        <div className={f__website}>
                            <p className={f__website__title}>Website cùng tập đoàn</p>
                            <a rel="nofollow" href="https://www.dienmayxanh.com/">
                                <i className={icon__dmx}></i>
                            </a>
                            <a rel="nofollow" href="https://www.bachhoaxanh.com/">
                                <i className={icon__bhx}></i>
                            </a>
                            <a rel="nofollow" href="https://www.maiamtgdd.vn/">
                                <i className={icon__maiam}></i>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="copyright">
                    <section>
                        <p>
                            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp
                            ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020.
                            <br />
                            Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960.
                            Email: cskh@thegioididong.com. Chịu trách nhiệm nội dung: Huỳnh Văn Tốt.{' '}
                            <a rel="nofollow" href="/thoa-thuan-su-dung-trang-mxh">
                                Xem chính sách sử dụng
                            </a>
                        </p>
                    </section>
                </div>
            </footer>
        </div>
    );
}
