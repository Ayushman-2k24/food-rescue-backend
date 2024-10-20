const { Admin } = require("./schema");
const zod = require("zod");

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


module.exports = {
    adminSignUp
}