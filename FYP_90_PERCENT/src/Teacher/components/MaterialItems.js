import React, { Component } from 'react';
import axios from 'axios';
// import urljoin from 'url-join';
import { Button} from 'react-bootstrap';


export default class MaterialItems extends Component {


  constructor(props) {
    super(props);
    this.state = {
      cms: [],
    }
    this.getmaterials();
  }
  getmaterials = () => {
    axios.get('http://localhost:5000/file')
      .then(res => {
        this.setState({
          cms: res.data,
        });
      });

  }
  render() {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    return (
      <div>



        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Materials List </h4>


                    <p class="card-category"> Here is a list of all Materials</p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <tr>


                            <th>
                              Title
            </th>
                            <th>
                              Date
            </th>
                            <th>
                              Action
            </th>
                          </tr>
                        </thead>


                        <tbody>
                          {this.state.cms.map(cm => (
                            <tr>
                              <td>{cm.title} </td>
                              <td>{cm.date}</td>

                              <td>
                              
                                
        {/* <Button onClick={() => openInNewTab(urljoin('http://localhost:5000/file/download',cm.filename))}>
          <i className="fas fa-download" />
          Download File
       </Button> */}

                              </td>


                            </tr>
                          ))}
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




      </div>
    )
  }
}
