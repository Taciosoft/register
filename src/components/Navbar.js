import React, { Component } from 'react';
import ModalLogin from './ModalLogin'


class Navbar extends Component {
    render() { 
        return (
            <div>
           <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                    <a className="navbar-item" href="##">
                    <img src="https://www.img.live/images/2018/05/03/bulma-logo-whiteecfb2.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">หน้าหลัก</a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="/documentation/overview/start/">การจัดการ</a>
                    <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item is-active" href="/documentation/overview/start/">เพิ่มข้อมูลจิตอาสา</a>
                    <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">ค้นหาข้อมูล</a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">เพิ่มข้อมูลผู้ใช้งานระบบ</a>
                    <a className="navbar-item" href="https://bulma.io/documentation/components/breadcrumb/">กำหนดสิทธิ์ผู้ใช้</a>
                    </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="/documentation/overview/start/">ทะเบียนจิตอาสา</a>
                    <div className="navbar-dropdown is-boxed">
                    <a className="navbar-item" href="/documentation/overview/start/">รายงานสรุปยอด</a>
                    </div>
                </div>
                </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <ModalLogin/>
                            </p>
                            <p className="control">
                             <a className="button is-primary" href="http://www.nomklao.or.th/dl/application.pdf">
                                <span className="icon"><i className="fas fa-download"></i></span>
                                <span>ดาวน์โหลดใบสมัคร</span>
                            </a>
                           </p>
                        </div>
                    </div>
                    </div>
              </nav>
           </div>
          )
    }
}
 
export default Navbar;