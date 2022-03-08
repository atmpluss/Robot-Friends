import React from "react";

class ErrorBoundry extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false}

    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return(<h1>this is not good!</h1>)
        }else{
            return this.props.children;
        }
    }
}


export default ErrorBoundry;