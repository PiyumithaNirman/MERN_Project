import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class create extends Component {

    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeNicNumber = this.onChangeNicNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_nic_number: ''
        }
    }

    onChangePersonName(e){
        this.setState({
            person_name: e.target.value
        });
    }
    
    onChangeBusinessName(e){
        this.setState({
            business_name: e.target.value
        });
    }

    onChangeNicNumber(e){
        this.setState({
            business_nic_number: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.person_name}, ${this.state.business_name},and ${this.state.business_nic_number}`)
        this.setState = ({
            person_name:'',
            business_name:'',
            business_nic_number:''
        })
    }


    render() {
        return(
        <div style= {{marginTop: 10}}>
            <h3>Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Add Person Name :</label>
                    <input type="text" 
                          className="form-control" 
                          value={this.state.person_name}
                          onChange={this.onChangePersonName}
                          />
                </div>
                <div className="form-group">
                    <label>Business Name :</label>
                    <input type="text" 
                           className="form-control"
                           value={this.state.business_name}
                           onChange={this.onChangeBusinessName}
                           />
                </div>
                <div className="form-group">
                    <label>Add Nic Number :</label>
                    <input type="text" 
                          className="form-control"
                          value={this.state.business_nic_number}
                          onChange={this.onChangeNicNumber}
                          />
                </div>
                <div className="form-group">
                    <input type="text" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}