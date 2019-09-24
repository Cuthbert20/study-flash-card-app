const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req,res) => {
        try {
            const db = req.app.get('db');
            const {
                username,
                user_img,
                hash,
                user_email
            } = req.body 
            // console.log(req.body)
            const user = await db.find_email([user_email]);
            if(user.length > 0){
                return res.status(400).send({message: "Email in Use"})
            }
            const salt = bcrypt.genSaltSync(10);
            const password = bcrypt.hashSync(hash, salt);
            const newUser = await db.create_user_profile({
                username, user_img, password, user_email
            });
            req.session.user = newUser[0]
            // console.log(req.session.user)
            delete newUser[0].password;
            res.status(200).send({message: "logged in", user: req.session.user, loggedIn: true});
        } catch(err) {
            res.status(500).send({message: "Failed to Register"})
        }
    }
}