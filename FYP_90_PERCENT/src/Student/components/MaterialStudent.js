import React, { Component } from 'react'
import MaterialItems from '../../Teacher/components/MaterialItems';
export default class MaterialStudent extends Component {
    
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
                                <MaterialItems />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
