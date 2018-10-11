import {TempScale} from "./types/types";

export default class WeatherUtils {
    static getTemperature(temp: number, scale: TempScale, showScale: boolean = false) : string {
        switch (scale) {
            case TempScale.F:
                return Math.round(temp * 9/5 - 459.67) + (showScale ? " F°" : "");
            case TempScale.C:
                return Math.round(temp - 273.15) + (showScale ? " C°" : "");
            default:
                return temp.toString() + (showScale ? " K" : "");
        }
    }

    static getDayOfWeek(dt: number) : string {
        let weekdays = new Array(7);
        weekdays[0] = "Sun";
        weekdays[1] = "Mon";
        weekdays[2] = "Tue";
        weekdays[3] = "Wed";
        weekdays[4] = "Thu";
        weekdays[5] = "Fri";
        weekdays[6] = "Sat";
        if (0 <= dt && dt <= 6) {
            return weekdays[dt];
        } else {
            return weekdays[new Date(dt).getDay()];
        }
    }
}