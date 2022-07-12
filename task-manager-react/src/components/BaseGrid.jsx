import React from "react"

const BaseGrid = (props) => {
    return(
        <div class="gridItem">
            {props.items.map((item) => (
                <div class="gridChild">{item}</div>
            ))}
        </div>
    )
}

export default BaseGrid