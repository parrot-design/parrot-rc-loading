import React from 'react';
import { Button } from '@material-ui/core';
import Loading from '../../src';
import "./index.css";

const Demo=()=>{
    return (
        <div>

            <Button variant="contained">Default</Button>

            <Loading description={"Loading..."} descriptionWrapperClass="wrapper-class">
                <div style={{width:300,height:300,backgroundColor:'skyblue'}}></div>
            </Loading>
            
        </div>
    )
}

export default Demo;