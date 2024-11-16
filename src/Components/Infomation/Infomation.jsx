function Infomation() {
    return (
        <div className="flex justify-center items-center mx-[160px]">
            <div className="profile_left">
                <img src="https://example.com/image.jpg" alt="profile_image" />
                <h2>Hồ Quốc Nam</h2>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                <button className="button_primary">Chỉnh sửa thông tin</button>
            </div>
            <div className="profile_right w-[930px]">
                <h1 className="text-[18px]">Hồ sơ của tôi</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                <div>
                    <label htmlFor="">Tên đăng nhập</label>
                    <input className="ml-[20px]" type="text" value="Hồ Quốc Nam" placeholder="Full Name" />
                </div>
                <div>
                    <label htmlFor="">Tên</label>
                    <input className="ml-[20px]" type="text" value="hoquocnam" placeholder="Username" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input className="ml-[20px]" type="text" value="hoquocnam" placeholder="Username" />
                </div>
                <div>
                    <label htmlFor="">Số điện thoại</label>
                    <input className="ml-[20px]" type="text" value="hoquocnam" placeholder="Username" />
                </div>
                <div>
                    <label htmlFor="">Giới tính</label>
                    <input className="ml-[20px]" type="checkbox" />
                    <label htmlFor="">Nam</label>
                    <input className="ml-[20px]" type="checkbox" />
                    <label htmlFor="">Nữ</label>
                    <input className="ml-[20px]" type="checkbox" />
                    <label htmlFor="">Khác</label>
                </div>
                <div>
                    <label htmlFor="">Ngày sinh</label>
                    <input className="ml-[20px]" type="text" value="hoquocnam" placeholder="Username" />
                </div>
                <img src="" alt="" />
                <p>Dung lượng ảnh file tối đa</p>
            </div>
        </div>
    );
}

export default Infomation;
