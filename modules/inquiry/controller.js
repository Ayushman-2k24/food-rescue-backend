const { Inquiry } = require('./schema');
const zod = require("zod");

const addInquiry = async (req, res) => {

    const inquiryValidation = zod.object({
        name: zod.string().min(1),
        email: zod.string().email().min(1),
        mobile: zod.number().max(9999999999),
        message: zod.string().min(1)
    }).safeParse(req.body);

    if (inquiryValidation.error) {
        return res.json({
            message: inquiryValidation.error
        })
    }

    await Inquiry.create(inquiryValidation.data);

    return res.json({
        message: "Inquiry created successfully",
        data: inquiryValidation.data
    });
}

const getInquiry = async (req, res) => {
    await Inquiry.find({}).then((data) => {
        return res.json({
            data: data
        })
    }).catch((err) => {
        return res.json({
            message: err
        })
    })
}

const deleteInquiry = async (req, res) => {
    const id = req.params.id
    await Inquiry.findByIdAndDelete({ _id: id }).then((data) => {
        return res.json({
            message: "Inquiry delete successfully"
        })
    }).catch((err) => {
        return res.json({
            message: "Invalid record"
        }).status(400)
    })
}

module.exports = {
    addInquiry,
    getInquiry,
    deleteInquiry,
}