import React, { Component } from "react";
import LoginForm from '../../components/LoginForm'
import SignUpForm from "../../components/SignUpForm"
import Button from "../../components/Button"
import PaymentForm from "../../components/PaymentForm"
import API from "../../utils/marvelAPI"

class Test extends Component{

    componentDidMount(){
        this.loadAll()
    }

    loadAll = () => {
        API.getHeroes().then((res) =>{
            console.log(res);
            
        })
    }
    
    render(){
    return (
        <>
        <LoginForm/>
        <Button/>
        <SignUpForm/>
        <PaymentForm/>
        </>
    )
    }
}
export default Test;
