import xiaomi from '../../Components/Image/xiaomi-redmi-note-13-gold-thumb-600x600.jpg';
import tai_nghe from '../../Components/Image/tai-nghe-bluetooth-chup-tai-havit-h661bt-thumb-600x600.jpg';
import mi_band from '../../Components/Image/mi-band-8-pro-den-tn2-1-600x600.jpg';
import hp_pavilion from '../../Components/Image/hp-pavilion-15-eg3095tu-i5-8c5l6pa-thumb-2-600x600.jpg';
import dong_ho from '../../Components/Image/293721.jpg';
import loa_blutooth from '../../Components/Image/loa-bluetooth-ava-go-z09-tb-600x600.jpg';
import mouse_shop from '../../Components/Image/chuot-khong-day-rapoo-m20-plus-thumb3-600x600.jpeg';
import casio_clock from '../../Components/Image/casio-mq-27-7edf-nam-1-1-600x600.jpg';
import pc from '../../Components/Image/acer-predator-helios-neo-phn16-71-53m7-i5-nhqlusv005-thumb-638627244359058726-600x600.jpg';
import camera from '../../Components/Image/camera-ip-360-do-2mp-tp-link-tapo-c200c-thumb-600x600.jpg';
import laptap_hps from '../../Components/Image/hp-240-g9-i5-6l1y2pa-thumb-1-600x600.jpg';
import laptap_acer from '../../Components/Image/acer-aspire-5-a515-58p-774r-i7-nxkhjsv005-thumb-638628538439370885-600x600.jpg';
import laptap_hp15 from '../../Components/Image/hp-15-fd0304tu-i3-a2nl5pa-thumb-600x600.jpg';
import laptap_asus from '../../Components/Image/asus-vivobook-go-15-e1504fa-r5-nj776w-thumb-600x600.jpg';
import laptap_lenove from '../../Components/Image/lenovo-ideapad-slim-5-15iru9-core-5-83d0000evn-thumb-638622511854518494-600x600.jpg';
import laptap_hp_pavillion from '../../Components/Image/hp-pavilion-15-eg3095tu-i5-8c5l6pa-thumb-2-600x600.jpg';
import laptap_hp_paviliion2 from '../../Components/Image/hp-pavilion-15-eg3094tu-i5-8c5l5pa-thumb-1-600x600.jpg';
import laptap_hp_15s from '../../Components/Image/hp-240-g9-i3-6l1x7pa-thumb-600x600.jpg';
import phukien_daycap from '../../Components/Image/cap-lightning-1m-xmobile-al31-1000-thumb1-600x600.jpg';
import phukien_banphim from '../../Components/Image/ban-phim-co-co-day-dareu-ek75-thumb-600x600.jpg';
import phukien_chuotblutooth from '../../Components/Image/chuot-bluetooth-silent-rapoo-m500-thumb-7-600x600.jpg';
import phukien_loablutooth from '../../Components/Image/loa-bluetooth-ava-plus-minipod-y23-thumb-2-600x600.jpg';
import phukien_taingheloablutooth from '../../Components/Image/tai-nghe-bluetooth-true-wireless-ava-freego-a20-thumb-2-600x600.jpg';
import phukien_sacduphong from '../../Components/Image/pin-sac-du-phong-polymer-10000mah-type-c-pd-20w-baseus-bipow-pro-ppbd2-1020-thumb-1-600x600.jpg';
import laptap_hp15s1 from '../../Components/Image/hp-15s-fq5229tu-i3-8u237pa-thumb-600x600.png';
import laptap_acer_asprire from '../../Components/Image/acer-aspire-5-a514-56p-742f-i7-nxkhrsv005-thumb-638628535714824429-600x600.jpg';
import dienthoai_xiaomi from '../../Components/Image/xiaomi-redmi-note-13-green-thumb-600x600.jpg';
import dienthoai_redmi from '../../Components/Image/xiaomi-redmi-note-13-gold-thumb-600x600.jpg';
import dienthoai_vivo29 from '../../Components/Image/vivo-v29e-thumb-600x600.jpg';
import dienthoai_xiaomi14 from '../../Components/Image/xiaomi-redmi-note-13-green-thumb-600x600.jpg';
import dienthoai_xiaomi14_green from '../../Components/Image/xiaomi-14-green-thumbnew-600x600.jpg';
import dienthoai_vivo from '../../Components/Image/vivo-v40-lite-bac-thumb-600x600.jpg';
import dienthoai_vivoV30 from '../../Components/Image/vivo-v30e-nau-thumb-1-600x600.jpg';
import dienthoai_xiaomi305G from '../../Components/Image/vivo-v30-5g-xanh-thumb-600x600.jpg';
import dienthoai_xiaomi313 from '../../Components/Image/xiaomi-14t-grey-thumb-600x600.jpg';
import dienthoai_xiaomi30e from '../../Components/Image/vivo-v30e-nau-thumb-1-600x600.jpg';
import { createContext, useState } from 'react';
export const ProductList = createContext();
export function AuthProducts({ children }) {
    const [products] = useState([
        {
            title: 'mobile',
            id: 1,
            img: xiaomi,
            name: 'Xiaomi 14 5G 12GB/256Gb',
            price: '17.999.000',
            oldPrice: '22.290.000',
        },
        {
            title: 'phukien',
            id: 2,
            img: tai_nghe,
            name: 'Tai nghe Bluetooth HAVIT',
            price: '290.000',
            oldPrice: '500.000',
        },
        {
            title: 'mobile',
            id: 3,
            img: mi_band,
            name: 'Xiaomi Mi Band 8 Pro',
            price: '1.390.000',
            oldPrice: '1.790.000',
        },
        {
            title: 'laptop',
            id: 4,
            img: hp_pavilion,
            name: 'HP Pavllion 15 3094TU',
            price: '15.499.000',
            oldPrice: '19.990.000',
        },
        {
            title: 'dongho',
            id: 5,
            img: dong_ho,
            name: 'EYKI 28 mm Nữ ESYS003',
            price: '320.000',
            oldPrice: '990.000',
        },
        {
            title: 'loablutooth',
            id: 6,
            img: loa_blutooth,
            name: 'Loa Blutooth AV+',
            price: '90.000',
            oldPrice: '190.000',
        },
        {
            tile: 'chuot',
            id: 7,
            img: mouse_shop,
            name: 'Chuột Không dây Rapoo',
            price: '160.000',
            oldPrice: '200.000',
        },
        {
            title: 'dongho',
            id: 8,
            img: casio_clock,
            name: 'Đồng hồ ELIO 30',
            price: '290.000',
            oldPrice: '990.000',
        },
        {
            title: 'laptop',
            id: 9,
            img: pc,
            name: 'Laptop Acer Predator Helios',
            price: '25.990.000',
            oldPrice: '37.990.000',
        },
        {
            title: 'camera',
            id: 10,
            img: camera,
            name: 'Camera IP 360 Độ 2MP',
            price: '390.000',
            oldPrice: '490.000',
        },
        {
            title: 'capsac',
            id: 1,
            img: phukien_daycap,
            name: 'Cáp Lightning 1m',
            price: '99.000',
            oldPrice: '290.000',
        },
        {
            title: 'banphim',
            id: 2,
            img: phukien_banphim,
            name: 'Bàn Phím Cơ Có Dây',
            price: '670.000',
            oldPrice: '900.000',
        },
        {
            title: 'chuot',
            id: 3,
            img: phukien_chuotblutooth,
            name: 'Chuột Bluetooth Rapion',
            price: '290.000',
            oldPrice: '590.000',
        },
        {
            title: 'loablutooth',
            id: 4,
            img: phukien_loablutooth,
            name: 'Loa Bluetooth AVA+ Go',
            price: '99.000',
            oldPrice: '190.000',
        },
        {
            title: 'sacduphong',
            id: 5,
            img: phukien_sacduphong,
            name: 'Pin sạc dự phòng Polymer',
            price: '460.000',
            oldPrice: '890.000',
        },
        {
            title: 'loablutooth',
            id: 6,
            img: loa_blutooth,
            name: 'Loa Blutooth AV+',
            price: '90.000',
            oldPrice: '190.000',
        },
        {
            title: 'chuot',
            id: 7,
            img: mouse_shop,
            name: 'Chuột Bluetooth Silent',
            price: '260.000',
            oldPrice: '400.000',
        },
        {
            title: 'dongho',
            id: 8,
            img: casio_clock,
            name: 'Đồng hồ ELIO 30',
            price: '290.000',
            oldPrice: '990.000',
        },
        {
            id: 9,
            img: phukien_taingheloablutooth,
            name: 'Tai nghe Bluetooth True',
            price: '245.000',
            oldPrice: '890.000',
        },
        {
            title: 'camera',
            id: 10,
            img: camera,
            name: 'Camera IP Ngoài Trời',
            price: '750.000',
            oldPrice: '990.000',
        },
        {
            title: 'mobile',
            id: 1,
            img: dienthoai_xiaomi,
            name: 'Xiaomi 14 5G 12GB/256Gb',
            price: '17.999.000',
            oldPrice: '22.290.000',
            quantity: 1,
        },
        {
            title: 'mobile',
            id: 2,
            img: dienthoai_redmi,
            name: 'Điện thoại Redmi',
            price: '7.990.000',
            oldPrice: '9.900.000',
        },
        {
            title: 'mobile',
            id: 3,
            img: dienthoai_vivo29,
            name: 'Xiaomi Mi Band 8 Pro',
            price: '1.390.000',
            oldPrice: '1.790.000',
        },
        {
            title: 'mobile',
            id: 4,
            img: dienthoai_xiaomi14,
            name: 'Điện thoại Xiaomi',
            price: '15.499.000',
            oldPrice: '19.990.000',
        },
        {
            title: 'mobile',
            id: 5,
            img: dienthoai_xiaomi14_green,
            name: 'Điện thoại Xiaomi 14',
            price: '7.920.000',
            oldPrice: '9.990.000',
        },
        {
            title: 'mobile',
            id: 6,
            img: dienthoai_vivo,
            name: 'Điện thoại Vivo',
            price: '7.900.000',
            oldPrice: '9.990.000',
        },
        {
            title: 'mobile',
            id: 7,
            img: dienthoai_vivoV30,
            name: 'Điện thoại Vivo',
            price: '2.360.000',
            oldPrice: '4.800.000',
        },
        {
            title: 'mobile',
            id: 8,
            img: dienthoai_xiaomi305G,
            name: 'Điện thoại Xiami 302',
            price: '6.490.000',
            oldPrice: '8.390.000',
        },
        {
            title: 'mobile',
            id: 9,
            img: dienthoai_xiaomi313,
            name: 'Điện thoại Xiami33',
            price: '25.990.000',
            oldPrice: '37.990.000',
        },
        {
            title: 'mobile',
            id: 10,
            img: dienthoai_xiaomi30e,
            name: 'Điện thoại Xiamao 30',
            price: '4.990.000',
            oldPrice: '7.890.000',
        },
        {
            title: 'Laptop',
            id: 1,
            img: laptap_hps,
            name: 'HP 15s fq5229TU i3',
            price: '10.999.000',
            oldPrice: '13.290.000',
        },
        {
            title: 'Laptop',
            id: 2,
            img: laptap_acer,
            name: 'Acer Aspire 5 A514',
            price: '13.990.000',
            oldPrice: '19.990.000',
        },
        {
            title: 'Laptop',
            id: 3,
            img: laptap_hp15,
            name: 'HP 240 G9 i3 1215U',
            price: '9.390.000',
            oldPrice: '12.790.000',
        },
        {
            title: 'Laptop',
            id: 4,
            img: laptap_asus,
            name: 'Lenovo Ideapad Slim 5',
            price: '17.499.000',
            oldPrice: '21.990.000',
        },
        {
            title: 'Laptop',
            id: 5,
            img: laptap_lenove,
            name: 'Asus Vivobook Go 15',
            price: '12.590.000',
            oldPrice: '17.990.000',
        },
        {
            title: 'Laptop',
            id: 6,
            img: laptap_hp_pavillion,
            name: 'Acer Aspire 5 A515',
            price: '13.990.000',
            oldPrice: '19.300.000',
        },
        {
            title: 'Laptop',
            id: 7,
            img: laptap_hp_paviliion2,
            name: 'Asus Vivobook 19',
            price: '16.000.000',
            oldPrice: '19.300.000',
        },
        {
            title: 'Laptop',
            id: 8,
            img: laptap_hp_15s,
            name: 'Asus Vivobook 15',
            price: '10.290.000',
            oldPrice: '14.990.000',
        },
        {
            title: 'Laptop',
            id: 9,
            img: laptap_hp15s1,
            name: 'Laptop Acer Predator Helios',
            price: '25.990.000',
            oldPrice: '37.990.000',
        },
        {
            title: 'Laptop',
            id: 10,
            img: laptap_acer_asprire,
            name: 'HP 240 G9 i5',
            price: '14.900.000',
            oldPrice: '418.690.000',
        },
    ]);

    return <ProductList.Provider value={{ products }}>{children}</ProductList.Provider>;
}
