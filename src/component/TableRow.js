import React, { Component } from "react";
import tableRow from './TableRow';

 class TableRow extends Component {

    render() {
        return(
         <tr>
             <td>
                 {this.props.obj.person_name}
             </td>
             <td>
                 {this.props.obj.business_name}
             </td>
             <td>
                 {this.props.obj.business_nic_number}
             </td>
             <td>
                 <button className="btn btn-primary">Edit</button>
             </td>
             <td>
                 <button className="btn btn-primary">Delete</button>
             </td>
         </tr>
        );
    }
}

export default tableRow;