export const formulas = [
  {
    "id": "flux",
    "title": "Magnetic Flux",
    "formula": "Phi = B A cos theta",
    "display": "Phi = B A cos theta",
    "symbols": [
      [
        "Phi",
        "magnetic flux",
        "Wb"
      ],
      [
        "B",
        "magnetic field",
        "T"
      ],
      [
        "A",
        "area",
        "m^2"
      ],
      [
        "theta",
        "angle between B and area vector",
        "degree/radian"
      ]
    ],
    "meaning": "Measures field through a surface.",
    "dimension": "T m^2 = Wb",
    "graph": "Phi-theta is cosine graph.",
    "trap": "Theta uses area vector.",
    "easyExample": "Easy example: identify symbols and substitute in Phi = B A cos theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Measures field through a surface.",
    "jeeExample": "JEE Main pattern: combine Phi = B A cos theta with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Theta uses area vector."
  },
  {
    "id": "faraday",
    "title": "Faraday Law",
    "formula": "e = -dPhi/dt",
    "display": "e = -dPhi/dt",
    "symbols": [
      [
        "e",
        "induced emf",
        "V"
      ]
    ],
    "meaning": "Changing flux induces emf.",
    "dimension": "Wb/s = V",
    "graph": "Emf is negative slope of flux-time graph.",
    "trap": "Minus sign is Lenz law.",
    "easyExample": "Easy example: identify symbols and substitute in e = -dPhi/dt after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Changing flux induces emf.",
    "jeeExample": "JEE Main pattern: combine e = -dPhi/dt with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Minus sign is Lenz law."
  },
  {
    "id": "faraday-n",
    "title": "N-Turn Faraday Law",
    "formula": "e = -N dPhi/dt",
    "display": "e = -N dPhi/dt",
    "symbols": [
      [
        "N",
        "number of turns",
        "unitless"
      ]
    ],
    "meaning": "Coil emf adds over turns.",
    "dimension": "V",
    "graph": "Emf proportional to N.",
    "trap": "All turns should link flux.",
    "easyExample": "Easy example: identify symbols and substitute in e = -N dPhi/dt after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Coil emf adds over turns.",
    "jeeExample": "JEE Main pattern: combine e = -N dPhi/dt with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: All turns should link flux."
  },
  {
    "id": "induced-current",
    "title": "Induced Current",
    "formula": "I = e/R",
    "display": "I = e/R",
    "symbols": [
      [
        "I",
        "current",
        "A"
      ],
      [
        "R",
        "resistance",
        "ohm"
      ]
    ],
    "meaning": "Closed circuit current from induced emf.",
    "dimension": "V/ohm=A",
    "graph": "I follows emf if R fixed.",
    "trap": "Open circuit has no current.",
    "easyExample": "Easy example: identify symbols and substitute in I = e/R after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Closed circuit current from induced emf.",
    "jeeExample": "JEE Main pattern: combine I = e/R with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Open circuit has no current."
  },
  {
    "id": "motional",
    "title": "Motional EMF",
    "formula": "e = B l v",
    "display": "e = B l v",
    "symbols": [
      [
        "l",
        "length",
        "m"
      ],
      [
        "v",
        "speed",
        "m s^-1"
      ]
    ],
    "meaning": "Rod cutting field lines develops emf.",
    "dimension": "T m m/s = V",
    "graph": "emf grows with v.",
    "trap": "Use perpendicular geometry.",
    "easyExample": "Easy example: identify symbols and substitute in e = B l v after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Rod cutting field lines develops emf.",
    "jeeExample": "JEE Main pattern: combine e = B l v with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Use perpendicular geometry."
  },
  {
    "id": "moving-rod-current",
    "title": "Moving Rod Current",
    "formula": "I = B l v/R",
    "display": "I = B l v/R",
    "symbols": [
      [
        "R",
        "circuit resistance",
        "ohm"
      ]
    ],
    "meaning": "Motional emf drives current.",
    "dimension": "A",
    "graph": "I-v graph straight.",
    "trap": "Direction needs Lenz law.",
    "easyExample": "Easy example: identify symbols and substitute in I = B l v/R after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Motional emf drives current.",
    "jeeExample": "JEE Main pattern: combine I = B l v/R with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Direction needs Lenz law."
  },
  {
    "id": "opposing-force",
    "title": "Opposing Force",
    "formula": "F = B^2 l^2 v/R",
    "display": "F = B^2 l^2 v/R",
    "symbols": [
      [
        "F",
        "force",
        "N"
      ]
    ],
    "meaning": "Magnetic force opposes rod motion.",
    "dimension": "N",
    "graph": "F-v graph straight.",
    "trap": "Energy becomes heat.",
    "easyExample": "Easy example: identify symbols and substitute in F = B^2 l^2 v/R after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Magnetic force opposes rod motion.",
    "jeeExample": "JEE Main pattern: combine F = B^2 l^2 v/R with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Energy becomes heat."
  },
  {
    "id": "power-rod",
    "title": "Power in Motional EMF",
    "formula": "P = B^2 l^2 v^2/R",
    "display": "P = B^2 l^2 v^2/R",
    "symbols": [
      [
        "P",
        "power",
        "W"
      ]
    ],
    "meaning": "Mechanical power becomes electrical heat.",
    "dimension": "W",
    "graph": "P-v graph quadratic.",
    "trap": "Do not ignore work source.",
    "easyExample": "Easy example: identify symbols and substitute in P = B^2 l^2 v^2/R after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Mechanical power becomes electrical heat.",
    "jeeExample": "JEE Main pattern: combine P = B^2 l^2 v^2/R with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Do not ignore work source."
  },
  {
    "id": "self-emf",
    "title": "Self-Induced EMF",
    "formula": "e = -L dI/dt",
    "display": "e = -L dI/dt",
    "symbols": [
      [
        "L",
        "self inductance",
        "H"
      ]
    ],
    "meaning": "Changing current induces opposing emf.",
    "dimension": "H A/s = V",
    "graph": "emf depends on current slope.",
    "trap": "Inductor opposes change.",
    "easyExample": "Easy example: identify symbols and substitute in e = -L dI/dt after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Changing current induces opposing emf.",
    "jeeExample": "JEE Main pattern: combine e = -L dI/dt with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Inductor opposes change."
  },
  {
    "id": "self-inductance",
    "title": "Self Inductance",
    "formula": "N Phi = L I",
    "display": "N Phi = L I",
    "symbols": [
      [
        "L",
        "inductance",
        "H"
      ]
    ],
    "meaning": "Flux linkage per current.",
    "dimension": "Wb/A = H",
    "graph": "L depends on geometry.",
    "trap": "Not caused by current alone.",
    "easyExample": "Easy example: identify symbols and substitute in N Phi = L I after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Flux linkage per current.",
    "jeeExample": "JEE Main pattern: combine N Phi = L I with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Not caused by current alone."
  },
  {
    "id": "mutual-emf",
    "title": "Mutual Induction EMF",
    "formula": "e2 = -M dI1/dt",
    "display": "e2 = -M dI1/dt",
    "symbols": [
      [
        "M",
        "mutual inductance",
        "H"
      ]
    ],
    "meaning": "Changing current in one coil induces emf in another.",
    "dimension": "V",
    "graph": "emf proportional to current slope.",
    "trap": "Coupling matters.",
    "easyExample": "Easy example: identify symbols and substitute in e2 = -M dI1/dt after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Changing current in one coil induces emf in another.",
    "jeeExample": "JEE Main pattern: combine e2 = -M dI1/dt with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Coupling matters."
  },
  {
    "id": "mutual-inductance",
    "title": "Mutual Inductance",
    "formula": "N2 Phi2 = M I1",
    "display": "N2 Phi2 = M I1",
    "symbols": [
      [
        "Phi2",
        "linked flux",
        "Wb"
      ]
    ],
    "meaning": "Flux linkage per source current.",
    "dimension": "H",
    "graph": "M increases with coupling.",
    "trap": "Orientation matters.",
    "easyExample": "Easy example: identify symbols and substitute in N2 Phi2 = M I1 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Flux linkage per source current.",
    "jeeExample": "JEE Main pattern: combine N2 Phi2 = M I1 with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Orientation matters."
  },
  {
    "id": "inductor-energy",
    "title": "Inductor Energy",
    "formula": "U = 1/2 L I^2",
    "display": "U = 1/2 L I^2",
    "symbols": [
      [
        "U",
        "energy",
        "J"
      ]
    ],
    "meaning": "Energy stored in magnetic field.",
    "dimension": "H A^2 = J",
    "graph": "U-I graph quadratic.",
    "trap": "Current cannot jump instantly.",
    "easyExample": "Easy example: identify symbols and substitute in U = 1/2 L I^2 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy stored in magnetic field.",
    "jeeExample": "JEE Main pattern: combine U = 1/2 L I^2 with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Current cannot jump instantly."
  },
  {
    "id": "mag-energy-density",
    "title": "Magnetic Energy Density",
    "formula": "u = B^2/(2 mu0)",
    "display": "u = B^2/(2 mu0)",
    "symbols": [
      [
        "u",
        "energy density",
        "J m^-3"
      ]
    ],
    "meaning": "Energy per volume of magnetic field.",
    "dimension": "J/m^3",
    "graph": "u grows as B squared.",
    "trap": "Use permeability carefully.",
    "easyExample": "Easy example: identify symbols and substitute in u = B^2/(2 mu0) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy per volume of magnetic field.",
    "jeeExample": "JEE Main pattern: combine u = B^2/(2 mu0) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Use permeability carefully."
  },
  {
    "id": "lr-time",
    "title": "LR Time Constant",
    "formula": "tau = L/R",
    "display": "tau = L/R",
    "symbols": [
      [
        "tau",
        "time constant",
        "s"
      ]
    ],
    "meaning": "Controls exponential current change.",
    "dimension": "H/ohm=s",
    "graph": "larger L means slower response.",
    "trap": "Not RC time constant.",
    "easyExample": "Easy example: identify symbols and substitute in tau = L/R after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Controls exponential current change.",
    "jeeExample": "JEE Main pattern: combine tau = L/R with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Not RC time constant."
  },
  {
    "id": "generator",
    "title": "Generator EMF",
    "formula": "e = N B A omega sin omega t",
    "display": "e = N B A omega sin omega t",
    "symbols": [
      [
        "omega",
        "angular speed",
        "rad s^-1"
      ]
    ],
    "meaning": "Rotating coil produces AC emf.",
    "dimension": "V",
    "graph": "sinusoidal emf-time graph.",
    "trap": "Peak and instant values differ.",
    "easyExample": "Easy example: identify symbols and substitute in e = N B A omega sin omega t after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Rotating coil produces AC emf.",
    "jeeExample": "JEE Main pattern: combine e = N B A omega sin omega t with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Peak and instant values differ."
  },
  {
    "id": "peak-generator",
    "title": "Peak Generator EMF",
    "formula": "e0 = N B A omega",
    "display": "e0 = N B A omega",
    "symbols": [
      [
        "e0",
        "peak emf",
        "V"
      ]
    ],
    "meaning": "Maximum generator emf.",
    "dimension": "V",
    "graph": "e0 grows with omega.",
    "trap": "No sine factor in peak.",
    "easyExample": "Easy example: identify symbols and substitute in e0 = N B A omega after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Maximum generator emf.",
    "jeeExample": "JEE Main pattern: combine e0 = N B A omega with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: No sine factor in peak."
  }
]

export const formulaGroups = [
  {
    "title": "Flux and emf",
    "formulas": [
      "flux",
      "faraday",
      "faraday-n",
      "induced-current",
      "motional"
    ]
  },
  {
    "title": "Direction",
    "formulas": [
      "moving-rod-current",
      "opposing-force",
      "power-rod",
      "self-emf",
      "self-inductance"
    ]
  },
  {
    "title": "Inductance",
    "formulas": [
      "mutual-emf",
      "mutual-inductance",
      "inductor-energy",
      "mag-energy-density",
      "lr-time"
    ]
  },
  {
    "title": "Applications",
    "formulas": [
      "generator",
      "peak-generator"
    ]
  }
]

