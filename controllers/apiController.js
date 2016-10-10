
function index(req, res) {
  res.json({
    message: "Welcome to my book app!",
    documentation_url: "https://github.com/lynetteduran/angular-books-crud-lab",
    base_url: "http://angular-books-crud-lab.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;