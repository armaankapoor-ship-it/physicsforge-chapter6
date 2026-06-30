export const summaryTables = [
  {
    "title": "Core Formula Table",
    "columns": [
      "Concept",
      "Formula",
      "Unit",
      "Trap"
    ],
    "rows": [
      [
        "Magnetic Flux",
        "Phi = B A cos theta",
        "weber (Wb)",
        "Theta is angle between B and area vector."
      ],
      [
        "Faraday Law",
        "e = -dPhi/dt",
        "volt (V)",
        "Minus sign represents Lenz law direction."
      ],
      [
        "Faraday Law for N Turns",
        "e = -N dPhi/dt",
        "V",
        "All turns must link the same flux."
      ],
      [
        "Lenz Law",
        "direction opposes change",
        "direction rule",
        "It opposes change, not necessarily motion in every wording."
      ],
      [
        "Induced Current",
        "I = e/R",
        "ampere (A)",
        "Circuit must be closed for current."
      ],
      [
        "Motional EMF",
        "e = B l v",
        "V",
        "Use perpendicular components of l, v and B."
      ],
      [
        "Motional EMF with Angle",
        "e = B l v sin theta",
        "V",
        "Theta must match velocity-field geometry."
      ],
      [
        "Current in Moving Rod",
        "I = B l v/R",
        "A",
        "Direction requires Lenz law/right-hand rule."
      ],
      [
        "Opposing Magnetic Force",
        "F = B^2 l^2 v/R",
        "N",
        "External work becomes heat."
      ],
      [
        "Power in Motional EMF",
        "P = B^2 l^2 v^2/R",
        "W",
        "Energy conservation is the core idea."
      ]
    ]
  },
  {
    "title": "Graph and Direction Patterns",
    "columns": [
      "Topic",
      "Pattern",
      "Exam use"
    ],
    "rows": [
      [
        "Eddy Currents",
        "eddy current from changing flux",
        "Useful in braking but causes heating loss."
      ],
      [
        "Applications of Eddy Currents",
        "P_loss reduced by laminations",
        "Laminations increase resistance path."
      ],
      [
        "Self Induction",
        "e = -L dI/dt",
        "Inductor opposes current change, not current itself."
      ],
      [
        "Coefficient of Self Inductance",
        "N Phi = L I",
        "L depends on geometry and medium."
      ],
      [
        "Mutual Induction",
        "e2 = -M dI1/dt",
        "Depends on coil coupling and orientation."
      ],
      [
        "Coefficient of Mutual Inductance",
        "N2 Phi2 = M I1",
        "M is symmetric for two coils in ideal treatment."
      ],
      [
        "Energy in Inductor",
        "U = 1/2 L I^2",
        "Energy is not stored in resistance."
      ],
      [
        "Energy Density of Magnetic Field",
        "u = B^2/(2 mu0)",
        "Use medium permeability when needed."
      ],
      [
        "LR Circuit Growth",
        "I = I0(1 - e^(-t/tau))",
        "Time constant is L/R."
      ],
      [
        "LR Circuit Decay",
        "I = I0 e^(-t/tau)",
        "Initial current cannot change instantaneously."
      ]
    ]
  },
  {
    "title": "NEET vs JEE Question Patterns",
    "columns": [
      "Cluster",
      "NEET asks",
      "JEE asks"
    ],
    "rows": [
      [
        "Flux and emf",
        "Formula and NCERT statement from Magnetic flux, Faraday law and induced emf.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Direction",
        "Formula and NCERT statement from Lenz law, energy conservation and eddy currents.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Inductance",
        "Formula and NCERT statement from Self induction, mutual induction and energy storage.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Applications",
        "Formula and NCERT statement from LR circuits, generator and practical EMI cases.",
        "Numerical, graph, direction and limiting-case combinations"
      ]
    ]
  }
]

export const memoryHooks = [
  "Flux = field crossing area normally.",
  "Faraday gives magnitude, Lenz gives direction.",
  "Lenz law opposes change, not the original flux blindly.",
  "Inductor resists change in current.",
  "Energy in inductor grows as I squared."
]

export const topFormulas = [
  "Phi = B A cos theta",
  "e = -dPhi/dt",
  "e = -N dPhi/dt",
  "I = e/R",
  "e = B l v",
  "I = B l v/R",
  "F = B^2 l^2 v/R",
  "P = B^2 l^2 v^2/R",
  "e = -L dI/dt",
  "N Phi = L I",
  "e2 = -M dI1/dt",
  "N2 Phi2 = M I1",
  "U = 1/2 L I^2",
  "u = B^2/(2 mu0)",
  "tau = L/R",
  "e = N B A omega sin omega t",
  "e0 = N B A omega"
]

