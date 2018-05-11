import React, { Component } from 'react';
import { Modal, Button } from 'antd';

    class ModalLogin extends Component {
      state = { visible: false }
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      render() {
        return (
          <div>

          <a className="button is-success" onClick={this.showModal}>
              <span className="icon"><i className="far fa-user-circle"></i></span>
              <span>Admin</span>
          </a>
            <Modal
              title="เข้าสู่ระบบ"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input className="input" type="text" placeholder="Username"/>
    <span className="icon is-small is-left">
      <i className="far fa-user-circle"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input className="input" type="password" placeholder="Password"/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control">
    <button className="button is-success">
      Login
    </button>
  </p>
</div>
            </Modal>
          </div>
        );
      }
    }
export default ModalLogin;