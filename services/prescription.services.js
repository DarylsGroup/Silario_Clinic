
const Prescription = require("../models/prescription.models");
const MedicamentPrescription = require("../models/prescription.medicament.models");
exports.findAllPrescriptions = (res) => {

    Prescription.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.findAllMedicamentPrescriptions = (id, res) => {

    MedicamentPrescription.findAll({
        where: { prescription: id }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createPrescription = (p, res) => {
    Prescription.create(p)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Prescription."
            });
        });
}

exports.createMedicamentPrescription = (p, res) => {
    MedicamentPrescription.create(p)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Prescription."
            });
        });
}

exports.findPrescriptionById = (id, res) => {
    Prescription.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Prescription with id=" + id
            });
        });
}








exports.deletePrescriptionMedicamentById = (id, res) => {
    MedicamentPrescription.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Prescription was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Prescription with id=${id}. Maybe Prescription was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Prescription with id=" + id
            });
        });
}

exports.deletePrescriptionById = (id, res) => {
    Prescription.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Prescription was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Prescription with id=${id}. Maybe Prescription was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Prescription with id=" + id
            });
        });
}

exports.updatePrescription = (id, req) => {
    Prescription.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Prescription was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Prescription with id=${id}. Maybe Prescription was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Prescription with id=" + id
            });
        });
}

exports.deleteAllPrescriptions = () => {
    Prescription.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Prescription were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.createMedicamentItem = (income) => {
    Invoice.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Invoice."
            });
        });
}