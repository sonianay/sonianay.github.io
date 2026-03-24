const hosts = ['mickey', 'goofy', 'daffy'];
const header = "guest@"
           + hosts[Math.floor(Math.random() * hosts.length)] 
           + ":~$ "; 

async function cycleBackgrounds() {
  const backgrounds = {'1.jpg':['The Great Day of His Wrath', 'John Martin'], 
                       '2.png':['Exodus Intro', 'Halo: Reach'], 
                       '3.png':['Boltgun Key Art', 'Johan Grenier']}
  const entries = Object.entries(backgrounds);
  
  const creditA = document.getElementById("credit-a");
  const creditB = document.getElementById("credit-b");
  let creditActive = creditA; 
  let creditNext = creditB;

  const bgA = document.getElementById("bg-a");
  const bgB = document.getElementById("bg-b");
  let bgActive = bgA; 
  let bgNext = bgB;

  for (let i = 0; i < entries.length; i++) {
      creditNext.innerHTML = "<span style=\"font-style: italic;\">" 
                             + entries[i][1][0] 
                             + " - <span style=\"font-style: italic;\"> " 
                             + entries[i][1][1] + "</span>";
      creditNext.style.opacity = "1";
      creditActive.style.opacity = "0";

      [creditActive, creditNext] = [creditNext, creditActive];

      bgNext.style.backgroundImage = "url('assets/" + entries[i][0] + "')";
      bgNext.style.opacity = "1";
      bgActive.style.opacity = "0";
  
      [bgActive, bgNext] = [bgNext, bgActive];

      if (i === 2) i = -1; 

      await new Promise(resolve => setTimeout(resolve, 10000));
  }
}

const aboutText = `
I'm an ECE student at Carnegie Mellon interested in autonomy and FPGAs.

Currently, I am a ...
- teaching assistant for Computer Systems at CMU
- research assistant at CMU's Wood Neuro Research Group
- and incoming Autonomy Engineer Intern at Oshkosh

To see my resume, type 'display work'.
To show this text again, type 'display about'.
You can email me at anays@andrew.cmu.edu.

P.S. Jakub T. Jankiewicz wrote this library! 
Donations for his work here: https://github.com/sponsors/jcubic.
`;

var term = {
  display: function (file) {
    if (file == "about") {
      this.echo(aboutText);
    } else if (file == "work") {
      window.open("assets/soni_anay_resume.pdf");
    } else {
      this.echo("Only about and work available parameters.\n");
    }
  },
};

jQuery(document).ready(function ($) {
  $(".terminal-container").terminal(term, {
    greetings: function () {this.echo(header + "display about\n" + aboutText);},
    prompt: header,
  });
});

cycleBackgrounds();