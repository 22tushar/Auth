const { User } = require("../models/user");
const { auth, isUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

//CREATE

router.get("/allTPO", async (req, res) => {
  try {
        const allTPO = await User.find({T:true});
        res.status(200).send(allTPO)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/allCampany", async (req, res) => {
  
    try {
          const allCampany = await User.find({C:true});
          res.status(200).send(allCampany)
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  router.get("/requestAccept", async (req, res) => {
  
    try {
          const allrequestAccepted = await User.find({
            reqAccept
            :true});
          res.status(200).send(allrequestAccepted)
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });

  router.post("/ReqSent", async (req, res) => {
  
    const { email } = req.body;
    try {
        await User.findOneAndUpdate({email},
            {
              reqSent:true
            },
            { new: true });
        res.status(200).send(" has been deleted...");
      } catch (error) {
        res.status(500).send(error);
      }
  });

  router.get("/HRequest", async (req, res) => {
  
    try {
        const Hreq= await User.find({reqSent:true});
        res.status(200).send(Hreq)
        console.log(Hreq)
      } catch (error) {
        res.status(500).send(error);
      }
  });

  router.post("/ReqAccept", async (req, res) => {
    const {email} =req.body
  
    try {
        await User.findOneAndUpdate( {email:email},
            {
              reqAccept:true
            },
            { new: true });
        res.status(200).send("Product has been deleted...");
      } catch (error) {
        res.status(500).send(error);
      }
  });

//DELETE
module.exports=router
