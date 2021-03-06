import React, { Component } from 'react';
import './MyComponents.css';
import { DatePicker , Input , Tooltip , Cascader} from 'antd';
import { Divider } from 'antd';
import moment from 'moment';
import BtSave from './Button'
import ImgUpload from './ImgUpload';
import Footer from './Footer'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

class  Container extends Component {

    render() { 
        return ( 
            <div>

                <div className="container is-fluid" style={{paddingTop:'20px'}}>
                <div className="columns is-mobile">
                    <div className="column">
                    <p className="title"> <i className="fas fa-info-circle"></i> ข้อมูลส่วนบุคคล | Personal Information</p>
                    <Divider/>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">คำนำหน้าชื่อ</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <div className="control has-icons-left">
                                <div className="select">
                                <select>
                                    <option selected>ระบุเพศ</option>
                                    <option>ชาย</option>
                                    <option>หญิง</option>
                                </select>
                                </div>
                                <div className="icon is-small is-left">
                                <i className="fas fa-transgender"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                        
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">ชื่อ-นามสกุล</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" placeholder="ชื่อ-นามสกุล"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div> 
                     <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">National ID</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input className="input" type="text" placeholder="เลขบัตรประชาชน 13 หลัก"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-address-card"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">สัญชาติ</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                            <div className="select">
                                <select>
                                    <option selected>โปรดระบุสัญชาติ</option>
                                    <option>ชาย</option>
                                    <option>หญิง</option>
                                </select>
                                </div>
                                <span className="icon is-small is-left">
                                <i className="fas fa-globe"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">ศาสนา</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                            <div className="select">
                                <select>
                                    <option selected>โปรดระบุศาสนา</option>
                                    <option>ชาย</option>
                                    <option>หญิง</option>
                                </select>
                                </div>
                                <span className="icon is-small is-left">
                                <i className="fas fa-chess-rook"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                     <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">วดป.เกิด</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <DatePicker defaultValue={moment('2018/01/01', dateFormat)} format={dateFormat} />
                                <span className="icon is-small is-left">
                                
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">อาชีพปัจจุบัน</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <div className="control has-icons-left">
                                <div className="select">
                                <select>
                                    <option selected>โปรดเลือกอาชีพ</option>
                                    <option>ค้าขาย</option>
                                    <option>รับจ้าง</option>
                                    <option>รับราชการ</option>
                                    <option>พนักงานรัฐวิสาหกิจ</option>
                                    <option>นักธุรกิจ</option>
                                </select>
                                </div>
                                <div className="icon is-small is-left">
                                <i className="fas fa-user-tie"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                 </div>
                 <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">รูปถ่าย</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <ImgUpload/>
                                <span className="icon is-small is-left">
                                
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>

            </div>
                    <div className="column">
                    <p className="title"><i className="far fa-address-book"></i> ข้อมูลการติดต่อ | Address Information</p>
                    <Divider />
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">ที่อยู่ตามบัตร</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <textarea className="textarea" placeholder="ที่อยู่ตามบัตรประชาชน" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">ที่อยู่ปัจจุบัน</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <textarea className="textarea" placeholder="ที่อยู่ปัจจุบัน" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">โทรศัพท์</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="หมายเลขโทรศัพท์ติดต่อ"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-phone-volume"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">FAX</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="หมายเลขโทรสาร"/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-fax"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">Email</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="ระบุอีเมลล์แอดเดรส"/>
                                <span className="icon is-small is-left">
                                <i className="far fa-envelope"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">Line ID</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Line ID "/>
                                <span className="icon is-small is-left">
                                <i className="fab fa-line"></i>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label"><span className="taginput">หมายเหตุ</span></label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                            <textarea className="textarea" placeholder="หมายเหตุอื่นๆที่ต้องการบันทึกไว้เป็นข้อมูลเพิ่มเติม" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                        <a className="button is-info">
                        Submit
                        </a>
                    </p>
                    <p className="control">
                        <a className="button is-dark">
                        Cancel
                        </a>
                    </p>
                 </div>

                <Footer/>
                











            </div>
         )
    }
}
 
export default Container;