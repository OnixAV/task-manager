import React from "react";
import BaseGrid from './BaseGrid';


const Grid = (props) => {
    return (
        <div>
            <BaseGrid items={['ok', 'ok2']}/>
            <BaseGrid items={['ok', 'ok2']}/>
            <BaseGrid items={['ok', 'ok2']}/>

        </div>
    )
}

export default Grid