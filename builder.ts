type IAirlineTripFareClass = 'economy' | 'premium_economy' | 'first';

interface IAirlineTripOptions {
    fromDate?: Date;
    toDate?: Date;
    from: string;
    to: string;
    class: IAirlineTripFareClass;
}

class AirlineTrip {
    private airlineOptions: IAirlineTripOptions;

    constructor(options: IAirlineTripOptions) {
       this.airlineOptions = options;
    }

    changeFromDate(newDate: IAirlineTripOptions['fromDate']) {
        this.airlineOptions.fromDate = newDate;
        return this;
    }

    changeToDate(newDate: IAirlineTripOptions['toDate']) {
        this.airlineOptions.toDate = newDate;
        return this;
    }

    changeTo(newTo: IAirlineTripOptions['to']) {
        this.airlineOptions.to = newTo;
        return this;
    }

    changeFrom(newFrom: IAirlineTripOptions['from']) {
        this.airlineOptions.from = newFrom;
        return this;
    }

    changeClass(newClass: IAirlineTripOptions['class']) {
        this.airlineOptions.class = newClass;
        return this;
    }
}

const summerTrip = new AirlineTrip({ 
    from: 'LAX', 
    to: 'MIA', 
    class: 'economy'
})

summerTrip.
    changeClass('premium_economy').
    changeFrom('SFO').
    changeTo('HOU').
    changeClass('first').changeFromDate(new Date()).changeToDate(new Date())

console.log({ summerTrip })