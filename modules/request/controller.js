const zod = require("zod");
const { Request } = require("./schema");
const jwt = require("jsonwebtoken");


// Add Request
const addRequest = async (req, res) => {
    // console.log(req.body)
    const requestValidation = zod.object({
        donorName: zod.string().min(1),
        donarEmail: zod.string().email().min(1),
        donarMobile: zod.number().max(9999999999),
        foodCategory: zod.enum(['veg', 'nonVeg', 'both']),
        foodQuantity: zod.number().min(1),
        preparationDateTime: zod.string().min(1),
        note: zod.string().min(1).optional()
    }).safeParse(req.body)


    if (requestValidation.error) {
        return res.json({
            message: requestValidation.error
        })
    }

    await Request.create(requestValidation.data)

    return res.json({
        message: "Request created successfully",
        data: requestValidation.data
    })
}

// Get Request
const getRequest = async (req, res) => {
    const requests = await Request.find({});

    return res.json({
        data: requests
    })
}

// Delete Request

const deleteRequest = async (req, res) => {
    const id = req.params.id
    // console.log(id);

    const record = await Request.findByIdAndDelete({ _id: id });

    // console.log(record)

    if (record) {
        return res.json({
            message: "Request delete successfully!!!"
        }).status(200)
    }

    return res.json({
        message: "Invalid record"
    }).status(400)




}

module.exports = {
    addRequest,
    getRequest,
    deleteRequest
}


