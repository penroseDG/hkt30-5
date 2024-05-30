import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer container">
      <div className="row">
        <div className="col-md-2 footer-column">
          <h4>Chăm sóc khách hàng</h4>
          <ul>
            <li>Trung tâm trợ giúp</li>
            <li>Hướng dẫn mua hàng</li>
          </ul>
        </div>
        <div className="col-md-2 footer-column">
          <h4>Giới thiệu</h4>
          <ul>
            <li>Về chúng tôi</li>
            <li>Tin tức</li>
          </ul>
        </div>
        <div className="col-md-2 footer-column">
          <h4>Danh mục sản phẩm</h4>
          <ul>
            <li>Sản phẩm mới</li>
            <li>Sản phẩm bán chạy</li>
          </ul>
        </div>
        <div className="col-md-2 footer-column footer-column-follow">
          <h4>Theo dõi chúng tôi</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="col-md-4 footer-column footer-developer-team">
          <h4>Đội ngũ phát triển</h4>
          <p> Trịnh Quốc Hai.</p>
        </div>
      </div>
    </div>
  );
}
