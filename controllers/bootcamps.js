// @ description        Get All Bootcamps
// @router              GET /api/v1/bootcamps
// @access              Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show All BootCamps" });
};

// @ description        Get single Bootcamps
// @router              GET /api/v1/bootcamps/:id
// @access              Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Display bootcamp ${req.params.id}` });
};

// @ description        Create new Bootcamp
// @router              POST /api/v1/bootcamps
// @access              Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new BootCamp" });
};

// @ description        Update Bootcamp
// @router              PUT /api/v1/bootcamps/:id
// @access              Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @ description        Delete Bootcamp
// @router              DELETE /api/v1/bootcamps/:id
// @access              Private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
