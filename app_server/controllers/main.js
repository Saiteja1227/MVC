const index = (req, res) => {
  res.render('index', { title: 'Express MVC-Model View Controller App' });
};

module.exports = {
  index
};
