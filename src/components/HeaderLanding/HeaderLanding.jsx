import React from 'react'
import classNames from 'classnames'
import { navigateTo } from 'utils/routing'
import logo from 'assets/logo.png'
import './HeaderLanding.scss'

class Header extends React.Component {
  componentDidMount() {
  }

  openMenu = (isShow) => {
    if (isShow) {
      $('#menuMobile').animate({ top: '0px' }, 500)
    } else {
      $('#menuMobile').animate({ top: '-100%' }, 500)
    }
  }

  render() {
    return (
      <div id='headerLandingPage' className='headerLandingPage'>
        <div className='containerWarper'>
          <button type='button' className='menuMobileButton' onClick={() => this.openMenu(true)} />
          <img className='logo' onClick={() => this.navigatTo('/')} src={logo} alt='Logo DMX' />
          <ul className='menuListContainer'>
            <li className={classNames('menuItem', this.props.about ? 'activeTab' : '')}
              onClick={() => navigateTo('/about/introduction')}
            >
              <p>Về chúng tôi</p>
              <p>ABOUT US</p>
            </li>
            <li className={classNames('menuItem', this.props.product ? 'activeTab' : '')}
              onClick={() => navigateTo('/products')}
            >
              <p>Sản phẩm</p>
              <p>PRODUCT</p>
            </li>
            <li className={classNames('menuItem', this.props.news ? 'activeTab' : '')}
              onClick={() => navigateTo('/news/list')}
            >
              <p>Tin tức</p>
              <p>NEWS</p>
            </li>
            <li className={classNames('menuItem', this.props.project ? 'activeTab' : '')}
              onClick={() => navigateTo('/projects')}
            >
              <p>Dự án mẫu</p>
              <p>PROJECT</p>
            </li>
            <li className={classNames('menuItem', this.props.service ? 'activeTab' : '')}
              onClick={() => navigateTo('/service')}
            >
              <p>Dịch vụ</p>
              <p>SERVICE</p>
            </li>
            <li className={classNames('menuItem', this.props.contact ? 'activeTab' : '')}
              onClick={() => navigateTo('/contact')}
            >
              <p>Liên hệ</p>
              <p>CONTACT US</p>
            </li>
          </ul>
          <div id='menuMobile' className='menuMobile'>
            <ul className='nav nav-pills nav-stacked'>
              <li className='active'><span>MENU</span><i className='glyphicon glyphicon-remove pull-right pointer'
                onClick={() => this.openMenu(false)}
              />
              </li>
              <li onClick={() => navigateTo('contact')}>
                <a>ĐẦU TRANG</a>
              </li>
              <li onClick={() => navigateTo('contact')}>
                <a>DREAM LÀ GÌ</a>
              </li>
              <li onClick={() => navigateTo('contact')}>
                <a>TẠI SAO NÊN CHỌN?</a>
              </li>
              <li onClick={() => navigateTo('contact')}>
                <a>CÁCH HOẠT ĐỘNG</a>
              </li>
              <li onClick={() => navigateTo('contact')}>
                <a>LỘ TRÌNH DREAM</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
