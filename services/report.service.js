const data = require('../data/reports.json');

let reports = data.elements || [];

const { STATE } = require('../app.constant');

const getReports = () => {
    return reports.filter((report) => report.state === STATE.OPEN);
};

const updateTicketState = (reportId, ticketState) => {
    try {
        const reportIndex = reports.findIndex((item) => item.id === reportId);
        reports[reportIndex].state = ticketState;

        return;
    } catch (e) {
        throw e;
    }
};

module.exports = {
    getReports,
    updateTicketState
};