const verifyToken = require("../middlewares/verifyToken");
const Property = require("../models/Property");
const User = require("../models/User");
const propertyController = require("express").Router();

// get all
propertyController.get("/getAll", async (req, res) => {
  try {
    const properties = await Property.find({}).populate(
      "currentOwner",
      "-password"
    );

    console.log(properties);

    return res.status(200).json(properties);
  } catch (error) {
    console.error(error);
  }
});

// get featured
propertyController.get("/find/featured", async (req, res) => {
  try {
    const featuredProperties = await Property.find({ featured: true }).populate(
      "currentOwner",
      "-password"
    );
    return res.status(200).json(featuredProperties);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// get all from type
propertyController.get("/find", async (req, res) => {
  const type = req.query;
  let properties = [];
  try {
    if (type) {
      properties = await Property.find(type).populate("owner", "-password");
    } else {
      properties = await Property.find({});
    }

    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// GET COUNTS OF TYPE OF PROPERTIES. EX: {BEACH: 34, MOUNTAIN: 23}
propertyController.get("/find/types", async (req, res) => {
  try {
    const beachType = await Property.countDocuments({ type: "beach" });
    const mountainType = await Property.countDocuments({ type: "mountain" });
    const villageType = await Property.countDocuments({ type: "village" });

    return res
      .status(200)
      .json({ beach: beachType, mountain: mountainType, village: villageType });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// get individual properties
propertyController.get("/find/my-properties", verifyToken, async (req, res) => {
  try {
    const properties = await Property.find({ currentOwner: req.user.id });

    return res.status(200).json(properties);
  } catch (error) {
    console.error(error);
  }
});

// fetch bookmarked yachts
propertyController.get(
  "/find/bookmarked-properties",
  verifyToken,
  async (req, res) => {
    try {
      const properties = await Property.find({
        bookmarkedUsers: { $in: [req.user.id] },
      });

      return res.status(200).json(properties);
    } catch (error) {
      console.error(error);
    }
  }
);
