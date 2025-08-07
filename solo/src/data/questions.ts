import { SubjectType } from "../types";

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
      // Already provided by you (see your last message)
    ],
  },

  // Biology
  {
    id: 5,
    category: "Biology",
    levels: [
      // Tashlab ketgan eding, hozi yozib beraman
    ],
  },

  // Physics
  {
    id: 6,
    category: "Physics",
    levels: [
      // Tashlab ketgan eding, hozi yozib beraman
    ],
  },
];
