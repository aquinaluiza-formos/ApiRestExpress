const datajson = require('../../jsondata/data.json')


function getAllOrders(req, res) {
    res.json(datajson);
}

function addOrder(req,res){
    const data = req.query;
    datajson.push({data});

    res.status(200).end();
}

module.exports.getAllOrders = getAllOrders;
module.exports.addOrder = addOrder;