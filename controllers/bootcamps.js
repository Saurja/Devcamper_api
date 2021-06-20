const Bootcamp = require("../models/Bootcamp");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @ description        Get All Bootcamps
// @router              GET /api/v1/bootcamps
// @access              Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @ description        Get single Bootcamps
// @router              GET /api/v1/bootcamps/:id
// @access              Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findById(req.params.id);
  if (!bootcamps) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamps });
});

// @ description        Create new Bootcamp
// @router              POST /api/v1/bootcamps
// @access              Private
exports.createBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ successs: true, data: bootcamp });
});

// @ description        Update Bootcamp
// @router              PUT /api/v1/bootcamps/:id
// @access              Private
exports.updateBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ successs: true, data: bootcamp });
});

// @ description        Delete Bootcamp
// @router              DELETE /api/v1/bootcamps/:id
// @access              Private
exports.deleteBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ successs: true, data: {} });
});
