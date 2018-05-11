import React, { Component } from 'react'

class BtSave extends Component {

    render() { 
        return ( 
            <div>
             <a className="button is-success">
                <span className="icon is-small">
                 <i className="fas fa-check"></i>
                </span>
                <span>บันทึก</span>
             </a>   
            </div>
         )
    }
}
 
export default BtSave;