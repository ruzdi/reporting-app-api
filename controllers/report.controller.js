const StatusCodes = require('http-status-codes');

const ReportService = require('../services/report.service');

const { STATE } = require('../app.constant');

const getAll = (req, res) => {
    res.status(StatusCodes.OK).json(ReportService.getReports());
};

const updateTicketState = (req, res) => {
    try {
        const { reportId } = req.params;
        const { ticketState } = req.body;

        if (!reportId || !Object.values(STATE).includes(ticketState)) {
            throw { statusCode: StatusCodes.BAD_REQUEST };
        }

        ReportService.updateTicketState(reportId, ticketState);

        res.status(StatusCodes.OK).json({ message: 'Successfully blocked' });
    } catch (e) {
        res.status(e.statusCode || 500).end();
    }
};

module.exports = {
    getAll,
    updateTicketState
};