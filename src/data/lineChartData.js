export default class lineChartModel {
    constructor(data) {
        // console.log(data)
        let sessions = []
        data.forEach((session, i) => {
            // console.log(i)
            sessions.push({name: session.day, length: session.sessionLength})
        });
        this.sessions = sessions
    }
}