export const topConcepts = [
  "Magnetic Flux: Magnetic flux measures magnetic field passing through a surface.",
  "Faraday Law: Changing magnetic flux induces emf in a circuit.",
  "Faraday Law for N Turns: For a coil, induced emf is multiplied by number of turns.",
  "Lenz Law: Induced current opposes the change in magnetic flux that produced it.",
  "Induced Current: Induced current equals induced emf divided by resistance.",
  "Motional EMF: A conductor moving in magnetic field develops emf.",
  "Motional EMF with Angle: Motional emf depends on perpendicular speed and field geometry.",
  "Current in Moving Rod: A moving rod on rails drives current through resistance.",
  "Opposing Magnetic Force: Induced current in moving rod experiences force opposing motion.",
  "Power in Motional EMF: Mechanical power supplied equals electrical power dissipated.",
  "Eddy Currents: Changing flux induces circulating currents in bulk conductors.",
  "Applications of Eddy Currents: Eddy currents are used in brakes, induction furnaces and damping.",
  "Self Induction: Changing current in a coil induces emf in the same coil.",
  "Coefficient of Self Inductance: Self inductance links flux with current.",
  "Mutual Induction: Changing current in one coil induces emf in another.",
  "Coefficient of Mutual Inductance: Mutual inductance links flux in one coil to current in another.",
  "Energy in Inductor: An inductor stores energy in magnetic field.",
  "Energy Density of Magnetic Field: Magnetic field carries energy per unit volume.",
  "LR Circuit Growth: Current in an LR circuit rises exponentially after switching on.",
  "LR Circuit Decay: Current decays exponentially when source is removed."
]

export const topTraps = [
  "Theta is angle between B and area vector.",
  "Minus sign represents Lenz law direction.",
  "All turns must link the same flux.",
  "It opposes change, not necessarily motion in every wording.",
  "Circuit must be closed for current.",
  "Use perpendicular components of l, v and B.",
  "Theta must match velocity-field geometry.",
  "Direction requires Lenz law/right-hand rule.",
  "External work becomes heat.",
  "Energy conservation is the core idea.",
  "Useful in braking but causes heating loss.",
  "Laminations increase resistance path.",
  "Inductor opposes current change, not current itself.",
  "L depends on geometry and medium.",
  "Depends on coil coupling and orientation."
]

export const topDiagrams = [
  "Magnetic Flux Visual",
  "Faraday Law Visual",
  "Faraday Law for N Turns Visual",
  "Lenz Law Visual",
  "Induced Current Visual",
  "Motional EMF Visual",
  "Motional EMF with Angle Visual",
  "Current in Moving Rod Visual",
  "Opposing Magnetic Force Visual",
  "Power in Motional EMF Visual"
]

export const graphPatterns = [
  "Magnetic Flux: graph/variation follows Phi = B A cos theta.",
  "Faraday Law: graph/variation follows e = -dPhi/dt.",
  "Faraday Law for N Turns: graph/variation follows e = -N dPhi/dt.",
  "Lenz Law: graph/variation follows direction opposes change.",
  "Induced Current: graph/variation follows I = e/R.",
  "Motional EMF: graph/variation follows e = B l v.",
  "Motional EMF with Angle: graph/variation follows e = B l v sin theta.",
  "Current in Moving Rod: graph/variation follows I = B l v/R.",
  "Opposing Magnetic Force: graph/variation follows F = B^2 l^2 v/R.",
  "Power in Motional EMF: graph/variation follows P = B^2 l^2 v^2/R."
]

export const questionTypes = [
  "Direct formula MCQ",
  "Direction/phase conceptual",
  "Graph interpretation",
  "Ratio numerical",
  "Statement correction",
  "Assertion-reason",
  "Integer answer",
  "Diagram labelling",
  "Case-based reasoning",
  "Limiting-case analysis"
]

export const revisionPlans = {
  "thirtyMinute": [
    "0-5 min: read formula sheet and units.",
    "5-10 min: redraw top diagrams.",
    "10-17 min: solve five direct MCQs and five numericals.",
    "17-24 min: revise traps and graph patterns.",
    "24-30 min: attempt mixed assertion/integer questions."
  ],
  "lastDay": [
    "Revise NCERT line alerts.",
    "Write derivation final formulas once.",
    "Review graph and direction rules.",
    "Solve one mixed practice set.",
    "Stop heavy new learning."
  ],
  "examHall": [
    "Draw a quick diagram.",
    "Write knowns in SI units.",
    "Choose the law with its condition.",
    "Keep signs/angles visible.",
    "Check dimensions and limiting case."
  ]
}

export const finalChecklist = [
  "I can explain, draw and solve Magnetic Flux.",
  "I can explain, draw and solve Faraday Law.",
  "I can explain, draw and solve Faraday Law for N Turns.",
  "I can explain, draw and solve Lenz Law.",
  "I can explain, draw and solve Induced Current.",
  "I can explain, draw and solve Motional EMF.",
  "I can explain, draw and solve Motional EMF with Angle.",
  "I can explain, draw and solve Current in Moving Rod.",
  "I can explain, draw and solve Opposing Magnetic Force.",
  "I can explain, draw and solve Power in Motional EMF.",
  "I can explain, draw and solve Eddy Currents.",
  "I can explain, draw and solve Applications of Eddy Currents."
]
