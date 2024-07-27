export default class radarChartModel {
    constructor(data) {
        console.log(data)
        let perfData = []
        data.forEach((perf) => {
            console.log(perf.kind)
            perfData.push({name: perf.kind, value: perf.value})
        });
        this.sessions = perfData
    }
}