const { DeliveryPerson } = require('./schema');
const zod = require("zod");

// Add Delivery Person
const addDeliveryPerson = async (req, res) => {
    const deliveryPersonValidation = zod.object({
        name: zod.string().min(1),
        email: zod.string().email().min(1),
        mobile: zod.number().max(9999999999),
        startTime: zod.string().min(1),
        endTime: zod.string().min(1),
    }).safeParse(req.body);


    if (deliveryPersonValidation.error) {
        return res.json({
            message: deliveryPersonValidation.error
        })
    }

    await DeliveryPerson.create(deliveryPersonValidation.data);

    return res.json({
        message: "Delivery Person created successfully",
        data: deliveryPersonValidation.data
    }).status(201);


};

// Get All Delivery Person
const getDeliveryPerson = async (req, res) => {
    await DeliveryPerson.find({}).then((data) => {
        return res.json({
            data: data
        })
    }).catch((err) => {
        return res.json({
            message: err
        })
    })
};

// Update Delivery person
const updateDeliveryPerson = async (req, res) => {
    const id = req.params.id
    const deliveryPersonValidation = zod.object({
        name: zod.string().min(1),
        email: zod.string().email().min(1),
        mobile: zod.number().max(9999999999),
        startTime: zod.string().min(1),
        endTime: zod.string().min(1),
    }).safeParse(req.body);


    if (deliveryPersonValidation.error) {
        return res.json({
            message: deliveryPersonValidation.error
        })
    }


    await DeliveryPerson.findByIdAndUpdate({ _id: id }, deliveryPersonValidation.data).then((data) => {
        return res.json({
            message: "Record updated successfully",
            data: deliveryPersonValidation.data
        })
    }).catch((err) => {
        return res.json({
            message: "Invalid record"
        }).status(400)
    })
};

// Delete Delivery Person
const deleteDeliveryPerson = async (req, res) => {
    const id = req.params.id
    await DeliveryPerson.findByIdAndDelete({ _id: id }).then((data) => {
        return res.json({
            message: "Record delete successfully"
        })
    }).catch((err) => {
        return res.json({
            message: "Invalid record"
        }).status(400)
    })
};


module.exports = {
    addDeliveryPerson,
    getDeliveryPerson,
    updateDeliveryPerson,
    deleteDeliveryPerson
}