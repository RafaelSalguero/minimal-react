import * as React from "react";
import * as ReactDOM from "react-dom";
import { Carousel } from "./carousel";



export const App = () => (
    <div>
        <Carousel items={[1, 2, 3, 4]} />
    </div>
)
ReactDOM.render(<App />, document.getElementById("root"));