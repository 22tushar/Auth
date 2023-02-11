const { User } = require("../models/user");
const { auth, isUser, isAdmin } = require("../middleware/auth");
const router = require("express").Router();

//CREATE

router.get("/allTPO", async (req, res) => {
  try {
        const allTPO = await user.find({T:true});
        res.status(200).send(allTPO)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/allCampany", async (req, res) => {
  
    try {
          const allCampany = await user.find({C:true});
          res.status(200).send(allCampany)
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

  router.post("/ReqAccept/:id", async (req, res) => {
  
    try {
        await user.findByIdAndUpdate( req.params.id,
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
