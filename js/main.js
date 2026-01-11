const trolls = [
  "nah im good",
  "but i'm tiiired",
  "are you serious?",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
];

var term = {
  top: function () {
    var intro = "Guest@TotallyRealLinux:~$ display about\n\n" +
                "COMMANDS TO TRY:\n" +
                "display about\n" + 
                "display work\n" + 
                "help\n\n" + 
                "Thanks to Jakub T. Jankiewicz for the base library.\n" +
                "https://github.com/sponsors/jcubic for donations.\n\n";
    return intro;
  },
  test: function() {
    this.echo("trollls")
  },
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
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  list: function () {
    this.echo(trolls[Math.floor(Math.random() * trolls.length)] + "\n");
  },
  display: function (file) {
    if (file == "about") {
      fetch("../assets/about.txt")
        .then((response) => response.text())
        .then((text) => this.echo(text))
        .catch((error) => {
          console.error("err", error);
        });
    } else if (file == "work") {
      window.open("/assets/soni_anay_resume.pdf");
    } else {
      this.echo("No file with that name \n");
    }
  },
};

jQuery(document).ready(function ($) {
  $(".terminal-container").terminal(term, {
    greetings: function (cb) {
      cb(term.top());
    },
    completion: true,
    checkArity: false,
    prompt: "Guest@TotallyRealLinux:~$ ",
  });
});
