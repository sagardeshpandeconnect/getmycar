// middleware/paginationMiddleware.js
const paginate = (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  req.pagination = {
    startIndex,
    endIndex,
    limit,
    page,
  };

  next();
};

module.exports = paginate;
