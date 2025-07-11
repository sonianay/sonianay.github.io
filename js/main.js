const trolls = [
  "nah",
  "but thats boooring",
  "nah im good",
  "but i'm tiiired",
  "nope",
  "are you serious?",
  "what for?",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

// function troll() {
//   // this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
// }

var term = {
  top: function () {
    var intro =
      "C:\\Users\\Guest>type about.txt \n" +
      " \n" +
      "Thanks to Jakub T. Jankiewicz for the base library. \n" +
      "https://terminal.jcubic.pl/#download for the download. \n" +
      "https://github.com/sponsors/jcubic for donations to Jankiewicz.\n\n" +
      "COMMANDS : \n" +
      "    - &#39;help&#39; \n" +
      "    - &#39;dir&#39; \n" +
      "    - &#39;type about.txt&#39; \n" +
      "    - &#39;type experience.txt&#39; \n";

    return intro;
  },
  // ngl got no clue how to match keys to same val
  test: function() {this.echo("trollls")},
  ls: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  echo: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  sudo: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  tree: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  cat: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  del: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  mkdir: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  delete: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  node: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  git: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  cd: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  help: function () {
    fetch("../assets/help.txt")
      .then((response) => response.text())
      .then((text) => this.echo(text));
  },
  dir: function () {
    fetch("../assets/ls.txt")
      .then((response) => response.text())
      .then((text) => this.echo(text));
  },
  type: function (file) {
    if (file == "about.txt") {
      fetch("../assets/about.txt")
        .then((response) => response.text())
        .then((text) => this.echo(text))
        .catch((error) => {
          console.error("err", error);
        });
    } else if (file == "experience.txt") {
      fetch("../assets/experience.txt")
        .then((response) => response.text())
        .then((text) => this.echo(text));
    } else {
      this.echo("The system cannot find the file specified. \n");
    }
  },
  start: function (link) {
    window.open(link);
  },
};

jQuery(document).ready(function ($) {
  $(".test").terminal(term, {
    greetings: function (cb) {
      cb(term.top());
    },
    completion: true,
    checkArity: false,
    prompt: "C:\\Users\\Guest>",
  });
});
