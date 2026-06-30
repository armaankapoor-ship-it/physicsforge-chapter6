export const visualPlans = [
  {
    "id": "flux-1",
    "title": "Magnetic Flux Visual",
    "category": "Diagram",
    "diagramType": "flux",
    "shows": "A self-made SVG visual for Magnetic Flux showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "Phi",
      "B",
      "A",
      "cos",
      "theta"
    ],
    "concept": "Magnetic flux measures magnetic field passing through a surface.",
    "removesConfusion": "Theta is angle between B and area vector.",
    "manual": "Draw the main object, add direction arrows, label variables, then write Phi = B A cos theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "faraday-flux-2",
    "title": "Faraday Law Visual",
    "category": "Diagram",
    "diagramType": "faraday-flux",
    "shows": "A self-made SVG visual for Faraday Law showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "dPhi",
      "dt"
    ],
    "concept": "Changing magnetic flux induces emf in a circuit.",
    "removesConfusion": "Minus sign represents Lenz law direction.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = -dPhi/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"faraday-flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "lenz-flux-3",
    "title": "Faraday Law for N Turns Visual",
    "category": "Diagram",
    "diagramType": "lenz-flux",
    "shows": "A self-made SVG visual for Faraday Law for N Turns showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "N",
      "dPhi",
      "dt"
    ],
    "concept": "For a coil, induced emf is multiplied by number of turns.",
    "removesConfusion": "All turns must link the same flux.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = -N dPhi/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lenz-flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "motional-emf-4",
    "title": "Lenz Law Visual",
    "category": "Diagram",
    "diagramType": "motional-emf",
    "shows": "A self-made SVG visual for Lenz Law showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "direction",
      "opposes",
      "change"
    ],
    "concept": "Induced current opposes the change in magnetic flux that produced it.",
    "removesConfusion": "It opposes change, not necessarily motion in every wording.",
    "manual": "Draw the main object, add direction arrows, label variables, then write direction opposes change below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"motional-emf\" draws this with free SVG primitives inside React."
  },
  {
    "id": "eddy-current-5",
    "title": "Induced Current Visual",
    "category": "Diagram",
    "diagramType": "eddy-current",
    "shows": "A self-made SVG visual for Induced Current showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "I",
      "e",
      "R"
    ],
    "concept": "Induced current equals induced emf divided by resistance.",
    "removesConfusion": "Circuit must be closed for current.",
    "manual": "Draw the main object, add direction arrows, label variables, then write I = e/R below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"eddy-current\" draws this with free SVG primitives inside React."
  },
  {
    "id": "self-inductor-6",
    "title": "Motional EMF Visual",
    "category": "Diagram",
    "diagramType": "self-inductor",
    "shows": "A self-made SVG visual for Motional EMF showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "B",
      "l",
      "v"
    ],
    "concept": "A conductor moving in magnetic field develops emf.",
    "removesConfusion": "Use perpendicular components of l, v and B.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = B l v below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"self-inductor\" draws this with free SVG primitives inside React."
  },
  {
    "id": "mutual-induction-7",
    "title": "Motional EMF with Angle Visual",
    "category": "Diagram",
    "diagramType": "mutual-induction",
    "shows": "A self-made SVG visual for Motional EMF with Angle showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "B",
      "l",
      "v",
      "sin",
      "theta"
    ],
    "concept": "Motional emf depends on perpendicular speed and field geometry.",
    "removesConfusion": "Theta must match velocity-field geometry.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = B l v sin theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"mutual-induction\" draws this with free SVG primitives inside React."
  },
  {
    "id": "inductor-energy-8",
    "title": "Current in Moving Rod Visual",
    "category": "Diagram",
    "diagramType": "inductor-energy",
    "shows": "A self-made SVG visual for Current in Moving Rod showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "I",
      "B",
      "l",
      "v",
      "R"
    ],
    "concept": "A moving rod on rails drives current through resistance.",
    "removesConfusion": "Direction requires Lenz law/right-hand rule.",
    "manual": "Draw the main object, add direction arrows, label variables, then write I = B l v/R below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"inductor-energy\" draws this with free SVG primitives inside React."
  },
  {
    "id": "lr-circuit-9",
    "title": "Opposing Magnetic Force Visual",
    "category": "Diagram",
    "diagramType": "lr-circuit",
    "shows": "A self-made SVG visual for Opposing Magnetic Force showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "B",
      "2",
      "l",
      "2",
      "v"
    ],
    "concept": "Induced current in moving rod experiences force opposing motion.",
    "removesConfusion": "External work becomes heat.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F = B^2 l^2 v/R below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lr-circuit\" draws this with free SVG primitives inside React."
  },
  {
    "id": "generator-emf-10",
    "title": "Power in Motional EMF Visual",
    "category": "Diagram",
    "diagramType": "generator-emf",
    "shows": "A self-made SVG visual for Power in Motional EMF showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "P",
      "B",
      "2",
      "l",
      "2",
      "v"
    ],
    "concept": "Mechanical power supplied equals electrical power dissipated.",
    "removesConfusion": "Energy conservation is the core idea.",
    "manual": "Draw the main object, add direction arrows, label variables, then write P = B^2 l^2 v^2/R below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"generator-emf\" draws this with free SVG primitives inside React."
  },
  {
    "id": "growth-graph-11",
    "title": "Eddy Currents Visual",
    "category": "Graph",
    "diagramType": "growth-graph",
    "shows": "A self-made SVG visual for Eddy Currents showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "eddy",
      "current",
      "from",
      "changing",
      "flux"
    ],
    "concept": "Changing flux induces circulating currents in bulk conductors.",
    "removesConfusion": "Useful in braking but causes heating loss.",
    "manual": "Draw the main object, add direction arrows, label variables, then write eddy current from changing flux below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"growth-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "decay-graph-12",
    "title": "Applications of Eddy Currents Visual",
    "category": "Graph",
    "diagramType": "decay-graph",
    "shows": "A self-made SVG visual for Applications of Eddy Currents showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "P_loss",
      "reduced",
      "by",
      "laminations"
    ],
    "concept": "Eddy currents are used in brakes, induction furnaces and damping.",
    "removesConfusion": "Laminations increase resistance path.",
    "manual": "Draw the main object, add direction arrows, label variables, then write P_loss reduced by laminations below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"decay-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-13",
    "title": "Self Induction Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Self Induction showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "L",
      "dI",
      "dt"
    ],
    "concept": "Changing current in a coil induces emf in the same coil.",
    "removesConfusion": "Inductor opposes current change, not current itself.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = -L dI/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "flux-14",
    "title": "Coefficient of Self Inductance Visual",
    "category": "Diagram",
    "diagramType": "flux",
    "shows": "A self-made SVG visual for Coefficient of Self Inductance showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "N",
      "Phi",
      "L",
      "I"
    ],
    "concept": "Self inductance links flux with current.",
    "removesConfusion": "L depends on geometry and medium.",
    "manual": "Draw the main object, add direction arrows, label variables, then write N Phi = L I below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "faraday-flux-15",
    "title": "Mutual Induction Visual",
    "category": "Diagram",
    "diagramType": "faraday-flux",
    "shows": "A self-made SVG visual for Mutual Induction showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e2",
      "M",
      "dI1",
      "dt"
    ],
    "concept": "Changing current in one coil induces emf in another.",
    "removesConfusion": "Depends on coil coupling and orientation.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e2 = -M dI1/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"faraday-flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "lenz-flux-16",
    "title": "Coefficient of Mutual Inductance Visual",
    "category": "Diagram",
    "diagramType": "lenz-flux",
    "shows": "A self-made SVG visual for Coefficient of Mutual Inductance showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "N2",
      "Phi2",
      "M",
      "I1"
    ],
    "concept": "Mutual inductance links flux in one coil to current in another.",
    "removesConfusion": "M is symmetric for two coils in ideal treatment.",
    "manual": "Draw the main object, add direction arrows, label variables, then write N2 Phi2 = M I1 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lenz-flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "motional-emf-17",
    "title": "Energy in Inductor Visual",
    "category": "Diagram",
    "diagramType": "motional-emf",
    "shows": "A self-made SVG visual for Energy in Inductor showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "U",
      "1",
      "2",
      "L",
      "I",
      "2"
    ],
    "concept": "An inductor stores energy in magnetic field.",
    "removesConfusion": "Energy is not stored in resistance.",
    "manual": "Draw the main object, add direction arrows, label variables, then write U = 1/2 L I^2 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"motional-emf\" draws this with free SVG primitives inside React."
  },
  {
    "id": "eddy-current-18",
    "title": "Energy Density of Magnetic Field Visual",
    "category": "Diagram",
    "diagramType": "eddy-current",
    "shows": "A self-made SVG visual for Energy Density of Magnetic Field showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "u",
      "B",
      "2",
      "2",
      "mu0"
    ],
    "concept": "Magnetic field carries energy per unit volume.",
    "removesConfusion": "Use medium permeability when needed.",
    "manual": "Draw the main object, add direction arrows, label variables, then write u = B^2/(2 mu0) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"eddy-current\" draws this with free SVG primitives inside React."
  },
  {
    "id": "self-inductor-19",
    "title": "LR Circuit Growth Visual",
    "category": "Diagram",
    "diagramType": "self-inductor",
    "shows": "A self-made SVG visual for LR Circuit Growth showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "I",
      "I0",
      "1",
      "e",
      "t",
      "tau"
    ],
    "concept": "Current in an LR circuit rises exponentially after switching on.",
    "removesConfusion": "Time constant is L/R.",
    "manual": "Draw the main object, add direction arrows, label variables, then write I = I0(1 - e^(-t/tau)) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"self-inductor\" draws this with free SVG primitives inside React."
  },
  {
    "id": "mutual-induction-20",
    "title": "LR Circuit Decay Visual",
    "category": "Diagram",
    "diagramType": "mutual-induction",
    "shows": "A self-made SVG visual for LR Circuit Decay showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "I",
      "I0",
      "e",
      "t",
      "tau"
    ],
    "concept": "Current decays exponentially when source is removed.",
    "removesConfusion": "Initial current cannot change instantaneously.",
    "manual": "Draw the main object, add direction arrows, label variables, then write I = I0 e^(-t/tau) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"mutual-induction\" draws this with free SVG primitives inside React."
  },
  {
    "id": "inductor-energy-21",
    "title": "Time Constant of LR Circuit Visual",
    "category": "Diagram",
    "diagramType": "inductor-energy",
    "shows": "A self-made SVG visual for Time Constant of LR Circuit showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "tau",
      "L",
      "R"
    ],
    "concept": "Time constant decides speed of current change.",
    "removesConfusion": "Bigger L or smaller R means slower change.",
    "manual": "Draw the main object, add direction arrows, label variables, then write tau = L/R below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"inductor-energy\" draws this with free SVG primitives inside React."
  },
  {
    "id": "lr-circuit-22",
    "title": "AC Generator Principle Visual",
    "category": "Diagram",
    "diagramType": "lr-circuit",
    "shows": "A self-made SVG visual for AC Generator Principle showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "N",
      "B",
      "A",
      "omega",
      "sin"
    ],
    "concept": "A rotating coil in magnetic field produces alternating emf.",
    "removesConfusion": "Maximum emf is NBAomega.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = N B A omega sin omega t below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lr-circuit\" draws this with free SVG primitives inside React."
  },
  {
    "id": "generator-emf-23",
    "title": "Peak EMF of Generator Visual",
    "category": "Diagram",
    "diagramType": "generator-emf",
    "shows": "A self-made SVG visual for Peak EMF of Generator showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e0",
      "N",
      "B",
      "A",
      "omega"
    ],
    "concept": "Peak induced emf depends on turns, field, area and angular speed.",
    "removesConfusion": "Do not confuse instantaneous and peak values.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e0 = N B A omega below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"generator-emf\" draws this with free SVG primitives inside React."
  },
  {
    "id": "growth-graph-24",
    "title": "Flux-Time Graph Visual",
    "category": "Graph",
    "diagramType": "growth-graph",
    "shows": "A self-made SVG visual for Flux-Time Graph showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "dPhi",
      "dt"
    ],
    "concept": "Emf is negative slope of flux-time graph.",
    "removesConfusion": "Steeper flux graph means larger emf.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = -dPhi/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"growth-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "decay-graph-25",
    "title": "EMF-Time Graph Visual",
    "category": "Graph",
    "diagramType": "decay-graph",
    "shows": "A self-made SVG visual for EMF-Time Graph showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "proportional",
      "to",
      "dPhi",
      "dt"
    ],
    "concept": "Sinusoidal flux gives sinusoidal emf shifted by phase.",
    "removesConfusion": "Derivative changes phase.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e proportional to -dPhi/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"decay-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-26",
    "title": "Inductance Graphs Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Inductance Graphs showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "L",
      "dI",
      "dt"
    ],
    "concept": "Inductor current cannot jump suddenly; emf is high when dI/dt is high.",
    "removesConfusion": "At steady DC, ideal inductor has zero induced emf.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e = -L dI/dt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "flux-27",
    "title": "Formula Mastery Visual",
    "category": "Diagram",
    "diagramType": "flux",
    "shows": "A self-made SVG visual for Formula Mastery showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "e",
      "NdPhi",
      "dt",
      "I",
      "e",
      "R"
    ],
    "concept": "EMI problems are solved by flux change, direction and circuit resistance.",
    "removesConfusion": "Do not skip Lenz direction.",
    "manual": "Draw the main object, add direction arrows, label variables, then write e=-NdPhi/dt, I=e/R below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "faraday-flux-28",
    "title": "Common Conceptual Traps Visual",
    "category": "Diagram",
    "diagramType": "faraday-flux",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "check",
      "theta",
      "sign",
      "closed",
      "path"
    ],
    "concept": "Traps include wrong flux angle, wrong Lenz opposition and open-circuit current.",
    "removesConfusion": "Open circuit can have emf but no current.",
    "manual": "Draw the main object, add direction arrows, label variables, then write check theta, sign, closed path below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"faraday-flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "lenz-flux-29",
    "title": "Board Derivation Focus Visual",
    "category": "Diagram",
    "diagramType": "lenz-flux",
    "shows": "A self-made SVG visual for Board Derivation Focus showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "derive",
      "e",
      "L",
      "U",
      "generator"
    ],
    "concept": "Boards emphasize Faraday law, motional emf, self induction and generator.",
    "removesConfusion": "Write physical meaning after the formula.",
    "manual": "Draw the main object, add direction arrows, label variables, then write derive e, L, U, generator below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lenz-flux\" draws this with free SVG primitives inside React."
  },
  {
    "id": "motional-emf-30",
    "title": "Final Revision Section Visual",
    "category": "Diagram",
    "diagramType": "motional-emf",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses flux, emf, direction, inductance and generator.",
    "removesConfusion": "Always ask: what flux is changing?",
    "manual": "Draw the main object, add direction arrows, label variables, then write top formulas + traps below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"motional-emf\" draws this with free SVG primitives inside React."
  }
]
