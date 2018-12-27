import React, { Component } from 'react';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';


export default class Home extends Component {
    render() {
        return (

            <div className="main">

                <div className="board-row">
                    <Input />
                </div>
                <div className="board-row">
                    <CustomButton text="7" />
                    <CustomButton text="8" />
                    <CustomButton text="9" />
                    <CustomButton text="/" />
                </div>

                <div className="board-row">
                    <CustomButton text="4" />
                    <CustomButton text="5" />
                    <CustomButton text="6" />
                    <CustomButton text="X" />
                </div>


                <div className="board-row">
                    <CustomButton text="1" />
                    <CustomButton text="2" />
                    <CustomButton text="3" />
                    <CustomButton text="+" />
                </div>

                <div className="board-row" >
                    <CustomButton text="AC" />
                    <CustomButton text="0" />
                    <CustomButton text="." />
                    <CustomButton text="=" />
                </div>


            </div>
        )
    }
}

