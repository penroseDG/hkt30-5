import React from 'react';
import './header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div>
      <div className='header container'>
        <div className='logo'>
          <div className='nameShop'>
            <h3>Rikkei_Shop</h3>
          </div>
          <div className='findItems'>
            <label htmlFor="findItems"></label>
            <input type="text" placeholder=' nhập để tìm kiếm ' />
            <i className="fas fa-search"></i>
          </div>
          <div className="cart"> Giỏ hàng
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div>Đăng nhập</div>
          <div>Đăng kí</div>
        </div>
      </div>
    </div>
  );
}
