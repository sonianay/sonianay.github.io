const hosts = ['mickey', 'goofy', 'daffy'];
var randomHost = hosts[Math.floor(Math.random() * hosts.length)];
var header = "guest@" + randomHost + ":~$ "; 

var term = {
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
      this.echo("Only about and work available parameters.\n");
    }
  },
};

jQuery(document).ready(function ($) {
  $(".terminal-container").terminal(term, {
    greetings: function () {
      fetch("../assets/about.txt")
        .then((response) => response.text())
        .then((text) => {
          this.echo(header + "display about\n\n" + text);
        })
        .catch((error) => {
          this.echo("Could not load top.\n")
          console.error("err", error);
        });
    },
    prompt: header,
  });
});