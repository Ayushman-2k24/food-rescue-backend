const { Admin } = require("./schema");
const env = require("dotenv").config().parsed
const zod = require("zod");
const jwt = require("jsonwebtoken");


// Sign Up
const adminSignUp = async (req, res) => {


    const adminValidation = zod.string().email().safeParse(req.body.email);
    const password = zod.string().safeParse(req.body.password);

    if (adminValidation.error || password.error) {
        return res.json({
            message: "Email is not valid or you haven't entered a password"
        })
    }

    const isExist = await Admin.findOne({ email: adminValidation.data })

    if (isExist) {
        res.json({
            message: "This email is already used use different one"
        }).status(404);
    }

    await Admin.create({
        email: adminValidation.data,
        password: password.data,
    })


    res.json({
        message: "Admin created successfully"
    }).status(201);


}

// Log in
const adminLogin = async (req, res) => {


    const adminValidation = zod.string().email().safeParse(req.body.email);
    const password = zod.string().safeParse(req.body.password);

    if (adminValidation.error || password.error) {
        return res.json({
            message: "Email is not valid or you haven't entered a password"
        })
    }

    const isExist = await Admin.findOne({ email: adminValidation.data, password: password.data })

    if (isExist) {

        const token = jwt.sign({
            id: isExist._id,
            email: isExist.email
        }, env.JWT_SECRET)

        return res.json({
            message: "Login successfully",
            token: token
        }).status(201);
    }




    return res.json({
        message: "Invalid email or password"
    }).status(201);


}

// get me
const getMe = async (req, res) => {
    // console.log(req.id, req.email)
    const token = jwt.sign({
        id: req._id,
        email: req.email
    }, env.JWT_SECRET)


    await Admin.findById({
        _id: req.id
    }).then((response) => {
        return res.status(201).json({
            data: response,
            token
        })
    }).catch(err => (res.json({
        message: err.message
    })))

    // return res.json({
    //     message: "Get me successfully",
    // })
}


module.exports = {
    adminSignUp,
    adminLogin,
    getMe
}