import React from 'react';
import { Button } from '@material-ui/core';
import Loading from '../../src';

const Demo=()=>{
    return (
        <div>

            <Button variant="contained">Default</Button>

            <Loading />
            
        </div>
    )
}

export default Demo;