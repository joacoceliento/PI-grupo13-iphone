
let profileController = {

    profile: function (req, res) {
        res.render('profile')
    },

    register: function (req, res) {
        res.render('register')
    },

    login: function (req, res) {
        res.render('login')
    }

};

module.exports = profileController;