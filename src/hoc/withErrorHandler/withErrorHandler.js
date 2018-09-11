import React, { Component } from 'react';

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({error: null});
        return request;
      })

      this.resInterceptor = axios.interceptors.response.use(response => response, error => {
        this.setState({error: error});
      })
    }

    componentWillUnmount() {
      console.log('Unmount:', this.reqInterceptor, this.resInterceptor)
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.request.eject(this.resInterceptor)
    }
    
    errorConfirmerHandler = () => {
      this.setState({error: null});
    }

    render () {
      return(
        <Aux>
          <Modal
            modalClosed={this.errorConfirmerHandler}
            show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  } 
}

export default withErrorHandler;