const notFound = (req, res) => res.status(404).json("La route n'existe pas");

module.exports = notFound;
