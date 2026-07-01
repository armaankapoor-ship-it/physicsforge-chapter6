export const models3d = {
  "repo": "physicsforge-chapter6",
  "chapterNumber": 6,
  "chapterName": "Electromagnetic Induction",
  "shortName": "EMI",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Faraday Flux Loop",
      "kind": "coil",
      "formula": "emf = -dPhi/dt",
      "concept": "Changing flux through a loop induces emf.",
      "exam": "Flux change matters, not flux alone.",
      "labels": [
        "loop",
        "changing B",
        "induced emf"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Lenz Direction Wheel",
      "kind": "phasor",
      "formula": "opposes change in flux",
      "concept": "Induced current direction opposes the cause producing it.",
      "exam": "Lenz law is energy conservation in action.",
      "labels": [
        "flux change",
        "induced current",
        "opposition"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Motional EMF Rod",
      "kind": "circuit",
      "formula": "emf = Blv",
      "concept": "A moving conductor cuts magnetic field lines.",
      "exam": "Direction follows v x B charge separation.",
      "labels": [
        "moving rod",
        "rails",
        "B field"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "AC Generator Coil",
      "kind": "generator",
      "formula": "e = NBA omega sin omega t",
      "concept": "A rotating coil changes flux sinusoidally.",
      "exam": "Peak emf is NBA omega.",
      "labels": [
        "rotating coil",
        "magnets",
        "slip rings"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Eddy Current Plate",
      "kind": "thermal",
      "formula": "eddy current loss",
      "concept": "Changing flux induces swirling currents in metal.",
      "exam": "Lamination reduces eddy current loss.",
      "labels": [
        "metal plate",
        "eddy loops",
        "heat"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Self Inductance Coil",
      "kind": "coil",
      "formula": "emf = -L dI/dt",
      "concept": "A coil opposes change in its own current.",
      "exam": "Inductor resists change, not current itself.",
      "labels": [
        "coil",
        "changing I",
        "back emf"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Mutual Inductance Pair",
      "kind": "transformer",
      "formula": "emf2 = -M dI1/dt",
      "concept": "Changing current in one coil induces emf in nearby coil.",
      "exam": "Coupling depends on geometry and core.",
      "labels": [
        "primary",
        "secondary",
        "shared flux"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Inductor Energy Field",
      "kind": "magnetic",
      "formula": "U = (1/2)LI^2",
      "concept": "Energy is stored in magnetic field around an inductor.",
      "exam": "Current cannot change instantly in ideal inductor.",
      "labels": [
        "coil current",
        "B field",
        "stored energy"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "LR Growth Curve",
      "kind": "resonance",
      "formula": "I = I0(1 - e^-t/tau)",
      "concept": "Current rises gradually in an LR circuit.",
      "exam": "Time constant tau = L/R.",
      "labels": [
        "switch",
        "inductor",
        "growth"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "LR Decay Curve",
      "kind": "resonance",
      "formula": "I = I0 e^-t/tau",
      "concept": "Stored magnetic energy drives current after source removal.",
      "exam": "Current direction continues initially.",
      "labels": [
        "stored field",
        "decay",
        "resistor"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Transformer Induction Core",
      "kind": "transformer",
      "formula": "Vs/Vp = Ns/Np",
      "concept": "Changing primary flux induces secondary voltage.",
      "exam": "Transformer needs changing current.",
      "labels": [
        "primary coil",
        "core flux",
        "secondary coil"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Magnetic Flux Surface",
      "kind": "default",
      "formula": "Phi = BA cos theta",
      "concept": "Tilting a loop changes magnetic flux.",
      "exam": "Angle is between B and area vector.",
      "labels": [
        "area vector",
        "B field",
        "flux"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Induced Electric Field Rings",
      "kind": "wave",
      "formula": "curl E = -dB/dt",
      "concept": "Changing magnetic field creates circulating electric field.",
      "exam": "Induced E is non-conservative.",
      "labels": [
        "changing B",
        "E rings",
        "loop"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Brake by Eddy Currents",
      "kind": "thermal",
      "formula": "magnetic braking",
      "concept": "Eddy currents oppose motion and dissipate energy as heat.",
      "exam": "No contact is needed for magnetic braking.",
      "labels": [
        "moving metal",
        "magnet",
        "drag"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Flux Linkage Stack",
      "kind": "coil",
      "formula": "N Phi",
      "concept": "Multiple turns multiply flux linkage and induced emf.",
      "exam": "N matters in emf formula.",
      "labels": [
        "turns",
        "flux",
        "linkage"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Generator Slip Ring System",
      "kind": "generator",
      "formula": "AC output",
      "concept": "Slip rings maintain alternating output from rotating coil.",
      "exam": "Split rings are for DC motor/commutator.",
      "labels": [
        "slip ring",
        "brush",
        "AC output"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Induction Stove Pan",
      "kind": "thermal",
      "formula": "eddy heating",
      "concept": "High-frequency changing fields heat the pan by eddy currents.",
      "exam": "Heating occurs in conducting pan, not glass surface.",
      "labels": [
        "coil",
        "pan",
        "heat"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Search Coil Probe",
      "kind": "coil",
      "formula": "emf proportional dB/dt",
      "concept": "A small coil can detect changing magnetic fields.",
      "exam": "Static field gives no emf in stationary coil.",
      "labels": [
        "probe coil",
        "field",
        "signal"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Rotating Loop Flux",
      "kind": "phasor",
      "formula": "Phi = BA cos omega t",
      "concept": "Flux variation is cosine while induced emf is sine.",
      "exam": "Emf leads flux by 90 degree.",
      "labels": [
        "flux phasor",
        "emf phasor",
        "rotation"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Rail Gun Induction Preview",
      "kind": "circuit",
      "formula": "magnetic force and induction",
      "concept": "Motion in magnetic field creates emf that affects current.",
      "exam": "Mechanical and electrical energy are coupled.",
      "labels": [
        "rails",
        "rod",
        "B field"
      ],
      "color": "#7c3aed"
    }
  ]
}
