import * as React from "react";
import style from "./style.module.css";
import classnames from "classnames";

interface Props {
    items: React.ReactNode[];
}
export const Carousel = (props: Props) => {
    const [index, setIndex] = React.useState(0);

    return (
        <div className={style.container}>
            <div className={style.items} style={{
                transform: `translate(calc(100% * ${-index}), 0)`
            }}>
                {props.items.map(x =>
                    <div className={style.item}>
                        {x}
                    </div>
                )}
            </div>
            <div className={style.dots}>
                {
                    props.items.map((x,i) => 
                        <div 
                            className={classnames(style.dot, i == index && style.active)}
                            onClick={() => setIndex(i)}
                            />
                        )
                }
            </div>
        </div>
    )
}