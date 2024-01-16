import ErrorMessage from "../errorMessage/ErrorMessage";
import { Component } from "react";

class ErrorBoudary extends Component{
    state = {
        error: false
    }

    componentDidCatch(error,errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error:true
        })
    }

    render() {
        if (this.state.error){
            return <ErrorMessage></ErrorMessage>
        }
        return this.props.children;
 
    }
}


export default ErrorBoudary;