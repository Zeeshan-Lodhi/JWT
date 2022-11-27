const postNote = (req, res) => {
    res.send("Note posted ");
    console.log(req.user);
};

module.exports = { postNote };
