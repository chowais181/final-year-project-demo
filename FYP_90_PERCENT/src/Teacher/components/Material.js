import React, { Component } from 'react'
import { ThemeProvider } from 'react-bootstrap';
import MaterialItems from './MaterialItems';
import ModalofAddMaterial from './ModalofAddMaterial';
export default class Material extends Component {
    
    constructor(props){
        super(props);
          this.state={
              modalShow:false
          }
    }

    render() {
        return (
            <div>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12">


                                <div class="file">
                                   
                                <button class="btn btn-primary btn-round" onClick={()=>{this.setState({modalShow:true})}}>
                                                        <i class="material-icons">add</i> Add Material
                                                    </button>
                                                    <ModalofAddMaterial
                                                       show={this.state.modalShow}
                                                        onHide={() => {this.setState({modalShow:true})}}
                                                        /> 
                                </div>



                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12">
                                <MaterialItems />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
