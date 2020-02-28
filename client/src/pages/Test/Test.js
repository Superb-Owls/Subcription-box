import React, { Component } from "react";
import LoginForm from '../../components/LoginForm'
import SignUpForm from "../../components/SignUpForm"
import Button from "../../components/Button"
import PaymentForm from "../../components/PaymentForm";
import { marvelHeroes } from "../../utils/marvelRd2";

class Test extends Component {
    state = {
        data: new Array(6, null),
    }

    componentDidMount() {
        console.log(marvelHeroes)
        this.loadAll()

    }

    loadAll = () => {
        // var spiderMan = 1009610
        // var hulk = 1016823
        // var captainAmerica = 1009220
        var thor = 1009664
        // var wolverine = 1009718
        // var ironman = 1009368

        // this is cap?
        marvelHeroes(thor).then((res) => {
            console.log(res);
            let currData = this.state.data;
            currData[3] = res;
            this.setState({
                data: currData
            })

        })
    }

    render() {
        return (
            <>
                <LoginForm />
                <Button />
                <SignUpForm />
                <PaymentForm />
            </>
        )
    }
}
export default Test;
