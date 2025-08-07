// data.ts
import type { SubjectType } from "./types";

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

  // Biology
  {
    id: 5,
    category: "Biology",
    levels: [
    {
      level: "Beginner",
      questions: [
        { id: 76, quiz: "What is the basic unit of life?", variant: ["Cell", "Atom", "Molecule", "Organ"], answer: "Cell" },
        { id: 77, quiz: "What do plants make during photosynthesis?", variant: ["Oxygen", "Carbon", "Water", "Glucose"], answer: "Glucose" },
        { id: 78, quiz: "Which organ pumps blood?", variant: ["Liver", "Brain", "Lung", "Heart"], answer: "Heart" },
        { id: 79, quiz: "Which organ helps in breathing?", variant: ["Lungs", "Heart", "Liver", "Kidney"], answer: "Lungs" },
        { id: 80, quiz: "What do roots do?", variant: ["Make food", "Support and absorb", "Breathe", "Grow flowers"], answer: "Support and absorb" },
      ],
    },
    {
      level: "Intermediate",
      questions: [
        { id: 81, quiz: "Which part of cell contains DNA?", variant: ["Ribosome", "Mitochondria", "Nucleus", "Cytoplasm"], answer: "Nucleus" },
        { id: 82, quiz: "Which blood cells fight disease?", variant: ["Red", "White", "Platelets", "Plasma"], answer: "White" },
        { id: 83, quiz: "What is the function of chlorophyll?", variant: ["Gives color", "Absorbs sunlight", "Stores water", "Heats plant"], answer: "Absorbs sunlight" },
        { id: 84, quiz: "Which system controls body activities?", variant: ["Digestive", "Respiratory", "Nervous", "Excretory"], answer: "Nervous" },
        { id: 85, quiz: "What is the human body's biggest organ?", variant: ["Heart", "Lung", "Skin", "Liver"], answer: "Skin" },
      ],
    },
    {
      level: "Advanced",
      questions: [
        { id: 86, quiz: "What is the powerhouse of the cell?", variant: ["Nucleus", "Mitochondria", "Chloroplast", "Golgi body"], answer: "Mitochondria" },
        { id: 87, quiz: "Who proposed theory of evolution?", variant: ["Newton", "Darwin", "Einstein", "Pasteur"], answer: "Darwin" },
        { id: 88, quiz: "What is osmosis?", variant: ["Movement of water", "Protein making", "DNA copying", "Cell division"], answer: "Movement of water" },
        { id: 89, quiz: "Which vitamin from sunlight?", variant: ["A", "B", "C", "D"], answer: "D" },
        { id: 90, quiz: "Function of hemoglobin?", variant: ["Clot blood", "Transport oxygen", "Break sugar", "Store fat"], answer: "Transport oxygen" },
      ],
    },
  ],
  },

  // Physics
  {
    id: 6,
    category: "Physics",
    levels: [
    {
      level: "Beginner",
      questions: [
        { id: 61, quiz: "What is the unit of force?", variant: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
        { id: 62, quiz: "What does a thermometer measure?", variant: ["Pressure", "Speed", "Temperature", "Mass"], answer: "Temperature" },
        { id: 63, quiz: "Which object attracts iron?", variant: ["Copper", "Wood", "Plastic", "Magnet"], answer: "Magnet" },
        { id: 64, quiz: "What is gravity?", variant: ["Push force", "Magnetism", "Pull force", "Friction"], answer: "Pull force" },
        { id: 65, quiz: "Speed = ?", variant: ["Time/Distance", "Distance×Time", "Distance/Time", "Mass×Acceleration"], answer: "Distance/Time" },
      ],
    },
    {
      level: "Intermediate",
      questions: [
        { id: 66, quiz: "What is the SI unit of energy?", variant: ["Watt", "Joule", "Volt", "Pascal"], answer: "Joule" },
        { id: 67, quiz: "What is work?", variant: ["Force×Distance", "Speed×Time", "Energy×Mass", "Power×Time"], answer: "Force×Distance" },
        { id: 68, quiz: "Which law explains motion?", variant: ["Boyle's Law", "Ohm's Law", "Newton's Laws", "Kepler's Law"], answer: "Newton's Laws" },
        { id: 69, quiz: "What is the unit of electric current?", variant: ["Volt", "Ohm", "Ampere", "Watt"], answer: "Ampere" },
        { id: 70, quiz: "Who discovered gravity?", variant: ["Einstein", "Newton", "Galileo", "Faraday"], answer: "Newton" },
      ],
    },
    {
      level: "Advanced",
      questions: [
        { id: 71, quiz: "What is the speed of light?", variant: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"], answer: "300,000 km/s" },
        { id: 72, quiz: "What is power?", variant: ["Energy/Time", "Force×Mass", "Work×Time", "Mass/Speed"], answer: "Energy/Time" },
        { id: 73, quiz: "What is Ohm's Law?", variant: ["V=IR", "F=ma", "E=mc^2", "P=VI"], answer: "V=IR" },
        { id: 74, quiz: "Unit of frequency?", variant: ["Watt", "Hertz", "Joule", "Volt"], answer: "Hertz" },
        { id: 75, quiz: "Who developed the theory of relativity?", variant: ["Newton", "Bohr", "Einstein", "Tesla"], answer: "Einstein" },
      ],
    },
  ],
  },
];
