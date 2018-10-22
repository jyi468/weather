import * as React from "react";
import {Chart} from 'chart.js';
import {ChartType, Day, Forecast, TempScale, WeatherState, Wind} from "../../types/types";
import WeatherUtils from "../../WeatherUtils";
import {HOUR_LABELS} from "../../constants/constants";
import WeatherWindContainer from "../../containers/WeatherWindContainer";

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
    chart: Chart;
    constructor(props: ChartProps) {
        super(props);
    }

    render() {
        let {days, dayIndex, scale, changeHour, chartType} = this.props;
        let winds: Wind[] = [];

        if (days) {
            switch (chartType) {
                case ChartType.Temperature:
                    let tempCtx = document.getElementById("chart") as HTMLCanvasElement || {};
                    let tPoints: any[] = days[dayIndex].hours.map((forecast: Forecast) => {
                        return WeatherUtils.getTemperature(forecast.temperature, scale);
                    });
                    if (this.chart) {
                        this.chart.destroy();
                    }
                    this.chart = new Chart(tempCtx, {
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
                                const point: ChartElement = this.chart.getElementAtEvent(e)[0];
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
                    let precipCtx = document.getElementById("chart") as HTMLCanvasElement || {};
                    let pPoints: any[] = days[dayIndex].hours.map((forecast: any) => {
                        return (forecast.precipitation * 0.0393701).toFixed(2);
                    });
                    if (this.chart) {
                        this.chart.destroy();
                    }
                    this.chart = new Chart(precipCtx, {
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
                                const point: ChartElement = this.chart.getElementAtEvent(e)[0];
                                if (point) {
                                    const hourIndex = point._index;
                                    changeHour(hourIndex);
                                }
                                // Cast to get past type checking for getElementsAtXAxis
                                let c = this.chart as any;
                                const xlabel: ChartElement = c.getElementsAtXAxis(e)[0];
                                if (xlabel) {
                                    const  hourIndex = xlabel._index;
                                    changeHour(hourIndex)
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
                <div className="card p-3" style={{display: chartType === ChartType.Wind ? 'none' : 'block'}}>
                    <div className="card-img-top">
                        <canvas id="chart" width="400" height="75"></canvas>
                    </div>
                </div>
                <ul className="list-inline d-flex justify-content-between" style={{display: chartType === ChartType.Wind ? 'block' : 'none'}}>
                    {winds.map((wind, idx) => (
                            <WeatherWindContainer
                                wind={wind}
                                index={idx}
                            />
                    ))}
                </ul>
            </div>
        );
    }
}