import * as React from "react";
import { Chart } from 'chart.js';
import {TempScale, WeatherState} from "../../types/types";

export interface ChartProps {
    points: any[]
    scale: TempScale;
    dayIndex: number;
    changeHour: (hourIndex: number) => {};
}

export interface ChartElement {
    _index: number;
}

export class WeatherChart extends React.Component<ChartProps, WeatherState> {
    constructor(props: ChartProps) {
        super(props);
    }

    // Do not update component if same day
    shouldComponentUpdate(nextProps: ChartProps) {
        if (nextProps) {
            return nextProps.dayIndex !== this.props.dayIndex;
        }

        return true;
    }

    render() {
        let { points, scale, changeHour } = this.props;
        let ctx = document.getElementById("myChart") as HTMLCanvasElement;

        // Fix: do not re render when point is clicked
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
                    plugins: {
                        datalabels: {
                            backgroundColor: function(context: any) {
                                return context.dataset.backgroundColor;
                            },
                            borderRadius: 4,
                            color: 'white',
                            font: {
                                weight: 'bold'
                            },
                            formatter: Math.round
                        }
                    },
                    onClick: (e: MouseEvent) => {
                        const point: ChartElement = myChart.getElementAtEvent(e)[0];
                        if (point) {
                            const hourIndex = point._index;
                            //if (hourIndex !== currentHour) {
                            changeHour(hourIndex);
                            //}
                        }
                    },
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
        }

        return (
            <div className="card p-3">
                <div className="card-img-top">
                    <canvas id="myChart" width="400" height="75"></canvas>
                </div>
            </div>

        );
    }
}