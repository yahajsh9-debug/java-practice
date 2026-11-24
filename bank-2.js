window.practiceBanks[2] = [
  {
    topic: "Integral types", difficulty: 1,
    prompt: "Which type can store an exact count of 3,400,000,000 as a signed whole number?",
    choices: ["byte", "short", "long", "int"], answer: 2,
    explanation: "An int stops at 2,147,483,647. A long can hold the count. Write the literal as 3400000000L."
  },
  {
    topic: "Casting", difficulty: 1,
    prompt: "What does this code print?",
    code: "double average = -6.8;\nint whole = (int) average;\nSystem.out.println(whole);",
    choices: ["-7", "-6.8", "6", "-6"], answer: 3,
    explanation: "A cast to int drops the fractional part toward zero, so -6.8 becomes -6."
  },
  {
    topic: "Parsing", difficulty: 1,
    prompt: "Which method takes a numeric String and directly returns a primitive double?",
    choices: ["Double.parseDouble(text)", "Double.valueOf(text)", "String.valueOf(text)", "Integer.parseInt(text)"], answer: 0,
    explanation: "Double.parseDouble returns a primitive double. Double.valueOf returns a Double object."
  },
  {
    topic: "Arrays", difficulty: 1, type: "wordBank",
    prompt: "Create an int array with two elements. Use the explicit new-array form.",
    code: "int first = 12;\nint second = 18;\n{{0}} scores = {{1}} {{2}};",
    bank: ["int", "{first, second}", "int[]", "new int[2]", "new int[]", "[first, second]"],
    slots: [{ answer: 2 }, { answer: 4 }, { answer: 1 }],
    explanation: "int[] declares the array type. With an initializer after new int[], the brace list supplies both the length and the values."
  },
  {
    topic: "Access control", difficulty: 1,
    prompt: "Which code can call log() through a Logger object? Logger is a top-level class.",
    code: "package club;\n\nclass Logger {\n    public void log() {}\n}",
    choices: ["Any class in any package", "Any class in package club", "Only subclasses in package club", "Only the Logger class"], answer: 1,
    explanation: "Logger has package access, so code in club can use the class and call its public method."
  },
  {
    topic: "Console input", difficulty: 1, type: "dropdown",
    prompt: "Read a one-word membership code from standard input and store it as text, preserving leading zeroes.",
    code: "import java.util.Scanner;\n\nScanner input = new Scanner({{0}});\nString code = input.{{1}};",
    slots: [{ choices: ["System.out", "System.in", "System.err"], answer: 1 }, { choices: ["next()", "nextInt()", "hasNext()"], answer: 0 }],
    explanation: "System.in is standard input. next() reads one token as a String and keeps its leading zeroes."
  },
  {
    topic: "String formatting", difficulty: 2, type: "dropdown",
    prompt: "Keep the first four letters of the name. Format the shortened name and its length.",
    code: "String name = \"Cameron\".{{0}};\nString message = String.format(\"{{1}} has {{2}} letters\", name, name.length());",
    slots: [{ choices: ["substring(4)", "substring(0, 3)", "substring(0, 4)"], answer: 2 }, { choices: ["%d", "%s", "%f"], answer: 1 }, { choices: ["%d", "%f", "%c"], answer: 0 }],
    explanation: "substring(0, 4) keeps indexes 0 through 3. %s formats the text, and %d formats the int length."
  },
  {
    topic: "Arithmetic", difficulty: 2, type: "wordBank",
    prompt: "Return the negative of the input squared for inputs from -1000 to 1000.",
    code: "static int negativeSquare(int value) {\n    return {{0}}(value {{1}} value);\n}",
    bank: ["^", "-", "+", "/", "*"],
    slots: [{ answer: 1 }, { answer: 4 }],
    explanation: "Multiplying value by itself gives its square. The minus sign outside the parentheses negates it."
  },
  {
    topic: "String methods", difficulty: 2, type: "wordBank",
    prompt: "Format a nonempty English name with its first letter uppercase and the remaining letters lowercase.",
    code: "String first = name.{{0}}(0, 1).{{1}}(Locale.ENGLISH);\nString rest = name.{{2}}(1).{{3}}(Locale.ENGLISH);\nString greeting = \"Hello, \" + first + rest;",
    bank: ["charAt", "toLowerCase", "substring", "toUpperCase", "length"],
    slots: [{ answer: 2 }, { answer: 3 }, { answer: 2 }, { answer: 1 }],
    explanation: "Take the first letter and the remaining letters as separate strings, then change the case of each part."
  },
  {
    topic: "Command-line arguments", difficulty: 2, type: "dropdown",
    prompt: "Print every command-line argument in its original order. Complete the Java 8 entry point.",
    code: "public static void main({{0}} args) {\n    for (int i = 0; i < {{1}}; i++) {\n        System.out.println({{2}});\n    }\n}",
    slots: [{ choices: ["String", "int[]", "String[]"], answer: 2 }, { choices: ["args.length - 1", "args.length", "args[0]"], answer: 1 }, { choices: ["args[i]", "args[0]", "args.charAt(i)"], answer: 0 }],
    explanation: "The arguments arrive in a String array. Its valid indexes start at 0 and end just before args.length."
  },
  {
    topic: "Loops", difficulty: 2, type: "dropdown",
    prompt: "Reject a label list as soon as any label exceeds eight characters. Assume the labels are non-null.",
    code: "static boolean valid(String[] labels) {\n    {{0}} (String label : labels) {\n        if (label.length() > 8) {\n            return {{1}};\n        }\n    }\n    return true;\n}",
    slots: [{ choices: ["while", "for", "if"], answer: 1 }, { choices: ["true", "false"], answer: 1 }],
    explanation: "An enhanced for loop visits each label. The first long label returns false and ends the method."
  },
  {
    topic: "Boolean expressions", difficulty: 3,
    prompt: "A member qualifies if they are over 60 and have at least 12,000 points, or if they are at least 18 and have more than 30,000 points. Which expression matches both rules?",
    choices: [
      "(age >= 60 && points >= 12000) || (age >= 18 && points > 30000)",
      "(age > 60 && points > 12000) || (age > 18 && points >= 30000)",
      "(age > 60 && points >= 12000) || (age >= 18 && points > 30000)",
      "(age > 60 || points >= 12000) && (age >= 18 || points > 30000)"
    ], answer: 2,
    explanation: "Use && to require both parts of each rule, and || to allow either rule. Use >= for at least and > for over or more than."
  },
  {
    topic: "Method parameters", difficulty: 3,
    prompt: "What does show() print?",
    code: "static void show() {\n    if (true) {\n        int count = 10;\n        count++;\n    }\n    int count = 3;\n    addOne(count);\n    System.out.println(count - 1);\n}\n\nstatic void addOne(int count) {\n    count++;\n}",
    choices: ["2", "3", "4", "10"], answer: 0,
    explanation: "The block-local count ends with the block. addOne changes its own copy of the second count, so show prints 3 minus 1."
  },
  {
    topic: "Compound assignment", difficulty: 3,
    prompt: "What does the final statement print?",
    code: "double points = 26;\npoints %= -4d;\npoints += 5f;\npoints *= -3;\nSystem.out.println(points);",
    choices: ["-9.0", "21.0", "-21.0", "-15.0"], answer: 2,
    explanation: "The remainder is 2.0 because the dividend is positive. Adding 5 gives 7.0, which becomes -21.0 after multiplication."
  },
  {
    topic: "Scope and constructors", difficulty: 3,
    prompt: "Which three numbers are printed in order when show() runs?",
    code: "class Meter {\n    int level = 9;\n\n    Meter() {\n        int level = 2;\n        System.out.println(level);\n    }\n\n    static void show() {\n        Meter meter = new Meter();\n        { int level = 4; }\n        int level = 15;\n        System.out.println(level);\n        System.out.println(meter.level);\n    }\n}",
    choices: ["9, 15, 2", "2, 15, 9", "2, 4, 15", "15, 2, 9"], answer: 1,
    explanation: "The constructor runs first and prints its local variable. show then prints its local variable and the object's unchanged field."
  },
  {
    topic: "Switch fall-through", difficulty: 3,
    prompt: "What does fee('S') return?",
    code: "static int fee(char tier) {\n    int fee = 0;\n    switch (tier) {\n        case 'G': fee = 40; break;\n        case 'S': fee = 20;\n        case 'B': fee = 10; break;\n        default: fee = 70;\n    }\n    return fee;\n}",
    choices: ["20", "40", "70", "10"], answer: 3,
    explanation: "The S case sets fee to 20, then falls through into B. That case changes fee to 10 and breaks out of the switch."
  }
];
