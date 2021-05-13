const {Order , ProductCart} = require("../models/order");
const product = require("../models/product");
const router = require("../routes/auth");

exports.getOrderById = (req , res , next, id) => {
    Order.findById(id)
    .populate("products.product" , "name price")
    .exec((err , order) => {
        if(err) {
            return res.status(400).json({
                error: "No Order Found In DATA BASE"
            });
        }
        req.order = order;
    });
}

exports.createOrder = (req , res) => {
    req.body.order.user = req.profile;// using re.profile bcz this is dependent on user
    const order = new Order(req.body.order);
    order.save((err , order) => {
        if(err) {
            return res.status(400).json ({
                error: "Failed To Save Your Order"
            });
        }
        res.json(order);
    })
}
exports.getAllOrders = (req ,res) => {
    Order.find()
    .populate("user" , "_id name")
    .exec((err , order) => {
        if(err) {
            return res.status(400).json ({
                error: "No Order Found In Data Base"
            });
        }
        res.json(order);
    });
}

exports.getOrderStatus = (req,res) => {
    res.json(Order.schema.path("status").enumValues);
};

exports.updateStatus = (req ,res) => {
    Order.update(
        {_id: req.body.orderId},
        {$set: {status: req.body.status}},
        (err , order) => {
            if(err) {
                return res.status(400).json({
                    error: "Cannot Update Order Sattus"
                });
            }
            res.json(order);
        }
    )

}