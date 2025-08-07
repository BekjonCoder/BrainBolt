import type { SubjectType } from "./SubjectType";

export const data: SubjectType[] = [
  // Math
  {
    id: 1,
    category: "Math",
    levels: [
      {
        level: "Beginner",
        questions: [
          { id: 1, quiz: "2 + 2 = ?", variant: ["3", "4", "5", "6"], answer: "4" },
          { id: 2, quiz: "5 x 3 = ?", variant: ["8", "15", "10", "20"], answer: "15" },
          { id: 3, quiz: "What is 10 - 4?", variant: ["6", "5", "4", "3"], answer: "6" },
          { id: 4, quiz: "6 ÷ 2 = ?", variant: ["2", "3", "4", "6"], answer: "3" },
          { id: 5, quiz: "What comes after 7?", variant: ["6", "8", "9", "10"], answer: "8" },
        ],
      },
      {
        level: "Intermediate",
        questions: [
          { id: 6, quiz: "Square root of 81?", variant: ["8", "9", "10", "11"], answer: "9" },
          { id: 7, quiz: "12 x 12 = ?", variant: ["144", "121", "122", "132"], answer: "144" },
          { id: 8, quiz: "What is 100 ÷ 4?", variant: ["25", "20", "22", "30"], answer: "25" },
          { id: 9, quiz: "15% of 200 = ?", variant: ["25", "30", "35", "40"], answer: "30" },
          { id: 10, quiz: "LCM of 4 and 5?", variant: ["10", "15", "20", "25"], answer: "20" },
        ],
      },
      {
        level: "Advanced",
        questions: [
          { id: 11, quiz: "What is the derivative of x²?", variant: ["x", "2x", "x²", "2"], answer: "2x" },
          { id: 12, quiz: "What is log(100)?", variant: ["1", "2", "10", "100"], answer: "2" },
          { id: 13, quiz: "What is the value of π?", variant: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14" },
          { id: 14, quiz: "What is the factorial of 5?", variant: ["120", "60", "24", "100"], answer: "120" },
          { id: 15, quiz: "Solve: 2x + 3 = 11", variant: ["3", "4", "5", "6"], answer: "4" },
        ],
      },
    ],
  },

  // Geometry
  {
    id: 2,
    category: "Geometry",
    levels: [
      {
        level: "Beginner",
        questions: [
          { id: 16, quiz: "How many sides does a triangle have?", variant: ["2", "3", "4", "5"], answer: "3" },
          { id: 17, quiz: "A square has how many equal sides?", variant: ["2", "3", "4", "5"], answer: "4" },
          { id: 18, quiz: "Angle in a straight line?", variant: ["90°", "180°", "270°", "360°"], answer: "180°" },
          { id: 19, quiz: "How many angles in a triangle?", variant: ["1", "2", "3", "4"], answer: "3" },
          { id: 20, quiz: "Right angle is?", variant: ["45°", "60°", "90°", "120°"], answer: "90°" },
        ],
      },
      {
        level: "Intermediate",
        questions: [
          { id: 21, quiz: "Sum of angles in a triangle?", variant: ["180°", "360°", "90°", "270°"], answer: "180°" },
          { id: 22, quiz: "Polygon with 5 sides?", variant: ["Hexagon", "Pentagon", "Octagon", "Square"], answer: "Pentagon" },
          { id: 23, quiz: "Longest side in right triangle?", variant: ["Base", "Height", "Hypotenuse", "Diagonal"], answer: "Hypotenuse" },
          { id: 24, quiz: "Number of sides in hexagon?", variant: ["5", "6", "7", "8"], answer: "6" },
          { id: 25, quiz: "What is a chord?", variant: ["Half circle", "Line in circle", "Circle edge", "Radius"], answer: "Line in circle" },
        ],
      },
      {
        level: "Advanced",
        questions: [
          { id: 26, quiz: "Area of circle?", variant: ["πr", "πr²", "2πr", "r²"], answer: "πr²" },
          { id: 27, quiz: "Volume of cube formula?", variant: ["l×w", "l×w×h", "a³", "2a"], answer: "a³" },
          { id: 28, quiz: "Triangle area formula?", variant: ["b×h", "½b×h", "a×b×c", "πr²"], answer: "½b×h" },
          { id: 29, quiz: "Interior angles of square?", variant: ["45°", "60°", "90°", "120°"], answer: "90°" },
          { id: 30, quiz: "Tangent touches circle at?", variant: ["Two points", "One point", "All around", "Center"], answer: "One point" },
        ],
      },
    ],
  },

  // History
  {
    id: 3,
    category: "History",
    levels: [
      {
        level: "Beginner",
        questions: [
          { id: 31, quiz: "Who discovered America?", variant: ["Columbus", "Newton", "Edison", "Lincoln"], answer: "Columbus" },
          { id: 32, quiz: "First President of USA?", variant: ["Lincoln", "Washington", "Adams", "Roosevelt"], answer: "Washington" },
          { id: 33, quiz: "When was WWII?", variant: ["1939-1945", "1940-1950", "1930-1940", "1950-1960"], answer: "1939-1945" },
          { id: 34, quiz: "Who built pyramids?", variant: ["Romans", "Egyptians", "Greeks", "Mayans"], answer: "Egyptians" },
          { id: 35, quiz: "Where was Napoleon from?", variant: ["Spain", "Italy", "France", "Germany"], answer: "France" },
        ],
      },
      {
        level: "Intermediate",
        questions: [
          { id: 36, quiz: "Year of French Revolution?", variant: ["1789", "1799", "1801", "1765"], answer: "1789" },
          { id: 37, quiz: "Who wrote Constitution of USA?", variant: ["Lincoln", "Jefferson", "Franklin", "Adams"], answer: "Jefferson" },
          { id: 38, quiz: "Cold War was between?", variant: ["USA & USSR", "USA & UK", "China & Japan", "India & Pakistan"], answer: "USA & USSR" },
          { id: 39, quiz: "Year of Independence of India?", variant: ["1947", "1950", "1945", "1948"], answer: "1947" },
          { id: 40, quiz: "Mahatma Gandhi led which movement?", variant: ["Civil Rights", "Quit India", "WWII", "Revolution"], answer: "Quit India" },
        ],
      },
      {
        level: "Advanced",
        questions: [
          { id: 41, quiz: "Who was Julius Caesar?", variant: ["Greek King", "Roman Leader", "French Emperor", "Egyptian Pharaoh"], answer: "Roman Leader" },
          { id: 42, quiz: "Battle of Hastings in?", variant: ["1066", "1215", "1492", "1776"], answer: "1066" },
          { id: 43, quiz: "Fall of Berlin Wall year?", variant: ["1989", "1991", "1980", "1990"], answer: "1989" },
          { id: 44, quiz: "First human in space?", variant: ["Armstrong", "Gagarin", "Glenn", "Buzz"], answer: "Gagarin" },
          { id: 45, quiz: "Who was Winston Churchill?", variant: ["US President", "UK PM", "French Leader", "German Chancellor"], answer: "UK PM" },
        ],
      },
    ],
  },

  // Chemistry
  {
    id: 4,
    category: "Chemistry",
   levels: [
      {
        level: "Beginner",
        questions: [
          { id: 46, quiz: "What is H2O?", variant: ["Hydrogen", "Oxygen", "Water", "Helium"], answer: "Water" },
          { id: 47, quiz: "What is the symbol for Gold?", variant: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
          { id: 48, quiz: "Which gas do plants need?", variant: ["O2", "N2", "CO2", "H2"], answer: "CO2" },
          { id: 49, quiz: "What is the atomic number of Hydrogen?", variant: ["0", "1", "2", "3"], answer: "1" },
          { id: 50, quiz: "Which element has the symbol O?", variant: ["Osmium", "Oxygen", "Oganesson", "Oxide"], answer: "Oxygen" },
        ],
      },
      {
        level: "Intermediate",
        questions: [
          { id: 51, quiz: "What is NaCl?", variant: ["Sodium", "Salt", "Chlorine", "Nitrogen"], answer: "Salt" },
          { id: 52, quiz: "What is the pH of water?", variant: ["5", "6", "7", "8"], answer: "7" },
          { id: 53, quiz: "Which gas is used in balloons?", variant: ["Hydrogen", "Helium", "Nitrogen", "Oxygen"], answer: "Helium" },
          { id: 54, quiz: "How many elements are in the periodic table?", variant: ["108", "118", "128", "138"], answer: "118" },
          { id: 55, quiz: "What is the chemical symbol for Iron?", variant: ["Ir", "In", "Fe", "I"], answer: "Fe" },
        ],
      },
      {
        level: "Advanced",
        questions: [
          { id: 56, quiz: "Who created the periodic table?", variant: ["Einstein", "Bohr", "Mendeleev", "Curie"], answer: "Mendeleev" },
          { id: 57, quiz: "What is an isotope?", variant: ["Same protons, diff neutrons", "Diff protons", "Same electrons", "Same neutrons"], answer: "Same protons, diff neutrons" },
          { id: 58, quiz: "What is the formula for methane?", variant: ["CH4", "CO2", "C2H6", "C2H4"], answer: "CH4" },
          { id: 59, quiz: "What is the molar mass of water?", variant: ["16", "17", "18", "19"], answer: "18" },
          { id: 60, quiz: "Which acid is found in the stomach?", variant: ["Sulfuric", "Nitric", "Hydrochloric", "Phosphoric"], answer: "Hydrochloric" },
        ],
      },
    ],

  },
  {
  id: 5,
  category: "Biology",
  levels: [
    {
      level: "Beginner",
      questions: [
        { id: 61, quiz: "What is the basic unit of life?", variant: ["Atom", "Molecule", "Cell", "Organ"], answer: "Cell" },
        { id: 62, quiz: "Which organ pumps blood?", variant: ["Brain", "Liver", "Heart", "Lungs"], answer: "Heart" },
        { id: 63, quiz: "What do plants need to make food?", variant: ["Oxygen", "Sunlight", "Soil", "Water"], answer: "Sunlight" },
        { id: 64, quiz: "Which organ helps in breathing?", variant: ["Liver", "Lungs", "Kidney", "Heart"], answer: "Lungs" },
        { id: 65, quiz: "Which gas do humans breathe in?", variant: ["Carbon Dioxide", "Hydrogen", "Nitrogen", "Oxygen"], answer: "Oxygen" },
      ]
    },
    {
      level: "Intermediate",
      questions: [
        { id: 66, quiz: "Which blood cells fight infection?", variant: ["Red", "White", "Platelets", "Plasma"], answer: "White" },
        { id: 67, quiz: "What is DNA?", variant: ["Protein", "Enzyme", "Genetic material", "Hormone"], answer: "Genetic material" },
        { id: 68, quiz: "How many chambers does the heart have?", variant: ["2", "3", "4", "5"], answer: "4" },
        { id: 69, quiz: "What is the powerhouse of the cell?", variant: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], answer: "Mitochondria" },
        { id: 70, quiz: "Which part of the brain controls balance?", variant: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], answer: "Cerebellum" },
      ]
    },
    {
      level: "Advanced",
      questions: [
        { id: 71, quiz: "What process makes identical cells?", variant: ["Meiosis", "Photosynthesis", "Mitosis", "Fermentation"], answer: "Mitosis" },
        { id: 72, quiz: "Which hormone regulates blood sugar?", variant: ["Adrenaline", "Insulin", "Estrogen", "Thyroxine"], answer: "Insulin" },
        { id: 73, quiz: "What is the function of hemoglobin?", variant: ["Fight infection", "Digest food", "Transport oxygen", "Form bones"], answer: "Transport oxygen" },
        { id: 74, quiz: "Where does fertilization occur in humans?", variant: ["Uterus", "Ovary", "Vagina", "Fallopian tube"], answer: "Fallopian tube" },
        { id: 75, quiz: "Which system controls body functions?", variant: ["Digestive", "Respiratory", "Nervous", "Circulatory"], answer: "Nervous" },
      ]
    }
  ]
},

  {
  id: 6,
  category: "Physics",
  levels: [
    {
      level: "Beginner",
      questions: [
        { id: 76, quiz: "What is the unit of force?", variant: ["Joule", "Watt", "Newton", "Pascal"], answer: "Newton" },
        { id: 77, quiz: "What is gravity?", variant: ["Magnetic force", "Friction", "Attractive force", "Heat energy"], answer: "Attractive force" },
        { id: 78, quiz: "Which object reflects light?", variant: ["Mirror", "Paper", "Wood", "Glass"], answer: "Mirror" },
        { id: 79, quiz: "What is the speed of light?", variant: ["300 km/s", "300,000 km/s", "3,000 km/s", "30,000 km/s"], answer: "300,000 km/s" },
        { id: 80, quiz: "Which instrument measures temperature?", variant: ["Barometer", "Thermometer", "Speedometer", "Voltmeter"], answer: "Thermometer" },
      ]
    },
    {
      level: "Intermediate",
      questions: [
        { id: 81, quiz: "What is the unit of power?", variant: ["Watt", "Newton", "Joule", "Ampere"], answer: "Watt" },
        { id: 82, quiz: "Which law explains motion?", variant: ["Ohm's law", "Newton’s laws", "Hooke’s law", "Boyle’s law"], answer: "Newton’s laws" },
        { id: 83, quiz: "What causes lightning?", variant: ["Heat", "Friction", "Electricity", "Rain"], answer: "Electricity" },
        { id: 84, quiz: "What is potential energy?", variant: ["Energy in motion", "Stored energy", "Heat energy", "Sound energy"], answer: "Stored energy" },
        { id: 85, quiz: "Which wave needs a medium?", variant: ["Light", "Radio", "Sound", "Microwave"], answer: "Sound" },
      ]
    },
    {
      level: "Advanced",
      questions: [
        { id: 86, quiz: "What is Ohm's law formula?", variant: ["V = IR", "F = ma", "P = VI", "E = mc²"], answer: "V = IR" },
        { id: 87, quiz: "What is the SI unit of electric current?", variant: ["Watt", "Ampere", "Volt", "Ohm"], answer: "Ampere" },
        { id: 88, quiz: "Who developed the theory of relativity?", variant: ["Newton", "Einstein", "Tesla", "Bohr"], answer: "Einstein" },
        { id: 89, quiz: "What is frequency measured in?", variant: ["Volts", "Newtons", "Hertz", "Joules"], answer: "Hertz" },
        { id: 90, quiz: "Which particle has no charge?", variant: ["Proton", "Electron", "Neutron", "Ion"], answer: "Neutron" },
      ]
    }
  ]
}

];
