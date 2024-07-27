export default class pieChartModel {
    constructor(data) {
        // console.log(data)
        let sessions = []
        data.forEach((session, i) => {
            // console.log(i)
            sessions.push({name: i+1, poids: session.kilogram, calories: session.calories})
        });
        this.sessions = sessions
    }
}
