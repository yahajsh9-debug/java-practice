window.practiceBanks[3] = [
  {
    topic: "Arrays", difficulty: 1, type: "dropdown",
    prompt: "Initialize an array with the three measured depths.",
    code: "int shallow = 3, middle = 8, deep = 12;\nint[] depths = {{0}};",
    slots: [{ choices: ["new int[shallow, middle, deep]", "new int[] {shallow, middle, deep}", "new int[3] {shallow, middle, deep}", "[shallow, middle, deep]"], answer: 1 }],
    explanation: "Use braces for the values in an array initializer. Java counts the elements for you."
  },
  {
    topic: "Array indexing", difficulty: 1,
    prompt: "Which expression accesses the cell containing 'X'?",
    code: "char[][] seats = {\n    {'O', 'O', 'O'},\n    {'O', 'O', 'X'},\n    {'O', 'O', 'O'}\n};",
    choices: ["seats[2][1]", "seats[1][1]", "seats[2][3]", "seats[1][2]"], answer: 3,
    explanation: "Both indexes start at zero. The second row has index 1, and the third column has index 2."
  },
  {
    topic: "Numeric literals", difficulty: 1,
    prompt: "Which declaration compiles and stores exactly four billion as a whole number?",
    choices: ["long distance = 4000000000L;", "int distance = 4000000000L;", "long distance = 4000000000;", "short distance = 4000000000;"], answer: 0,
    explanation: "This value exceeds the int range. The L suffix makes the literal a long, which fits."
  },
  {
    topic: "Casting", difficulty: 1,
    prompt: "What value is assigned to seats?",
    code: "double estimate = 14.95;\nint seats = (int) estimate;",
    choices: ["15", "14.95", "14", "0"], answer: 2,
    explanation: "Casting from double to int discards the fraction rather than rounding it."
  },
  {
    topic: "Parsing", difficulty: 1,
    prompt: "The value of input is \"7.125\". Which method call returns a primitive double?",
    choices: ["Double.valueOf(input)", "Double.parseDouble(input)", "Integer.parseInt(input)", "String.valueOf(input)"], answer: 1,
    explanation: "Double.parseDouble reads the decimal text and returns a primitive double."
  },
  {
    topic: "Constants", difficulty: 1, type: "wordBank",
    prompt: "Make FEE a publicly accessible class constant. Use the conventional modifier order: access modifier, then static, then final.",
    code: "public class Booking {\n    {{0}} {{1}} {{2}} double FEE = 12.5;\n}",
    bank: ["final", "private", "static", "volatile", "public", "protected"],
    slots: [{ answer: 4 }, { answer: 2 }, { answer: 0 }],
    explanation: "public permits access, static puts the field on the class, and final prevents reassignment."
  },
  {
    topic: "Object creation", difficulty: 1, type: "dropdown",
    prompt: "Create a Report with its accessible no-argument constructor, then invoke its instance method print().",
    code: "Report report = {{0}};\n{{1}};",
    slots: [{ choices: ["Report()", "new Report()", "new Report"], answer: 1 }, { choices: ["Report.print()", "report.print", "report.print()"], answer: 2 }],
    explanation: "new Report() creates the object. Call the method on its reference with report.print()."
  },
  {
    topic: "Access control", difficulty: 1,
    prompt: "Which class can use new Tracker().record() with the definitions shown?",
    code: "package events;\n\nclass Tracker {\n    public void record() {}\n}",
    choices: ["A class in events even if it does not extend Tracker", "Any class in another package that imports Tracker", "Only a nested class inside Tracker", "Any class in any package"], answer: 0,
    explanation: "A top-level class without public is available within its package. The caller in events can access Tracker and its public method."
  },
  {
    topic: "Instance methods", difficulty: 1, type: "wordBank",
    prompt: "Inside this class, initialize its private instance field on a new object and call the instance method.",
    code: "class Lamp {\n    private boolean ready;\n    void light() { System.out.println(ready); }\n\n    public static void main(String[] args) {\n        Lamp lamp = {{0}};\n        {{1}} = true;\n        {{2}};\n    }\n}",
    bank: ["Lamp.light()", "lamp.ready", "Lamp.ready", "new Lamp()", "lamp.light()", "Lamp()"],
    slots: [{ answer: 3 }, { answer: 1 }, { answer: 4 }],
    explanation: "main is in the same class, so it can access the private field through lamp. Both the field and the method belong to that instance."
  },
  {
    topic: "Two-dimensional arrays", difficulty: 1,
    prompt: "Which initializer creates two rows of three double values?",
    choices: ["double[][] grid = {{1, 2}, {3, 4}, {5, 6}};", "double[][] grid = {1, 2, 3, 4, 5, 6};", "double[][] grid = {{1, 2, 3}, {4, 5, 6}};", "double[] grid = {1, 2, 3, 4, 5, 6};"], answer: 2,
    explanation: "The outer braces hold two row arrays. Each inner brace pair supplies three values, which widen to double."
  },
  {
    topic: "Constructors", difficulty: 1,
    prompt: "What does gallons = amount do in the second constructor?",
    code: "public class Tank {\n    protected int gallons;\n\n    public Tank() {\n        gallons = 0;\n    }\n\n    public Tank(int amount) {\n        gallons = amount;\n    }\n}",
    choices: ["Declares a local gallons variable", "Assigns amount to this.gallons", "Changes the constructor argument supplied by the caller", "Calls the no-argument constructor"], answer: 1,
    explanation: "No local variable or parameter named gallons hides the field. The assignment is equivalent to this.gallons = amount."
  },
  {
    topic: "Static context", difficulty: 1,
    prompt: "Which changes make main compile while keeping value and show() as instance members?",
    code: "class Counter {\n    private int value;\n    protected void show() { System.out.println(value); }\n\n    public static void main(String[] args) {\n        Counter counter = new Counter();\n        value = 5;\n        show();\n    }\n}",
    choices: ["Make value and show() public", "Use Counter.value and Counter.show()", "Add this. before both value and show()", "Use counter.value and counter.show()"], answer: 3,
    explanation: "Static main has no current instance. Use the counter object to reach both instance members."
  },
  {
    topic: "Passing values", difficulty: 1,
    prompt: "What does printCount() print?",
    code: "static void printCount() {\n    int count = 20;\n    raise(count);\n    System.out.println(count);\n}\n\nstatic void raise(int count) {\n    count += 5;\n}",
    choices: ["20", "25", "5", "0"], answer: 0,
    explanation: "The int parameter is a copy. Changing it inside raise leaves printCount's variable at 20."
  },
  {
    topic: "Formatted output", difficulty: 2,
    prompt: "What does this formatting call print before the newline?",
    code: "System.out.printf(Locale.US, \"%07.2f%n\", 7.25);",
    choices: ["7.25000", "00007.25", "0007.25", "7.25"], answer: 2,
    explanation: "The precision is two digits after the decimal. The width is seven characters, so zero padding adds three zeroes on the left."
  },
  {
    topic: "Scanner", difficulty: 2,
    prompt: "What is the exact value of tail? The brackets in the choices make spaces visible.",
    code: "Scanner input = new Scanner(\"4 Green 8 Blue 9 Red\");\nString first = input.next();\nString second = input.next();\nint third = input.nextInt();\nString tail = input.nextLine();",
    choices: ["[Blue 9 Red]", "[ Green 8 Blue 9 Red]", "[8 Blue 9 Red]", "[ Blue 9 Red]"], answer: 3,
    explanation: "After reading 8 as the integer token, the scanner is still on the same line. nextLine() includes the space immediately after 8."
  },
  {
    topic: "Console input", difficulty: 2, type: "dropdown",
    prompt: "Read a product code such as 004712 as one text token. Keep the zeroes at the front.",
    code: "import {{0}};\n\nScanner scanner = new Scanner(System.in);\nString productCode = scanner.{{1}};",
    slots: [{ choices: ["java.io.InputStream", "java.lang.Scanner", "java.util.Scanner"], answer: 2 }, { choices: ["nextInt()", "next()", "hasNext()"], answer: 1 }],
    explanation: "Scanner belongs to java.util. Its next() method returns a token as text, so the zeroes stay intact."
  },
  {
    topic: "Command-line arguments", difficulty: 2, type: "dropdown",
    prompt: "The launcher supplies words as arguments. Print all the words in the order supplied.",
    code: "public static void main(String[] words) {\n    for (String word : {{0}}) {\n        {{1}};\n    }\n}",
    slots: [{ choices: ["words.length", "words[0]", "words"], answer: 2 }, { choices: ["System.out.println(words.length)", "System.out.println(word)", "System.out.println(words[0])"], answer: 1 }],
    explanation: "The enhanced for loop visits each element of words in order. Its word variable holds the current element."
  },
  {
    topic: "ArrayList removal", difficulty: 2, type: "dropdown",
    prompt: "Process the first invoice, remove it, and repeat until the list is empty. Complete the loop without skipping any invoice.",
    code: "int i = 0;\nwhile (i < invoices.size()) {\n    process(invoices.get(i));\n    {{0}};\n}",
    slots: [{ choices: ["invoices.remove(i++)", "invoices.remove(++i)", "invoices.remove(i)", "invoices.remove(i + 1)"], answer: 2 }],
    explanation: "Removing index zero shifts the next item into index zero. Keep i at zero to process the whole list."
  },
  {
    topic: "Ragged arrays", difficulty: 2, type: "dropdown",
    prompt: "Print all elements of a String array whose non-null rows may have different lengths.",
    code: "for (int row = 0; row < {{0}}; row++) {\n    for (int col = 0; col < {{1}}; col++) {\n        System.out.println({{2}});\n    }\n}",
    slots: [{ choices: ["board[0].length", "board.length", "board.length - 1"], answer: 1 }, { choices: ["board.length", "board[0].length", "board[row].length"], answer: 2 }, { choices: ["board[row]", "board[row][col]", "board[col][row]"], answer: 1 }],
    explanation: "The outer loop uses the number of rows. Each inner loop uses the length of its own row."
  },
  {
    topic: "Substring and formatting", difficulty: 2, type: "dropdown",
    prompt: "Keep the first three letters of the city and format them with their count.",
    code: "String city = \"Manila\".{{0}};\nString label = String.format(\"{{1}} (%d)\", city, {{2}});",
    slots: [{ choices: ["substring(3)", "substring(0, 3)", "substring(1, 3)"], answer: 1 }, { choices: ["%f", "%d", "%s"], answer: 2 }, { choices: ["city.length()", "city.charAt(0)", "city.indexOf('M')"], answer: 0 }],
    explanation: "substring(0, 3) keeps Man. Then %s formats Man and %d formats its length, 3."
  },
  {
    topic: "Primitive declarations", difficulty: 2, type: "wordBank",
    prompt: "Use the smallest signed integral type that fits the year, plus the natural types of the three other literals.",
    code: "{{0}} year = 2026;\n{{1}} active = false;\n{{2}} category = 'P';\n{{3}} rate = 2.5f;",
    bank: ["float", "int", "boolean", "char", "double", "byte", "short"],
    slots: [{ answer: 6 }, { answer: 2 }, { answer: 3 }, { answer: 0 }],
    explanation: "2026 fits in short but exceeds byte. false is boolean, a quoted character is char, and the f suffix makes a float."
  },
  {
    topic: "Integer overflow", difficulty: 2,
    prompt: "Which return expression computes the negative square exactly for any int input in a method that returns long?",
    code: "static long negativeSquare(int number) {\n    // Return the negative square.\n}",
    choices: ["return -(number * number);", "return -(number ^ 2);", "return (long) -(number * number);", "return -((long) number * number);"], answer: 3,
    explanation: "Widening an operand before multiplication makes the product a long. Widening the result afterward cannot undo an int overflow."
  },
  {
    topic: "Decimal parsing", difficulty: 2, type: "dropdown",
    prompt: "Convert a numeric string such as \"12\" or \"12.75\" to a primitive double.",
    code: "double number = {{0}}.{{1}}(input);",
    slots: [{ choices: ["double", "String", "Double", "Integer"], answer: 2 }, { choices: ["parseInt", "parseDouble", "format"], answer: 1 }],
    explanation: "Double.parseDouble accepts numeric text with or without a decimal point and returns a double."
  },
  {
    topic: "String references", difficulty: 2,
    prompt: "After the last line runs, what is true about first, second, and saved?",
    code: "String first = \"Blue\";\nString second = \"Blue\";\nString saved = second;\nsecond = \"Gold\";",
    choices: ["first == saved is true, and second holds Gold", "first == saved is false, and second holds Gold", "first and saved both hold Gold", "The reassignment cannot compile because strings are immutable"], answer: 0,
    explanation: "The two Blue literals share an object. Reassigning second gives that variable another reference. first and saved still refer to Blue."
  },
  {
    topic: "String case", difficulty: 2, type: "wordBank",
    prompt: "Normalize a nonempty English name such as mARCO to Marco.",
    code: "String normalized = name.{{0}}(0, 1).{{1}}(Locale.ENGLISH)\n    + name.{{2}}(1).{{3}}(Locale.ENGLISH);",
    bank: ["trim", "toLowerCase", "charAt", "toUpperCase", "substring"],
    slots: [{ answer: 4 }, { answer: 3 }, { answer: 4 }, { answer: 1 }],
    explanation: "Separate the first character from the remainder. Uppercase the first part and lowercase the second."
  },
  {
    topic: "Operator precedence", difficulty: 2,
    prompt: "What is the value of result? All operands are ints.",
    code: "int result = (2 + 3) * 4 - 9 / 2 + 11 % 3;",
    choices: ["16", "18", "19", "14"], answer: 1,
    explanation: "The product is 20, the integer quotient is 4, and the remainder is 2. The sum is 20 - 4 + 2, or 18."
  },
  {
    topic: "Command-line argument indexing", difficulty: 2, type: "dropdown",
    prompt: "Send all flags, including the last one, to handleFlag in command-line order.",
    code: "static void processFlags(String[] flags) {\n    for (int index = 0; index {{0}} flags.length; index++) {\n        handleFlag({{1}});\n    }\n}",
    slots: [{ choices: ["<=", "<", "=="], answer: 1 }, { choices: ["flags[index]", "flags.length", "flags.charAt(index)"], answer: 0 }],
    explanation: "The last index is flags.length - 1, so use a strict upper bound and pass the element at each index."
  },
  {
    topic: "Early returns", difficulty: 2, type: "dropdown",
    prompt: "Check whether all non-null codes have three or fewer characters. Stop at the first code that is too long.",
    code: "static boolean shortCodes(String[] codes) {\n    for (String code : codes) {\n        if (code.length() {{0}} 3) {\n            return {{1}};\n        }\n    }\n    return true;\n}",
    slots: [{ choices: [">=", ">", "<="], answer: 1 }, { choices: ["true", "false"], answer: 1 }],
    explanation: "A three-character code is allowed. A length greater than three returns false immediately."
  },
  {
    topic: "Countdown loops", difficulty: 2,
    prompt: "Which loop prints every integer from a nonnegative start down to and including zero?",
    choices: ["for (int i = start; i > 0; i--) System.out.println(i);", "for (int i = start; i >= 0; i++) System.out.println(i);", "for (int i = start; i <= 0; i--) System.out.println(i);", "for (int i = start; i >= 0; i--) System.out.println(i);"], answer: 3,
    explanation: "Print before decrementing, and keep the loop running when i equals zero so zero is included."
  },
  {
    topic: "Loop repair", difficulty: 2, type: "wordBank",
    prompt: "Finish this timer so it prints each number from 30 down to 1. The while condition must still be true at zero so the break handles that value.",
    code: "int timer = 30;\nwhile (timer {{0}} 0) {\n    if (timer {{1}} 0) {\n        break;\n    }\n    System.out.println(timer);\n    timer{{2}};\n}",
    bank: ["++", "==", "<=", "--", ">=", "!="],
    slots: [{ answer: 4 }, { answer: 1 }, { answer: 3 }],
    explanation: "The condition includes zero, the equality check breaks there, and -- decreases the timer after each print."
  },
  {
    topic: "Tokenizing a line", difficulty: 2, type: "wordBank",
    prompt: "Read one line from the console, then print each word separately. The line may contain leading or trailing spaces.",
    code: "Scanner console = new Scanner(System.in);\nString line = console.{{0}};\nScanner words = new Scanner(line);\nwhile (words.{{1}}) {\n    System.out.println(words.{{2}});\n}",
    bank: ["nextInt()", "nextLine()", "hasNext()", "hasNextLine()", "next()", "toString()"],
    slots: [{ answer: 1 }, { answer: 2 }, { answer: 4 }],
    explanation: "nextLine() reads just one line. The second scanner walks over that line's tokens using hasNext() and next()."
  },
  {
    topic: "Inheritance", difficulty: 2, type: "wordBank",
    prompt: "Finish the subclass so it calls the parent constructor and marks its new toString() implementation. Account has an accessible Account(int) constructor.",
    code: "class RewardAccount {{0}} Account {\n    RewardAccount(int points) {\n        {{1}}(points);\n    }\n\n    {{2}}\n    public String toString() {\n        return \"Reward account\";\n    }\n}",
    bank: ["super", "implements", "@Override", "Account", "@Overload", "extends"],
    slots: [{ answer: 5 }, { answer: 0 }, { answer: 2 }],
    explanation: "extends declares the subclass, super calls the parent constructor, and @Override checks the method signature."
  },
  {
    topic: "Prefix and postfix", difficulty: 3,
    prompt: "Which two values are printed in order?",
    code: "int a = 4, b = 8;\nSystem.out.println(++a * b--);\nSystem.out.println(a-- + ++b);",
    choices: ["32 then 12", "40 then 12", "40 then 13", "35 then 13"], answer: 2,
    explanation: "The first line computes 5 times 8, then b becomes 7. The next line uses a's old value 5 and b's incremented value 8."
  },
  {
    topic: "Compound assignment", difficulty: 3,
    prompt: "What does the final statement print?",
    code: "double reading = 31;\nreading %= -6d;\nreading -= 4f;\nreading *= -2;\nSystem.out.println(reading);",
    choices: ["-6.0", "6.0", "10.0", "-2.0"], answer: 1,
    explanation: "31 % -6 is 1.0. After subtracting four the value is -3.0, and multiplying by -2 makes it 6.0."
  },
  {
    topic: "Characters and wrapper parsing", difficulty: 3,
    prompt: "What happens when the Java 8 code runs?",
    code: "char letter = 66;\nSystem.out.println(letter);\nlong count = 66;\nSystem.out.println(count);\nfloat measure = Float.valueOf(\"-66.5\");\nSystem.out.println(measure);\nshort value = Short.valueOf(\"66.5\");\nSystem.out.println(value);",
    choices: ["It prints B, 66, and -66.5, then throws NumberFormatException", "It prints B, 66, -66.5, and 66", "It prints 66, 66.0, -66.5, and 66", "It fails to compile because 66 cannot be assigned to a char"], answer: 0,
    explanation: "char 66 is B, long prints 66, and Float accepts the fractional text. Short expects whole-number text, so the last conversion throws."
  },
  {
    topic: "Variable shadowing", difficulty: 3,
    prompt: "Which values are printed when run() executes?",
    code: "class Level {\n    int rank = 7;\n\n    Level() {\n        int rank = 3;\n        System.out.println(rank);\n    }\n\n    static void run() {\n        Level item = new Level();\n        int rank = 12;\n        System.out.println(rank);\n        System.out.println(item.rank);\n    }\n}",
    choices: ["7, 12, 3", "7, 3, 12", "12, 3, 7", "3, 12, 7"], answer: 3,
    explanation: "The constructor prints its local variable. Then run prints its own local variable and the unchanged instance field."
  },
  {
    topic: "Switch fall-through", difficulty: 3,
    prompt: "What does price('W') return?",
    code: "static int price(char day) {\n    int price = 0;\n    switch (day) {\n        case 'H': price = 30; break;\n        case 'W': price = 15;\n        case 'E': price += 5; break;\n        default: price = 50;\n    }\n    return price;\n}",
    choices: ["15", "20", "5", "50"], answer: 1,
    explanation: "W assigns 15. Without a break, the next case adds 5, then breaks. The method returns 20."
  },
  {
    topic: "Duplicate detection", difficulty: 3, type: "dropdown",
    prompt: "Compare every pair of distinct indexes once, stopping immediately if a duplicate is found.",
    code: "static boolean hasDuplicate(int[] values) {\n    for (int left = 0; left < {{0}}; left++) {\n        for (int right = {{1}}; right < values.length; {{2}}) {\n            if (values[left] == values[right]) return true;\n        }\n    }\n    return false;\n}",
    slots: [{ choices: ["values.length - 2", "values.length - 1", "0"], answer: 1 }, { choices: ["left", "0", "left + 1"], answer: 2 }, { choices: ["right++", "right--", "left++"], answer: 0 }],
    explanation: "Start the second index just after the first so a value never compares with itself. Return as soon as a matching pair is found."
  },
  {
    topic: "Java 8 switch", difficulty: 3,
    prompt: "Which condition can become a direct Java 8 switch on the same variable, with fixed case labels and the same behavior for all inputs described?",
    choices: [
      "Compare an int score against score >= 80 and score >= 50 using two case labels",
      "Compare a double gpa with 3.0 and 4.0",
      "Compare a non-null String color with \"red\".equals(color) and \"blue\".equals(color)",
      "Compare a String color with color == \"red\" and color == \"blue\" for any non-null String"
    ], answer: 2,
    explanation: "A Java 8 switch on a String matches case labels by text. It cannot use double selectors or range labels, and String's == checks object identity."
  },
  {
    topic: "Boolean boundaries", difficulty: 3,
    prompt: "Approve a reservation when a guest is older than 55 and has at least 500 credits, or is at least 18 and has more than 900 credits. Which test includes exactly the right boundary values?",
    choices: [
      "(age > 55 && credits >= 500) || (age >= 18 && credits > 900)",
      "(age >= 55 && credits >= 500) || (age >= 18 && credits >= 900)",
      "(age > 55 && credits > 500) || (age > 18 && credits > 900)",
      "(age > 55 || credits >= 500) && (age >= 18 || credits > 900)"
    ], answer: 0,
    explanation: "Each branch requires its age and credits conditions together. The two branches are alternatives. At least includes equality."
  },
  {
    topic: "Parameters and loop scope", difficulty: 3,
    prompt: "What are the caller's points, the parameter value just after points++, and the scope of i at the print statement?",
    code: "static void play() {\n    int points = 30;\n    for (int i = 0; i < 4; i++) {\n        add(points);\n    }\n    System.out.println(points);\n}\n\nstatic void add(int points) {\n    points++;\n}",
    choices: ["34, 34, i is in scope", "30, 30, i is out of scope", "31, 31, i is in scope", "30, 31, i is out of scope"], answer: 3,
    explanation: "Each call increments a copy from 30 to 31. The caller keeps 30, and i only exists within the for statement."
  },
  {
    topic: "Exception flow", difficulty: 3,
    prompt: "Which messages appear, in order?",
    code: "int divisor = 0;\ntry {\n    int result = 12 / divisor;\n    System.out.println(\"computed\");\n} catch (ArithmeticException error) {\n    System.out.println(\"arithmetic\");\n} catch (Exception error) {\n    System.out.println(\"other\");\n} finally {\n    System.out.println(\"finished\");\n}",
    choices: ["computed, finished", "arithmetic, finished", "arithmetic, other, finished", "finished"], answer: 1,
    explanation: "Integer division by zero throws before the first print. The matching ArithmeticException catch runs, followed by finally."
  }
];
