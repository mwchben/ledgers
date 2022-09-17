exports.get_dash = async (req, res) => {
    res.render('voter', { title: 'Voter Interface' })
}
exports.get_home = async (req, res) => {
    res.cookie('voterLoginJWT', '', { maxAge: 1 })
    res.redirect('/')
} 