import rozorpay from "../config/rozorpay.js";

const createOrder =  async (req,res)=>{
  try {
    console.log("Amount:", req.body.amount);

    const options = {
      amount: Math.round(req.body.amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    console.log(options);

    const order = await rozorpay.orders.create(options);

    console.log(order);

    res.status(200).json(order);
  } catch (error) {
    console.log("RAZORPAY ERROR");
    console.log(error);
    console.log(error.error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default createOrder;