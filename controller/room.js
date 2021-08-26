const {v4: uuidv4} = require("uuid");

const redirectId = (req,res,next) => {
    res.redirect(`/${uuidv4()}`);
}


const getRoom = (req,res,next) => {
    res.render("../views/room.ejs",{roomId: req.params.room});
}



module.exports = {
    redirectId,
    getRoom,
}