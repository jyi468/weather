import * as React from "react";
import {Chart} from 'chart.js';
import {ChartType, Day, Forecast, TempScale, WeatherState, Wind} from "../../types/types";
import WeatherUtils from "../../WeatherUtils";
import {WeatherWind} from "../weatherWind/WeatherWind";
import {HOUR_LABELS} from "../../constants/constants";

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
        let winds: Wind[] = [];

        if (days) {
            switch (chartType) {
                case ChartType.Temperature:
                    let tempCtx = document.getElementById("tempChart") as HTMLCanvasElement || {};
                    let tPoints: any[] = days[dayIndex].hours.map((forecast: Forecast) => {
                        return WeatherUtils.getTemperature(forecast.temperature, scale);
                    });
                    const tChart = new Chart(tempCtx, {
                        type: 'line',
                        data: {
                            labels: HOUR_LABELS,
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
                            labels: HOUR_LABELS,
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
                     winds = days[dayIndex].hours.map((forecast: Forecast) => (forecast.wind));
            }
        }

        return (
            <div>
                {chartType !== ChartType.Wind &&
                <div className="card p-3">
                    <div className="card-img-top">
                        {(chartType === undefined ||
                            chartType === ChartType.Temperature) &&
                        <canvas id="tempChart" width="400" height="75"></canvas>}
                        {(chartType === undefined ||
                            chartType === ChartType.Precipitation) &&
                        <canvas id="precipChart" width="400" height="75"></canvas>}
                    </div>
                </div>}
                {(chartType === undefined || chartType === ChartType.Wind) &&
                <ul className="list-inline">
                    {winds.map((wind, idx) => (
                            <WeatherWind
                                wind={wind}
                                index={idx}
                            />
                    ))}
                </ul>
                /*<div className="row">
                    {winds.map((wind, idx) => (
                        <div className="col-sm-2">
                            <WeatherWind
                                wind={wind}
                                index={idx}
                            />
                        </div>
                    ))}
                </div>*/}
            </div>
        );
    }
}