import * as React from "react";
import {Chart} from 'chart.js';
import {ChartType, Day, TempScale, WeatherState} from "../../types/types";
import WeatherUtils from "../../WeatherUtils";

export interface ChartProps {
    days: Day[];
    scale: TempScale;
    dayIndex: number;
    chartType: ChartType;
    changeHour: (hourIndex: number) => {};
}

export interface ChartElement {
    _index: number;
}

export class WeatherChart extends React.Component<ChartProps, WeatherState> {
    constructor(props: ChartProps) {
        super(props);
    }

    render() {
        let {days, dayIndex, scale, changeHour, chartType} = this.props;

        if (days) {
            switch (chartType) {
                case ChartType.Temperature:
                    let tempCtx = document.getElementById("tempChart") as HTMLCanvasElement || {};
                    let tPoints: any[] = days[dayIndex].hours.map((forecast: any) => {
                        return WeatherUtils.getTemperature(forecast.temperature, scale);
                    });
                    const tChart = new Chart(tempCtx, {
                        type: 'line',
                        data: {
                            labels: ['2 AM', '5 AM', '8 AM', '11 AM', '2 PM', '5 PM', '8 PM', '11 PM'],
                            datasets: [{
                                label: 'Temperature',
                                data: tPoints,
                                borderColor: '#FFCB34',
                                borderWidth: 2,
                                backgroundColor: '#FFF5D6'
                            }]
                        },
                        options: {
                            plugins: {
                                datalabels: {
                                    backgroundColor: function (context: any) {
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
                                const point: ChartElement = tChart.getElementAtEvent(e)[0];
                                if (point) {
                                    const hourIndex = point._index;
                                    changeHour(hourIndex);
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
                    break;
                case ChartType.Precipitation:
                    let precipCtx = document.getElementById("precipChart") as HTMLCanvasElement || {};
                    let pPoints: any[] = days[dayIndex].hours.map((forecast: any) => {
                        return (forecast.precipitation * 0.0393701).toFixed(2);
                    });
                    const pChart: Chart = new Chart(precipCtx, {
                        type: 'bar',
                        data: {
                            labels: ['2 AM', '5 AM', '8 AM', '11 AM', '2 PM', '5 PM', '8 PM', '11 PM'],
                            datasets: [{
                                label: 'Precipitation',
                                data: pPoints,
                                borderColor: '#FFCB34',
                                borderWidth: 2,
                                backgroundColor: '#FFF5D6'
                            }]
                        },
                        options: {
                            plugins: {
                                datalabels: {
                                    backgroundColor: function (context: any) {
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
                                const point: ChartElement = pChart.getElementAtEvent(e)[0];
                                if (point) {
                                    const hourIndex = point._index;
                                    changeHour(hourIndex);
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
                                    label: (item) => `${item.yLabel} in.`
                                }
                            }
                        }
                    });
                    break;
                case ChartType.Wind:

            }
        }

        return (
            <div className="card p-3">
                <div className="card-img-top">
                    {(chartType === undefined ||
                        chartType === ChartType.Temperature) &&
                    <canvas id="tempChart" width="400" height="75"></canvas>}
                    {(chartType === undefined || chartType === ChartType.Precipitation) &&
                    <canvas id="precipChart" width="400" height="75"></canvas>}
                </div>
            </div>

        );
    }
}