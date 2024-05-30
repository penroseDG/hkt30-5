import React, { useState } from 'react';
import './body.scss';

export default function Body() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className='container'>
      <div className='container-left'>
        <div className="categories">
          <button className="category-button" onClick={toggleCategories}>
            Danh mục sản phẩm <br />
            _______________________
          </button>
          {showCategories && (
            <div className="category-list">
              <ul>
                <li>Thiết bị điện tử</li>
                <li>Sách</li>
                <li>Đồ tiêu dùng</li>
                <li>Thời trang</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='container-right'>
        <div className='list-product-img'>
          <div className='product' >
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/BiaTiger.jpg" alt="" />
            <div className='product-name'> Bia Tiger</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/comfort.jpg" alt="" />
            <div className='product-name'>Bột giặt comfort</div>
            <div className='product-price'>40.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/DauAn.jpg" alt="" / >
            <div className='product-name'> Dầu ăn </div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>BIA</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/milo.jpg" alt="" />
            <div className='product-name'>Sữa milo</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>MIlo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/suaTH.jpg" alt="" />
            <div className='product-name'> sữa TH </div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div> TH </div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/haohao.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>

          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
          <div className='product'>
            <img className='product-img' src="../../public/img-body/vim.jpg" alt="" />
            <div className='product-name'>Vim</div>
            <div className='product-price'>39.400đ</div>
            <div className='product-sales'>
              <div><i className="fa-regular fa-heart"></i></div>
              <div>30 đã bán</div>
            </div>
            <div className='product-address'>
              <div>Omo</div>
              <div>Hà Nội</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
