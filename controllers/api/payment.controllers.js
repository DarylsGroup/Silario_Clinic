const { findPaymentById, updatePayment, deletePaymentById, deleteAllPayments, findAllPayments, createPayment } = require("../../services/payment.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user

    const patient = {
        invoiceNumber: req.body.invoiceNumber,
        paymentDate: req.body.paymentDate,
        paymenMode: req.body.paymenMode,
        amountReceived: req.body.amountReceived,
        invoiceBlanceDue: req.body.invoiceBlanceDue,
        patient: req.body.patient
    }

    createPayment(patient, res)
};

exports.findAll = (req, res) => {

    findAllPayments(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findPaymentById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updatePayment(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deletePaymentById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllPayments(req, res)
};