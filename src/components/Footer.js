import React, { Component } from 'react'

class Footer extends Component {
    
    render() { 
        return (
            <div>
                <footer className="footer" style={{height:'20px'}}>
                <div className="container">
                    <div className="content has-text-centered">
                    <p>
                        <strong>ระบบฐานข้อมูลอาสาสมัคร</strong> พัฒนาโดยกองงานกิจการพิเศษและเทคโนโลยีสารสนเทศ.
                        <p>Copyright © 2017 ตามพระราชบัญญัติลิขสิทธิ์ 2537 มูลนิธิน้อมเกล้าเพื่อแผ่นดิน (NPPF)</p>
                    </p>
                    </div>
                </div>
                </footer>
            </div>
          )
    }
}
 
export default Footer;