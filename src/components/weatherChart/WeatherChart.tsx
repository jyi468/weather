import * as React from "react";

export const WeatherChart: React.SFC = (props) => {
    return (
        <svg viewBox="0 0 500 100" className="chart">
            <polyline
                fill="none"
                stroke="#0074d9"
                stroke-width="3"
                points="
       0,120
       20,60
       40,80
       60,20"/>
        </svg>
    );
};