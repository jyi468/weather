import * as React from "react";
import { Chart } from 'chart.js';
import {TempScale} from "../../types/types";

export interface ChartProps {
    points: any[]
    scale: TempScale;
}

export const WeatherChart: React.SFC<ChartProps> = (props) => {
    let { points, scale } = props;
    let ctx = document.getElementById("myChart") as HTMLCanvasElement;

    if (ctx) {
        //let progress = document.getElementById('animationProgress');
        const myChart: Chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2 AM', '5 AM', '8 AM', '11 AM', '2 PM', '5 PM', '8 PM', '11 PM'],
                datasets: [{
                    label: 'Temperature',
                    data: points,
                    borderColor: '#FFCB34',
                    borderWidth: 2,
                    backgroundColor: '#FFF5D6'
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                },
                tooltips: {
                    callbacks: {
                        label: (item) => `${item.yLabel} ${scale}`
                    }
                }
            }
        });

        console.log(myChart.ctx);
    }

    return (
        <div className="card p-3">
            <div className="card-img-top">
                <canvas id="myChart" width="400" height="75"></canvas>
            </div>
        </div>

    );
};