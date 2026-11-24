window.practiceBanks[5] = [
  {
    difficulty: 1, topic: 'Methods',
    prompt: 'A kiosk method prints a receipt and returns no value. Which result type should it declare?',
    choices: ['String', 'boolean', 'int', 'void'], answer: 3,
    explanation: 'Use void for a method that returns no value to its caller.'
  },
  {
    difficulty: 1, topic: 'Arithmetic',
    prompt: 'A lab has 29 samples. Each full tray holds 6. Which value is stored in leftovers?',
    code: 'int leftovers = 29 % 6;',
    choices: ['4', '5', '6', '23'], answer: 1,
    explanation: 'Four full trays hold 24 samples. The remainder is 5.'
  },
  {
    difficulty: 1, topic: 'Arrays',
    prompt: 'Complete the statement that replaces the fourth reading with 31.',
    type: 'dropdown', code: 'int[] readings = {12, 19, 24, 28, 32};\nreadings[{{0}}] = {{1}};',
    slots: [{ choices: ['0', '2', '3', '4'], answer: 2 }, { choices: ['31', '28', '32'], answer: 0 }],
    explanation: 'Array indexes start at zero. The fourth reading is at index 3.'
  },
  {
    difficulty: 1, topic: 'Primitive types',
    prompt: 'A bookmark stores a single UTF-16 code unit. Which declaration uses a valid character literal?',
    choices: ["char marker = 'K';", 'char marker = "K";', "String marker = 'K';", 'char marker = K;'], answer: 0,
    explanation: 'Single quotes create a char literal. Double quotes create a String literal.'
  },
  {
    difficulty: 1, topic: 'Output',
    prompt: 'What does the label printer display?',
    code: 'int row = 7;\nint seat = 3;\nSystem.out.println("Seat " + (row + seat));',
    choices: ['Seat 73', 'Seat 7+3', 'Seat 10', 'Seat 7 3'], answer: 2,
    explanation: 'The parentheses make Java add 7 and 3 before joining the result to the label.'
  },
  {
    difficulty: 1, topic: 'Booleans',
    prompt: 'A code is accepted only when it is active and has at least two uses left. Complete the condition.',
    type: 'wordBank', code: 'if (active {{0}} usesLeft {{1}} 2) {\n    System.out.println("Accepted");\n}',
    bank: ['&&', '||', '>', '>=', '=='], slots: [{ answer: 0 }, { answer: 3 }],
    explanation: 'Both conditions must hold, so use &&. At least two includes exactly two, so use >=.'
  },
  {
    difficulty: 1, topic: 'Casting',
    prompt: 'What number does the display show?',
    code: 'double offset = -3.8;\nSystem.out.println((int) offset);',
    choices: ['-4', '3', '-3.8', '-3'], answer: 3,
    explanation: 'A cast to int drops the fractional part toward zero.'
  },
  {
    difficulty: 1, topic: 'Loops',
    prompt: 'Complete the loop so it prints every value in temperatures.',
    type: 'dropdown', code: 'int[] temperatures = {18, 21, 16};\nfor (int value {{0}} temperatures) {\n    System.out.{{1}}(value);\n}',
    slots: [{ choices: ['in', ':', ';'], answer: 1 }, { choices: ['nextInt', 'println', 'length'], answer: 1 }],
    explanation: 'The colon separates the loop variable from the array. println prints the value and ends the line.'
  },
  {
    difficulty: 2, topic: 'Strings',
    prompt: 'A library code is exactly six letters long. Complete the statement to display its first three letters followed by their count.',
    type: 'dropdown', code: 'String code = "ORCHID";\nString prefix = code.{{0}};\nSystem.out.printf("%s (%{{1}})%n", prefix, prefix.{{2}});',
    slots: [{ choices: ['substring(3)', 'substring(0, 3)', 'charAt(3)'], answer: 1 }, { choices: ['c', 'f', 'd'], answer: 2 }, { choices: ['length', 'length()', 'size()'], answer: 1 }],
    explanation: 'substring takes indexes 0 through 2 here. length() gives the integer count, which %d displays.'
  },
  {
    difficulty: 2, topic: 'Switch',
    prompt: 'Which value does the method return for zone 2?',
    code: 'static int toll(int zone) {\n    int price = 0;\n    switch (zone) {\n        case 1: price = 6; break;\n        case 2: price = 9;\n        case 3: price += 4; break;\n        default: price = 12;\n    }\n    return price;\n}',
    choices: ['4', '9', '12', '13'], answer: 3,
    explanation: 'Case 2 sets price to 9. With no break there, case 3 adds 4 and then exits the switch.'
  },
  {
    difficulty: 2, topic: 'Objects',
    prompt: 'Create a device and print the label stored in that object.',
    type: 'wordBank', code: 'class Device {\n    String label = "Dock";\n    static void show() {\n        Device dock = {{0}};\n        System.out.println({{1}});\n    }\n}',
    bank: ['Device()', 'new Device()', 'Device.label', 'dock.label', 'dock.label()'], slots: [{ answer: 1 }, { answer: 3 }],
    explanation: 'new Device() creates the object. Use the object variable dock to access its label field.'
  },
  {
    difficulty: 2, topic: 'Scope',
    prompt: 'What does the call sequence print?',
    code: 'static void reset(int count) {\n    count = 0;\n    System.out.print(count + " ");\n}\n\n// In main\nint count = 14;\nreset(count);\nSystem.out.print(count);',
    choices: ['14 14', '0 0', '0 14', '14 0'], answer: 2,
    explanation: 'reset assigns to its own local copy. main still has 14.'
  },
  {
    difficulty: 2, topic: 'Loops',
    prompt: 'The sensor should report at least once and stop when the total first reaches 24. Complete the loop.',
    type: 'wordBank', code: 'int total = 0;\n{{0}} {\n    total {{1}} 6;\n    System.out.println(total);\n} {{2}}',
    bank: ['do', 'for', '=', '+=', 'while (total < 24);', 'while (total <= 24);'],
    slots: [{ answer: 0 }, { answer: 3 }, { answer: 4 }],
    explanation: 'do runs the body first. Add six each time and repeat only while the total is below 24.'
  },
  {
    difficulty: 2, topic: 'Input',
    prompt: 'What is stored in note, including spaces? The brackets in the choices mark the start and end of the string.',
    code: 'Scanner input = new Scanner("8   delayed");\nint priority = input.nextInt();\nString note = input.nextLine();',
    choices: ['[delayed]', '[ delayed]', '[   delayed]', '[]'], answer: 2,
    explanation: 'nextInt reads the number. nextLine returns the rest of the line, including the three spaces.'
  },
  {
    difficulty: 2, topic: 'Parsing',
    prompt: 'Complete the code to read a fractional distance directly into a primitive double.',
    type: 'dropdown', code: 'String text = "1.625";\n{{0}} distance = {{1}}.{{2}}(text);',
    slots: [{ choices: ['int', 'double', 'String'], answer: 1 }, { choices: ['Double', 'double', 'Integer'], answer: 0 }, { choices: ['parseInt', 'parseDouble', 'toString'], answer: 1 }],
    explanation: 'Double.parseDouble reads fractional text and returns a primitive double.'
  },
  {
    difficulty: 2, topic: 'ArrayList',
    prompt: 'Which line replaces the first item without changing the list size?',
    code: 'List<String> queue = new ArrayList<>(Arrays.asList("Ari", "Jo", "Lou"));',
    choices: ['queue.add(0, "Pia");', 'queue.set(1, "Pia");', 'queue.remove(0);', 'queue.set(0, "Pia");'], answer: 3,
    explanation: 'set replaces an item without shifting the others or changing the size. Position zero is first.'
  },
  {
    difficulty: 3, topic: 'Inheritance',
    prompt: 'Complete the subclass so its constructor passes the unit number to the superclass and its method replaces the inherited description.',
    type: 'wordBank', code: 'class SmartLocker {{0}} Locker {\n    SmartLocker(int unit) {\n        {{1}}(unit);\n    }\n\n    {{2}}\n    public String toString() {\n        return "Smart locker";\n    }\n}',
    bank: ['extends', 'implements', 'super', 'this', '@Override', '@Overload'],
    slots: [{ answer: 0 }, { answer: 2 }, { answer: 4 }],
    explanation: 'extends declares the superclass. super calls its constructor. @Override lets the compiler check the method signature.'
  },
  {
    difficulty: 3, topic: 'Exception handling',
    prompt: 'A file method can throw IOException. Log that exception’s message, and print the stack trace for other exceptions. Complete the handlers.',
    type: 'dropdown', code: 'try {\n    readCatalog();\n} catch ({{0}} problem) {\n    System.err.println(problem.getMessage());\n} catch ({{1}} problem) {\n    {{2}};\n}',
    slots: [{ choices: ['Exception', 'IOException', 'ArithmeticException'], answer: 1 }, { choices: ['IOException', 'NumberFormatException', 'Exception'], answer: 2 }, { choices: ['problem.getMessage()', 'System.err.println(problem.printStackTrace())', 'problem.printStackTrace()'], answer: 2 }],
    explanation: 'Catch the specific exception first. Call printStackTrace() directly because it returns void.'
  },
  {
    difficulty: 3, topic: 'Numeric overflow',
    prompt: 'Which expression computes the exact square of any int width and stores it in a long?',
    code: 'int width = 70_000;\nlong square = /* expression */;',
    choices: ['width * width', '(long) (width * width)', '(long) width * width', 'width ^ 2'], answer: 2,
    explanation: 'Widen before multiplying so the calculation uses long. Widening the result of an int multiplication cannot undo overflow.'
  },
  {
    difficulty: 3, topic: 'List iteration',
    prompt: 'Complete the loop to remove all entries marked DONE without skipping adjacent matches.',
    type: 'wordBank', code: 'Iterator<String> cursor = jobs.iterator();\nwhile (cursor.{{0}}) {\n    if ("DONE".equals(cursor.{{1}})) {\n        cursor.{{2}};\n    }\n}',
    bank: ['hasNext()', 'next()', 'remove()', 'size()', 'skip()'], slots: [{ answer: 0 }, { answer: 1 }, { answer: 2 }],
    explanation: 'hasNext checks for another item, next reads it, and the iterator’s remove deletes the item it just returned.'
  },
  {
    difficulty: 3, topic: 'Scope',
    prompt: 'Which change makes this code compile while keeping both loop counters local to their loops?',
    code: 'int step = 9;\nfor (int step = 0; step < 4; step++) {\n    System.out.println(step);\n}\nfor (int pass = 0; pass < 2; pass++) {\n    System.out.println(pass);\n}',
    choices: ['Rename the outer step to limit.', 'Rename pass to step in the second loop.', 'Add static before the first loop counter.', 'Declare another int step inside the first loop body.'], answer: 0,
    explanation: 'An in-scope local variable cannot be redeclared with the same name. Renaming the outer variable avoids that conflict.'
  },
  {
    difficulty: 3, topic: 'Arrays',
    prompt: 'A seating map has a different number of seats in each row. Complete the traversal to print every seat.',
    type: 'dropdown', code: 'static void printSeats(String[][] seats) {\n    for (int r = 0; r < {{0}}; r++) {\n        for (int c = 0; c < {{1}}; c++) {\n            System.out.println({{2}});\n        }\n    }\n}',
    slots: [{ choices: ['seats.length', 'seats[r].length', 'seats[0].length'], answer: 0 }, { choices: ['seats.length', 'seats[r].length', 'seats[c].length'], answer: 1 }, { choices: ['seats[c][r]', 'seats[r]', 'seats[r][c]'], answer: 2 }],
    explanation: 'Use the outer length for the rows, the current row’s length for its seats, and both indexes to read a seat.'
  },
  {
    difficulty: 3, topic: 'Exception handling',
    prompt: 'What is printed when the program attempts the array access shown?',
    code: 'int[] codes = {10, 20};\ntry {\n    System.out.print(codes[2]);\n} catch (IndexOutOfBoundsException problem) {\n    System.out.print("missing ");\n} finally {\n    System.out.print("done");\n}',
    choices: ['20done', 'missing', 'missing done', 'done'], answer: 2,
    explanation: 'Index 2 is outside this two-element array. The catch handles the exception, then finally runs.'
  },
  {
    difficulty: 3, topic: 'String references',
    prompt: 'What does the program print after reassigning shelf?',
    code: 'String shelf = "North";\nString saved = shelf;\nshelf = new String("North");\nSystem.out.println((shelf == saved) + " " + shelf.equals(saved));',
    choices: ['true true', 'false true', 'false false', 'true false'], answer: 1,
    explanation: 'new String creates a separate object. The texts still match, so equals returns true while == returns false.'
  }
];

window.practiceBanks[5].push(
  {
    difficulty: 1,
    topic: "Integer division and remainder",
    prompt: "A workshop packs 38 items into badge packets of 7. Fill the operators for full groups and leftover items.",
    type: "dropdown",
    code: "int full = 38 {{0}} 7;\nint leftover = 38 {{1}} 7;",
    slots: [{"choices":["/","*","%"],"answer":0},{"choices":["/","-","%"],"answer":2}],
    explanation: "Integer division gives 5 complete groups. The remainder operator gives 3 leftover items."
  },
  {
    difficulty: 1,
    topic: "Arithmetic precedence",
    prompt: "What total does the program calculate for delivery points?",
    code: "int total = 6 + 4 * 5 - 3;",
    choices: ["47","14","26","23"],
    answer: 3,
    explanation: "Multiplication happens first. Then Java adds 6 and subtracts 3, giving 23."
  },
  {
    difficulty: 1,
    topic: "Narrowing casts",
    prompt: "The display needs a whole number for the valve position. What is stored in whole?",
    code: "double reading = 8.9;\nint whole = (int) reading;",
    choices: ["7","8.9","8","9"],
    answer: 2,
    explanation: "Casting a double to int discards the fractional part toward zero. The result is 8."
  },
  {
    difficulty: 2,
    topic: "Prefix and postfix operators",
    prompt: "What values does the counter at a gate produce for score and count, in that order?",
    code: "int count = 7;\nint score = count++ * 3 + ++count;",
    choices: ["30, 7","30, 9","33, 9","29, 8"],
    answer: 1,
    explanation: "The postfix increment supplies 7 to the multiplication. The prefix increment supplies 9 to the addition."
  },
  {
    difficulty: 2,
    topic: "Short-circuit evaluation",
    prompt: "What are trigger and checks after the data logger runs?",
    code: "boolean ready = false;\nint checks = 14;\nboolean trigger = ready && ++checks > 0;",
    choices: ["false, 14","true, 14","false, 15","true, 15"],
    answer: 0,
    explanation: "The left side is false, so && skips the right side. checks stays unchanged."
  },
  {
    difficulty: 1,
    topic: "Negating conditions",
    prompt: "A file is available only when it is ready and unlocked. Complete the condition.",
    type: "wordBank",
    bank: ["||","&=","~","==","&&","!"],
    code: "boolean ready = true;\nboolean locked = false;\nboolean allowed = ready {{0}} {{1}}locked;",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use && for both requirements and ! to invert the blocking condition."
  },
  {
    difficulty: 1,
    topic: "Range boundaries",
    prompt: "A valid locker number is at least 5 and below 39. Fill both operators and the connector.",
    type: "wordBank",
    bank: [">","<=","||","==",">=","&&","<"],
    code: "int value = 39;\nboolean valid = value {{0}} 5 {{1}} value {{2}} 39;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: ">= includes 5, < excludes 39, and && requires both comparisons."
  },
  {
    difficulty: 1,
    topic: "Console formatting",
    prompt: "Print the label and the count for stations, followed by a platform line break.",
    type: "dropdown",
    code: "String label = \"stations\";\nint count = 9;\nString line = String.format(\"{{0}}: {{1}}{{2}}\", label, count);",
    slots: [{"choices":["%f","%c","%s"],"answer":2},{"choices":["%f","%d","%b"],"answer":1},{"choices":["%n","%s","%b"],"answer":0}],
    explanation: "%s formats text, %d formats an integer, and %n adds the platform’s line separator."
  },
  {
    difficulty: 1,
    topic: "Substring indexes",
    prompt: "What part of the booking code does this line return?",
    code: "String code = \"HARBOR\";\nString section = code.substring(1, 4);",
    choices: ["ARB","HAR","AR","HARB"],
    answer: 0,
    explanation: "substring includes index 1 and excludes index 4. That gives ARB."
  },
  {
    difficulty: 2,
    topic: "String searches",
    prompt: "Find the first and last positions of A in the tracking code.",
    type: "dropdown",
    code: "String label = \"A1-A2-A3\";\nint first = label.{{0}}(\"A\");\nint last = label.{{1}}(\"A\");",
    slots: [{"choices":["indexOf","lastIndexOf","startsWith"],"answer":0},{"choices":["indexOf","endsWith","lastIndexOf"],"answer":2}],
    explanation: "indexOf finds the first occurrence at 0. lastIndexOf finds the final occurrence at 6."
  },
  {
    difficulty: 2,
    topic: "StringBuilder editing",
    prompt: "What form ID will the StringBuilder contain?",
    code: "StringBuilder tag = new StringBuilder(\"ABCD\");\ntag.setCharAt(1, 'Q');\ntag.append(\"8\");",
    choices: ["8AQCD","AQCD","AQCD8","ABCD8"],
    answer: 2,
    explanation: "setCharAt replaces the character at zero-based index 1. append adds the suffix after the edited text."
  },
  {
    difficulty: 2,
    topic: "String immutability",
    prompt: "What are original and updated after formatting the pickup code?",
    code: "String original = \"lot-16\";\nString updated = original.replace('-', '/');",
    choices: ["lot/16, lot-16","lot-16, lot/16","lot/16, lot/16","lot-16, lot-16"],
    answer: 1,
    explanation: "replace returns a string with the substitution. The original variable still points to its original text."
  },
  {
    difficulty: 2,
    topic: "Scanner lookahead",
    prompt: "What are nextIsNumber and firstValue after reading the intake log?",
    code: "Scanner data = new Scanner(\"Crate 41 ready\");\nboolean nextIsNumber = data.hasNextInt();\nString firstValue = data.next();",
    choices: ["false, Crate","true, Crate","true, 41","false, ready"],
    answer: 0,
    explanation: "hasNextInt looks at the next token without consuming it. The first token is text, and next reads that same token."
  },
  {
    difficulty: 2,
    topic: "Command-line arguments",
    prompt: "The archive routine receives its arguments in items. Fill the loop to read them in order.",
    type: "dropdown",
    code: "String[] items = {\"41\", \"73\"};\nString saved = \"\";\nfor (int i = 0; i < {{0}}; i++) {\n    saved += {{1}};\n}",
    slots: [{"choices":["items.length - 1","items[0]","items.length"],"answer":2},{"choices":["items.charAt(i)","items[i]","items[0]"],"answer":1}],
    explanation: "The loop tests against the array length and retrieves the argument at the current index."
  },
  {
    difficulty: 1,
    topic: "Numeric literal suffixes",
    prompt: "Complete the typed constants for the survey measure.",
    type: "dropdown",
    code: "float measure = {{0}};\nlong identifier = {{1}};",
    slots: [{"choices":["13.75D","13.75F","13.75"],"answer":1},{"choices":["5_100_000_000L","5_100_000_000","5_100_000_000F"],"answer":0}],
    explanation: "F makes the decimal literal a float. L makes the large whole-number literal a long."
  },
  {
    difficulty: 2,
    topic: "Boxing and arithmetic",
    prompt: "What is assigned to total for the book return count?",
    code: "Integer saved = Integer.valueOf(4);\nint extra = 7;\nint total = saved + extra;",
    choices: ["12","11","47","28"],
    answer: 1,
    explanation: "Java unboxes the Integer to an int for addition, giving 11."
  },
  {
    difficulty: 1,
    topic: "Array defaults",
    prompt: "An array stores two temperatures. What is the initial value at index 0?",
    code: "int[] values = new int[2];",
    choices: ["0","null","-1","uninitialized"],
    answer: 0,
    explanation: "A newly allocated int array initializes each element to 0."
  },
  {
    difficulty: 2,
    topic: "Ragged arrays",
    prompt: "How many rows and how many entries in row 1, in that order, does this bench seats map have?",
    code: "int[][] map = {new int[5], new int[2], new int[4]};",
    choices: ["3, 5","3, 4","11, 2","3, 2"],
    answer: 3,
    explanation: "map.length counts the three rows. The second row is map[1], whose length is 2."
  },
  {
    difficulty: 2,
    topic: "Array aliasing",
    prompt: "What is the value of readings[0] after processing the arrival times?",
    code: "int[] readings = {13, 20};\nint[] alias = readings;\nalias[0] = 49;",
    choices: ["20","0","49","13"],
    answer: 2,
    explanation: "Assigning the array reference creates a second name for the same array. Updating alias[0] changes readings[0]."
  },
  {
    difficulty: 2,
    topic: "Copying arrays",
    prompt: "Make a separate array containing the photo dimensions.",
    type: "dropdown",
    code: "int[] original = {29, 41, 57};\nint[] copy = Arrays.{{0}}(original, {{1}});\ncopy[0] = 0;",
    slots: [{"choices":["asList","toString","copyOf"],"answer":2},{"choices":["original.length + 1","original.length","original.length - 1"],"answer":1}],
    explanation: "Arrays.copyOf with the original length creates a separate array of the same size and copies all values."
  },
  {
    difficulty: 2,
    topic: "Array index guards",
    prompt: "Guard the access so it only happens for a valid index in the seat prices.",
    type: "wordBank",
    bank: [">","||","<=","!=",">=","&&","<"],
    code: "int[] values = new int[6];\nint index = 5;\nboolean inRange = index {{0}} 0 {{1}} index {{2}} values.length;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: "A valid index is at least zero and strictly less than the array length."
  },
  {
    difficulty: 2,
    topic: "Updating array elements",
    prompt: "Increase each entry in the stock counts by 3.",
    type: "wordBank",
    bank: ["values.length - 1","i","values[0]","values","values.length","values[i]"],
    code: "int[] values = {8, 14};\nfor (int i = 0; i < {{0}}; i++) {\n    {{1}} += 3;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use the array length as the limit and write back through the current index."
  },
  {
    difficulty: 2,
    topic: "Loop control",
    prompt: "Ignore negative sensor readings and stop at the sentinel 99. Add only readings seen before it.",
    type: "wordBank",
    bank: ["return","switch","yield","continue","break"],
    code: "int sum = 0;\nfor (int reading : new int[] {7, -1, 13, 99, 46}) {\n    if (reading < 0) {{0}};\n    if (reading == 99) {{1}};\n    sum += reading;\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "continue skips the negative item. break exits the loop at the sentinel. The sum is 20."
  },
  {
    difficulty: 2,
    topic: "Counting backward",
    prompt: "How many times does the loading queue visit the loop body?",
    code: "int visits = 0;\nfor (int i = 16; i >= 5; i -= 3) {\n    visits++;\n}",
    choices: ["12","4","3","5"],
    answer: 1,
    explanation: "The first index is 16. The loop subtracts 3 after every visit and stops once the index drops below 5."
  },
  {
    difficulty: 2,
    topic: "Do-while evaluation",
    prompt: "What value does the prewarmed oven end with?",
    code: "int reading = 37;\ndo {\n    reading += 4;\n} while (reading < 34);",
    choices: ["41","37","34","45"],
    answer: 0,
    explanation: "The do body executes before checking the condition. It adds 4 once and then stops."
  },
  {
    difficulty: 2,
    topic: "Nested loop counts",
    prompt: "How many shelf and bin combinations does the nested loop count?",
    code: "int count = 0;\nfor (int row = 0; row < 2; row++) {\n    for (int col = 0; col < 5; col++) {\n        count++;\n    }\n}",
    choices: ["7","9","15","10"],
    answer: 3,
    explanation: "Each of the 2 outer iterations runs the inner loop 5 times."
  },
  {
    difficulty: 2,
    topic: "Filtering values",
    prompt: "Add all energy readings that are at least 22.",
    type: "wordBank",
    bank: [">","<=","-=","=",">=","+="],
    code: "int sum = 0;\nfor (int value : new int[] {13, 22, 27, 30}) {\n    if (value {{0}} 22) sum {{1}} value;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: ">= includes readings equal to the threshold. += adds each qualifying reading, giving 79."
  },
  {
    difficulty: 3,
    topic: "Overload resolution",
    prompt: "Which overload does the meter formatter call?",
    code: "class Reader {\n    String label(int amount) { return \"int\"; }\n    String label(long amount) { return \"long\"; }\n    String label(double amount) { return \"double\"; }\n}\nString selected = new Reader().label(7L);",
    choices: ["The call is ambiguous","long","int","double"],
    answer: 1,
    explanation: "The literal has type long, so Java selects the overload with an exact long parameter."
  },
  {
    difficulty: 3,
    topic: "Passing array references",
    prompt: "What is values[0] in the original sample array after the method call?",
    code: "class Editor {\n    void change(int[] data) {\n        data[0] = 23;\n        data = new int[] {7};\n    }\n}\nint[] values = {19};\nnew Editor().change(values);",
    choices: ["23","19","7","0"],
    answer: 0,
    explanation: "The method first mutates the shared array to 23. Reassigning its parameter changes only the local reference."
  },
  {
    difficulty: 2,
    topic: "Constructor shadowing",
    prompt: "Save the constructor argument in the new Crate object's capacity field.",
    type: "dropdown",
    code: "class Crate {\n    int capacity;\n    Crate(int capacity) {\n        {{0}} = {{1}};\n    }\n}\nCrate item = new Crate(18);",
    slots: [{"choices":["Crate.capacity","this.capacity","capacity"],"answer":1},{"choices":["capacity","this.capacity","0"],"answer":0}],
    explanation: "this.capacity names the instance field on the left. The unqualified capacity names the constructor parameter on the right."
  },
  {
    difficulty: 2,
    topic: "Class and instance variables",
    prompt: "What are total and size for the Lunchbox objects after these assignments?",
    code: "class Lunchbox {\n    final int size;\n    Lunchbox(int size) { this.size = size; }\n}\nLunchbox left = new Lunchbox(12);\nLunchbox right = new Lunchbox(5);\nint total = left.size + right.size;\nint size = left.size;",
    choices: ["24, 12","10, 5","17, 12","17, 5"],
    answer: 2,
    explanation: "Each object has its own size. total adds both objects’ fields, and size reads the field from left."
  },
  {
    difficulty: 2,
    topic: "Calling instance methods",
    prompt: "Create a Counter and call its instance method from ordinary caller code.",
    type: "wordBank",
    bank: ["Counter.show()","Counter()","item.show","new item()","new Counter()","item.show()"],
    code: "class Counter {\n    int show() { return 5; }\n}\nCounter item = {{0}};\nint count = {{1}};",
    slots: [{"answer":4},{"answer":5}],
    explanation: "new Counter() creates the object. item.show() calls the method on that object."
  },
  {
    difficulty: 3,
    topic: "Dynamic dispatch",
    prompt: "Which label is returned when the EmailNotice is stored in a Notice variable?",
    code: "class Notice {\n    String label() { return \"generic\"; }\n}\nclass EmailNotice extends Notice {\n    @Override String label() { return \"email\"; }\n}\nNotice item = new EmailNotice();\nString result = item.label();",
    choices: ["email","generic","null","The assignment does not compile"],
    answer: 0,
    explanation: "An overridden instance method is selected using the actual object. That object is a EmailNotice."
  },
  {
    difficulty: 3,
    topic: "Extending an inherited method",
    prompt: "Complete PlusPlan so it calls the parent constructor and builds on the parent's label.",
    type: "dropdown",
    code: "class Plan {\n    final int id;\n    Plan(int id) { this.id = id; }\n    String label() { return \"plan\" + id; }\n}\nclass PlusPlan extends Plan {\n    PlusPlan(int id) { {{0}}(id); }\n    @Override String label() { return {{1}} + \"-plus\"; }\n}\nPlusPlan item = new PlusPlan(3);",
    slots: [{"choices":["super","this","Plan"],"answer":0},{"choices":["this.label()","Plan.label()","super.label()"],"answer":2}],
    explanation: "super(id) calls the parent constructor. super.label() calls the inherited implementation before adding the suffix."
  },
  {
    difficulty: 3,
    topic: "ArrayList remove overloads",
    prompt: "After removing the Integer value 2 from the rack labels, what does the list contain?",
    code: "List<Integer> items = new ArrayList<>(Arrays.asList(8, 2, 11, 2));\nitems.remove(Integer.valueOf(2));",
    choices: ["[2, 11, 2]","[8, 2, 11, 2]","[8, 11, 2]","[8, 2, 2]"],
    answer: 2,
    explanation: "Passing an Integer calls remove(Object). It removes the first matching value and keeps the other items in order."
  },
  {
    difficulty: 3,
    topic: "List-backed stack operations",
    prompt: "Treat the first position of the shipping stack as the top. Push the new item, then pop it back.",
    type: "wordBank",
    bank: ["set","get","clear","indexOf","add","remove"],
    code: "List<String> stack = new ArrayList<>(Arrays.asList(\"S4\"));\nstack.{{0}}(0, \"S9\");\nString popped = stack.{{1}}(0);",
    slots: [{"answer":4},{"answer":5}],
    explanation: "add(0, item) inserts at the first position. remove(0) removes and returns that item."
  },
  {
    difficulty: 2,
    topic: "Set uniqueness",
    prompt: "How many distinct visitor IDs are stored in the set?",
    code: "Set<String> unique = new HashSet<>(Arrays.asList(\"A\", \"A\", \"B\", \"C\", \"A\"));",
    choices: ["3","1","5","2"],
    answer: 0,
    explanation: "A set keeps one copy of each equal value. There are 3 distinct values."
  },
  {
    difficulty: 3,
    topic: "Map default values",
    prompt: "Read the tool counts with a fallback of zero if a key is absent.",
    type: "dropdown",
    code: "Map<String, Integer> counts = new HashMap<>();\ncounts.put(\"drill\", 6);\nint present = counts.{{0}}(\"drill\", 0);\nint absent = counts.{{1}}(\"saw\", 0);",
    slots: [{"choices":["get","containsKey","getOrDefault"],"answer":2},{"choices":["containsKey","getOrDefault","get"],"answer":1}],
    explanation: "getOrDefault returns the stored value for the first key (6) and uses zero for the missing key."
  },
  {
    difficulty: 3,
    topic: "Ordering collections",
    prompt: "Sort the delivery priorities in descending numeric order.",
    type: "dropdown",
    code: "List<Integer> values = new ArrayList<>(Arrays.asList(8, 15, 4));\nCollections.{{0}}(values, Collections.{{1}}());",
    slots: [{"choices":["shuffle","sort","reverse"],"answer":1},{"choices":["reverseOrder","binarySearch","min"],"answer":0}],
    explanation: "Collections.sort uses the supplied comparator. reverseOrder puts larger numbers first, so the first value is 15."
  },
  {
    difficulty: 3,
    topic: "Handling checked exceptions",
    prompt: "Handle an IOException from the roster file reader and save just its message.",
    type: "dropdown",
    code: "class Reader {\n    String read() throws IOException {\n        if (true) throw new IOException(\"missing roster\");\n        return \"roster\";\n    }\n}\nString result;\ntry {\n    result = new Reader().read();\n} catch ({{0}} ex) {\n    result = ex.{{1}};\n}",
    slots: [{"choices":["IOException","IllegalArgumentException","ArithmeticException"],"answer":0},{"choices":["printStackTrace()","getCause()","getMessage()"],"answer":2}],
    explanation: "The method declares IOException. getMessage() returns the message text as a String."
  },
  {
    difficulty: 3,
    topic: "Finally and return values",
    prompt: "What are result and the resource release counter after run() completes?",
    code: "class Task {\n    int counter = 2;\n    int run() {\n        try { return 7; }\n        finally { counter += 3; }\n    }\n}\nTask task = new Task();\nint result = task.run();",
    choices: ["7, 5","7, 2","10, 5","2, 7"],
    answer: 0,
    explanation: "Java evaluates the return value first. The finally block still runs and changes the counter before control returns."
  },
  {
    difficulty: 3,
    topic: "Catch block ordering",
    prompt: "Catch the fraction parser's specific exception first, then any other RuntimeException.",
    type: "wordBank",
    bank: ["Error","IOException","Throwable","NumberFormatException","RuntimeException"],
    code: "String issue;\ntry {\n    if (Boolean.TRUE) throw new NumberFormatException();\n    issue = \"none\";\n} catch ({{0}} ex) {\n    issue = \"parse\";\n} catch ({{1}} ex) {\n    issue = \"other\";\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "A NumberFormatException is a RuntimeException. Put the more specific handler first so it can receive that exception."
  },
  {
    difficulty: 3,
    topic: "Byte overflow",
    prompt: "What is the firmware counter value after the compound assignment?",
    code: "byte count = 127;\ncount += 1;",
    choices: ["127","0","-128","128"],
    answer: 2,
    explanation: "Compound assignment narrows the result back to byte. The signed range is -128 through 127, so 128 wraps to -128."
  },
  {
    difficulty: 3,
    topic: "Integer parsing failures",
    prompt: "What does the gate code handler store for this input?",
    code: "String input = \"17x\";\nString status;\ntry {\n    status = String.valueOf(Integer.parseInt(input));\n} catch (NumberFormatException ex) {\n    status = \"invalid\";\n}",
    choices: ["null","invalid","17x","0"],
    answer: 1,
    explanation: "\"17x\" is not a valid decimal integer for parseInt. It throws NumberFormatException and the handler sets status to invalid."
  },
  {
    difficulty: 1,
    topic: "Integer division and remainder",
    prompt: "A workshop packs 46 items into seed trays of 8. Fill the operators for full groups and leftover items.",
    type: "dropdown",
    code: "int full = 46 {{0}} 8;\nint leftover = 46 {{1}} 8;",
    slots: [{"choices":["/","*","%"],"answer":0},{"choices":["/","-","%"],"answer":2}],
    explanation: "Integer division gives 5 complete groups. The remainder operator gives 6 leftover items."
  },
  {
    difficulty: 1,
    topic: "Arithmetic precedence",
    prompt: "What total does the program calculate for garden tokens?",
    code: "int total = 9 + 3 * 7 - 2;",
    choices: ["82","24","30","28"],
    answer: 3,
    explanation: "Multiplication happens first. Then Java adds 9 and subtracts 2, giving 28."
  },
  {
    difficulty: 1,
    topic: "Narrowing casts",
    prompt: "The display needs a whole number for the floor estimate. What is stored in whole?",
    code: "double reading = -6.2;\nint whole = (int) reading;",
    choices: ["-7","-6.2","-6","-5"],
    answer: 2,
    explanation: "Casting a double to int discards the fractional part toward zero. The result is -6."
  },
  {
    difficulty: 2,
    topic: "Prefix and postfix operators",
    prompt: "What values does the kiosk queue produce for score and count, in that order?",
    code: "int count = 12;\nint score = count++ * 4 + ++count;",
    choices: ["62, 12","62, 14","66, 14","61, 13"],
    answer: 1,
    explanation: "The postfix increment supplies 12 to the multiplication. The prefix increment supplies 14 to the addition."
  },
  {
    difficulty: 2,
    topic: "Short-circuit evaluation",
    prompt: "What are trigger and checks after the night monitor runs?",
    code: "boolean ready = true;\nint checks = 23;\nboolean trigger = ready && ++checks > 0;",
    choices: ["true, 24","false, 24","true, 23","false, 23"],
    answer: 0,
    explanation: "The left side is true, so Java evaluates the right side and increments checks."
  },
  {
    difficulty: 1,
    topic: "Negating conditions",
    prompt: "A permit is issued only when the application is approved and unpaid fees are absent. Complete the condition.",
    type: "wordBank",
    bank: ["||","&=","~","==","&&","!"],
    code: "boolean approved = true;\nboolean hasFees = true;\nboolean allowed = approved {{0}} {{1}}hasFees;",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use && for both requirements and ! to invert the blocking condition."
  },
  {
    difficulty: 1,
    topic: "Range boundaries",
    prompt: "A valid room temperature is at least 18 and below 27. Fill both operators and the connector.",
    type: "wordBank",
    bank: [">","<=","||","==",">=","&&","<"],
    code: "int value = 27;\nboolean valid = value {{0}} 18 {{1}} value {{2}} 27;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: ">= includes 18, < excludes 27, and && requires both comparisons."
  },
  {
    difficulty: 1,
    topic: "Console formatting",
    prompt: "Print the label and the count for loaned cables, followed by a platform line break.",
    type: "dropdown",
    code: "String label = \"loaned cables\";\nint count = 23;\nString line = String.format(\"{{0}}: {{1}}{{2}}\", label, count);",
    slots: [{"choices":["%f","%c","%s"],"answer":2},{"choices":["%f","%d","%b"],"answer":1},{"choices":["%n","%s","%b"],"answer":0}],
    explanation: "%s formats text, %d formats an integer, and %n adds the platform’s line separator."
  },
  {
    difficulty: 1,
    topic: "Substring indexes",
    prompt: "What part of the batch label does this line return?",
    code: "String code = \"ORANGE\";\nString section = code.substring(2, 5);",
    choices: ["ANG","RAN","AN","RANG"],
    answer: 0,
    explanation: "substring includes index 2 and excludes index 5. That gives ANG."
  },
  {
    difficulty: 2,
    topic: "String searches",
    prompt: "Find the first and last positions of X in the scheduler tag.",
    type: "dropdown",
    code: "String label = \"X9XX8\";\nint first = label.{{0}}(\"X\");\nint last = label.{{1}}(\"X\");",
    slots: [{"choices":["indexOf","lastIndexOf","startsWith"],"answer":0},{"choices":["indexOf","endsWith","lastIndexOf"],"answer":2}],
    explanation: "indexOf finds the first occurrence at 0. lastIndexOf finds the final occurrence at 3."
  },
  {
    difficulty: 2,
    topic: "StringBuilder editing",
    prompt: "What temporary badge will the StringBuilder contain?",
    code: "StringBuilder tag = new StringBuilder(\"KLMN\");\ntag.setCharAt(2, 'S');\ntag.append(\"2\");",
    choices: ["2KLSN","KLSN","KLSN2","KLMN2"],
    answer: 2,
    explanation: "setCharAt replaces the character at zero-based index 2. append adds the suffix after the edited text."
  },
  {
    difficulty: 2,
    topic: "String immutability",
    prompt: "What are original and updated after formatting the ticket label?",
    code: "String original = \"zone_2\";\nString updated = original.replace('_', ':');",
    choices: ["zone:2, zone_2","zone_2, zone:2","zone:2, zone:2","zone_2, zone_2"],
    answer: 1,
    explanation: "replace returns a string with the substitution. The original variable still points to its original text."
  },
  {
    difficulty: 2,
    topic: "Scanner lookahead",
    prompt: "What are nextIsNumber and firstValue after reading the room log?",
    code: "Scanner data = new Scanner(\"Lab 18 open\");\nboolean nextIsNumber = data.hasNextInt();\nString firstValue = data.next();",
    choices: ["false, Lab","true, Lab","true, 18","false, open"],
    answer: 0,
    explanation: "hasNextInt looks at the next token without consuming it. The first token is text, and next reads that same token."
  },
  {
    difficulty: 2,
    topic: "Command-line arguments",
    prompt: "The scanner routine receives its arguments in codes. Fill the loop to read them in order.",
    type: "dropdown",
    code: "String[] codes = {\"23\", \"85\"};\nString saved = \"\";\nfor (int i = 0; i < {{0}}; i++) {\n    saved += {{1}};\n}",
    slots: [{"choices":["codes.length - 1","codes[0]","codes.length"],"answer":2},{"choices":["codes.charAt(i)","codes[i]","codes[0]"],"answer":1}],
    explanation: "The loop tests against the array length and retrieves the argument at the current index."
  },
  {
    difficulty: 1,
    topic: "Numeric literal suffixes",
    prompt: "Complete the typed constants for the range estimate.",
    type: "dropdown",
    code: "float measure = {{0}};\nlong identifier = {{1}};",
    slots: [{"choices":["42.125D","42.125F","42.125"],"answer":1},{"choices":["6_800_000_000L","6_800_000_000","6_800_000_000F"],"answer":0}],
    explanation: "F makes the decimal literal a float. L makes the large whole-number literal a long."
  },
  {
    difficulty: 2,
    topic: "Boxing and arithmetic",
    prompt: "What is assigned to total for the assembly count?",
    code: "Integer saved = Integer.valueOf(16);\nint extra = 5;\nint total = saved + extra;",
    choices: ["22","21","165","80"],
    answer: 1,
    explanation: "Java unboxes the Integer to an int for addition, giving 21."
  },
  {
    difficulty: 1,
    topic: "Array defaults",
    prompt: "An array stores four cancel flags. What is the initial value at index 0?",
    code: "boolean[] values = new boolean[4];",
    choices: ["false","true","null","0"],
    answer: 0,
    explanation: "A newly allocated boolean array initializes each element to false."
  },
  {
    difficulty: 2,
    topic: "Ragged arrays",
    prompt: "How many rows and how many entries in row 1, in that order, does this train seats map have?",
    code: "int[][] map = {new int[3], new int[6], new int[4]};",
    choices: ["3, 3","3, 4","13, 6","3, 6"],
    answer: 3,
    explanation: "map.length counts the three rows. The second row is map[1], whose length is 6."
  },
  {
    difficulty: 2,
    topic: "Array aliasing",
    prompt: "What is the value of readings[0] after processing the scan results?",
    code: "int[] readings = {27, 36};\nint[] alias = readings;\nalias[0] = 51;",
    choices: ["36","0","51","27"],
    answer: 2,
    explanation: "Assigning the array reference creates a second name for the same array. Updating alias[0] changes readings[0]."
  },
  {
    difficulty: 2,
    topic: "Copying arrays",
    prompt: "Make a separate array containing the route stops.",
    type: "dropdown",
    code: "int[] original = {16, 28, 45};\nint[] copy = Arrays.{{0}}(original, {{1}});\ncopy[0] = 0;",
    slots: [{"choices":["asList","toString","copyOf"],"answer":2},{"choices":["original.length + 1","original.length","original.length - 1"],"answer":1}],
    explanation: "Arrays.copyOf with the original length creates a separate array of the same size and copies all values."
  },
  {
    difficulty: 2,
    topic: "Array index guards",
    prompt: "Guard the access so it only happens for a valid index in the survey entries.",
    type: "wordBank",
    bank: [">","||","<=","!=",">=","&&","<"],
    code: "int[] values = new int[9];\nint index = 9;\nboolean inRange = index {{0}} 0 {{1}} index {{2}} values.length;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: "A valid index is at least zero and strictly less than the array length."
  },
  {
    difficulty: 2,
    topic: "Updating array elements",
    prompt: "Increase each entry in the hour totals by 4.",
    type: "wordBank",
    bank: ["values.length - 1","i","values[0]","values","values.length","values[i]"],
    code: "int[] values = {16, 23};\nfor (int i = 0; i < {{0}}; i++) {\n    {{1}} += 4;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use the array length as the limit and write back through the current index."
  },
  {
    difficulty: 2,
    topic: "Loop control",
    prompt: "Ignore negative dispatch codes and stop at the sentinel 88. Add only readings seen before it.",
    type: "wordBank",
    bank: ["return","switch","yield","continue","break"],
    code: "int sum = 0;\nfor (int reading : new int[] {11, -1, 20, 88, 62}) {\n    if (reading < 0) {{0}};\n    if (reading == 88) {{1}};\n    sum += reading;\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "continue skips the negative item. break exits the loop at the sentinel. The sum is 31."
  },
  {
    difficulty: 2,
    topic: "Counting backward",
    prompt: "How many times does the row inspector visit the loop body?",
    code: "int visits = 0;\nfor (int i = 21; i >= 7; i -= 4) {\n    visits++;\n}",
    choices: ["15","4","3","5"],
    answer: 1,
    explanation: "The first index is 21. The loop subtracts 4 after every visit and stops once the index drops below 7."
  },
  {
    difficulty: 2,
    topic: "Do-while evaluation",
    prompt: "What value does the primed pump end with?",
    code: "int reading = 25;\ndo {\n    reading += 7;\n} while (reading < 21);",
    choices: ["32","25","21","39"],
    answer: 0,
    explanation: "The do body executes before checking the condition. It adds 7 once and then stops."
  },
  {
    difficulty: 2,
    topic: "Nested loop counts",
    prompt: "How many rows and planting spots does the nested loop count?",
    code: "int count = 0;\nfor (int row = 0; row < 3; row++) {\n    for (int col = 0; col < 7; col++) {\n        count++;\n    }\n}",
    choices: ["10","20","28","21"],
    answer: 3,
    explanation: "Each of the 3 outer iterations runs the inner loop 7 times."
  },
  {
    difficulty: 2,
    topic: "Filtering values",
    prompt: "Add all check-in totals that are at least 11.",
    type: "wordBank",
    bank: [">","<=","-=","=",">=","+="],
    code: "int sum = 0;\nfor (int value : new int[] {7, 11, 16, 24}) {\n    if (value {{0}} 11) sum {{1}} value;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: ">= includes readings equal to the threshold. += adds each qualifying reading, giving 51."
  },
  {
    difficulty: 3,
    topic: "Overload resolution",
    prompt: "Which overload does the warehouse scale call?",
    code: "class Reader {\n    String label(int amount) { return \"int\"; }\n    String label(long amount) { return \"long\"; }\n    String label(double amount) { return \"double\"; }\n}\nString selected = new Reader().label(18);",
    choices: ["The call is ambiguous","int","long","double"],
    answer: 1,
    explanation: "The literal has type int, so Java selects the overload with an exact int parameter."
  },
  {
    difficulty: 3,
    topic: "Passing array references",
    prompt: "What is values[0] in the original checkout counts after the method call?",
    code: "class Editor {\n    void change(int[] data) {\n        data[0] = 41;\n        data = new int[] {2};\n    }\n}\nint[] values = {13};\nnew Editor().change(values);",
    choices: ["41","13","2","0"],
    answer: 0,
    explanation: "The method first mutates the shared array to 41. Reassigning its parameter changes only the local reference."
  },
  {
    difficulty: 2,
    topic: "Constructor shadowing",
    prompt: "Save the constructor argument in the new Timer object's ticks field.",
    type: "dropdown",
    code: "class Timer {\n    int ticks;\n    Timer(int ticks) {\n        {{0}} = {{1}};\n    }\n}\nTimer item = new Timer(37);",
    slots: [{"choices":["Timer.ticks","this.ticks","ticks"],"answer":1},{"choices":["ticks","this.ticks","0"],"answer":0}],
    explanation: "this.ticks names the instance field on the left. The unqualified ticks names the constructor parameter on the right."
  },
  {
    difficulty: 2,
    topic: "Class and instance variables",
    prompt: "What are total and size for the Ticket objects after these assignments?",
    code: "class Ticket {\n    final int size;\n    Ticket(int size) { this.size = size; }\n}\nTicket left = new Ticket(23);\nTicket right = new Ticket(7);\nint total = left.size + right.size;\nint size = left.size;",
    choices: ["46, 23","14, 7","30, 23","30, 7"],
    answer: 2,
    explanation: "Each object has its own size. total adds both objects’ fields, and size reads the field from left."
  },
  {
    difficulty: 2,
    topic: "Calling instance methods",
    prompt: "Create a Gauge and call its instance method from ordinary caller code.",
    type: "wordBank",
    bank: ["Gauge.show()","Gauge()","item.show","new item()","new Gauge()","item.show()"],
    code: "class Gauge {\n    int show() { return 14; }\n}\nGauge item = {{0}};\nint level = {{1}};",
    slots: [{"answer":4},{"answer":5}],
    explanation: "new Gauge() creates the object. item.show() calls the method on that object."
  },
  {
    difficulty: 3,
    topic: "Dynamic dispatch",
    prompt: "Which label is returned when the ColdParcel is stored in a Parcel variable?",
    code: "class Parcel {\n    String label() { return \"standard\"; }\n}\nclass ColdParcel extends Parcel {\n    @Override String label() { return \"chilled\"; }\n}\nParcel item = new ColdParcel();\nString result = item.label();",
    choices: ["chilled","standard","null","The assignment does not compile"],
    answer: 0,
    explanation: "An overridden instance method is selected using the actual object. That object is a ColdParcel."
  },
  {
    difficulty: 3,
    topic: "Extending an inherited method",
    prompt: "Complete ColdPack so it calls the parent constructor and builds on the parent's label.",
    type: "dropdown",
    code: "class Pack {\n    final int id;\n    Pack(int id) { this.id = id; }\n    String label() { return \"box\" + id; }\n}\nclass ColdPack extends Pack {\n    ColdPack(int id) { {{0}}(id); }\n    @Override String label() { return {{1}} + \"-cold\"; }\n}\nColdPack item = new ColdPack(7);",
    slots: [{"choices":["super","this","Pack"],"answer":0},{"choices":["this.label()","Pack.label()","super.label()"],"answer":2}],
    explanation: "super(id) calls the parent constructor. super.label() calls the inherited implementation before adding the suffix."
  },
  {
    difficulty: 3,
    topic: "ArrayList remove overloads",
    prompt: "After removing the Integer value 2 from the grade marks, what does the list contain?",
    code: "List<Integer> items = new ArrayList<>(Arrays.asList(9, 2, 6, 5));\nitems.remove(Integer.valueOf(2));",
    choices: ["[2, 6, 5]","[9, 2, 6, 5]","[9, 6, 5]","[9, 2, 5]"],
    answer: 2,
    explanation: "Passing an Integer calls remove(Object). It removes the first matching value and keeps the other items in order."
  },
  {
    difficulty: 3,
    topic: "List-backed stack operations",
    prompt: "Treat the first position of the repair queue as the top. Push the new item, then pop it back.",
    type: "wordBank",
    bank: ["set","get","clear","indexOf","add","remove"],
    code: "List<String> stack = new ArrayList<>(Arrays.asList(\"R2\"));\nstack.{{0}}(0, \"R8\");\nString popped = stack.{{1}}(0);",
    slots: [{"answer":4},{"answer":5}],
    explanation: "add(0, item) inserts at the first position. remove(0) removes and returns that item."
  },
  {
    difficulty: 2,
    topic: "Set uniqueness",
    prompt: "How many distinct sample names are stored in the set?",
    code: "Set<String> unique = new HashSet<>(Arrays.asList(\"red\", \"blue\", \"red\", \"blue\", \"red\"));",
    choices: ["2","1","5","3"],
    answer: 0,
    explanation: "A set keeps one copy of each equal value. There are 2 distinct values."
  },
  {
    difficulty: 3,
    topic: "Map default values",
    prompt: "Read the bus stops with a fallback of zero if a key is absent.",
    type: "dropdown",
    code: "Map<String, Integer> counts = new HashMap<>();\ncounts.put(\"Oak\", 4);\nint present = counts.{{0}}(\"Oak\", 0);\nint absent = counts.{{1}}(\"Pine\", 0);",
    slots: [{"choices":["get","containsKey","getOrDefault"],"answer":2},{"choices":["containsKey","getOrDefault","get"],"answer":1}],
    explanation: "getOrDefault returns the stored value for the first key (4) and uses zero for the missing key."
  },
  {
    difficulty: 3,
    topic: "Ordering collections",
    prompt: "Sort the registration times in descending numeric order.",
    type: "dropdown",
    code: "List<Integer> values = new ArrayList<>(Arrays.asList(27, 16, 21));\nCollections.{{0}}(values, Collections.{{1}}());",
    slots: [{"choices":["shuffle","sort","reverse"],"answer":1},{"choices":["reverseOrder","binarySearch","min"],"answer":0}],
    explanation: "Collections.sort uses the supplied comparator. reverseOrder puts larger numbers first, so the first value is 27."
  },
  {
    difficulty: 3,
    topic: "Handling checked exceptions",
    prompt: "Handle an IOException from the label file reader and save just its message.",
    type: "dropdown",
    code: "class Reader {\n    String read() throws IOException {\n        if (false) throw new IOException(\"missing labels\");\n        return \"labels\";\n    }\n}\nString result;\ntry {\n    result = new Reader().read();\n} catch ({{0}} ex) {\n    result = ex.{{1}};\n}",
    slots: [{"choices":["IOException","IllegalArgumentException","ArithmeticException"],"answer":0},{"choices":["printStackTrace()","getCause()","getMessage()"],"answer":2}],
    explanation: "The method declares IOException. getMessage() returns the message text as a String."
  },
  {
    difficulty: 3,
    topic: "Finally and return values",
    prompt: "What are result and the buffer release counter after run() completes?",
    code: "class Task {\n    int counter = 9;\n    int run() {\n        try { return 13; }\n        finally { counter += 5; }\n    }\n}\nTask task = new Task();\nint result = task.run();",
    choices: ["13, 14","13, 9","18, 14","9, 13"],
    answer: 0,
    explanation: "Java evaluates the return value first. The finally block still runs and changes the counter before control returns."
  },
  {
    difficulty: 3,
    topic: "Catch block ordering",
    prompt: "Catch the item picker's specific exception first, then any other RuntimeException.",
    type: "wordBank",
    bank: ["Error","IOException","Throwable","IndexOutOfBoundsException","RuntimeException"],
    code: "String issue;\ntry {\n    if (Boolean.TRUE) throw new IndexOutOfBoundsException();\n    issue = \"none\";\n} catch ({{0}} ex) {\n    issue = \"index\";\n} catch ({{1}} ex) {\n    issue = \"other\";\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "A IndexOutOfBoundsException is a RuntimeException. Put the more specific handler first so it can receive that exception."
  },
  {
    difficulty: 3,
    topic: "Byte overflow",
    prompt: "What is the test register value after the compound assignment?",
    code: "byte count = 126;\ncount += 5;",
    choices: ["126","0","-125","131"],
    answer: 2,
    explanation: "Compound assignment narrows the result back to byte. The signed range is -128 through 127, so 131 wraps to -125."
  },
  {
    difficulty: 3,
    topic: "Integer parsing failures",
    prompt: "What does the badge ID handler store for this input?",
    code: "String input = \"5.0\";\nString status;\ntry {\n    status = String.valueOf(Integer.parseInt(input));\n} catch (NumberFormatException ex) {\n    status = \"invalid\";\n}",
    choices: ["null","invalid","5.0","0"],
    answer: 1,
    explanation: "\"5.0\" is not a valid decimal integer for parseInt. It throws NumberFormatException and the handler sets status to invalid."
  },
  {
    difficulty: 1,
    topic: "Integer division and remainder",
    prompt: "A workshop packs 61 items into bundles of labels of 9. Fill the operators for full groups and leftover items.",
    type: "dropdown",
    code: "int full = 61 {{0}} 9;\nint leftover = 61 {{1}} 9;",
    slots: [{"choices":["/","*","%"],"answer":0},{"choices":["/","-","%"],"answer":2}],
    explanation: "Integer division gives 6 complete groups. The remainder operator gives 7 leftover items."
  },
  {
    difficulty: 1,
    topic: "Arithmetic precedence",
    prompt: "What total does the program calculate for workshop credits?",
    code: "int total = 4 + 6 * 3 - 5;",
    choices: ["25","-8","22","17"],
    answer: 3,
    explanation: "Multiplication happens first. Then Java adds 4 and subtracts 5, giving 17."
  },
  {
    difficulty: 1,
    topic: "Narrowing casts",
    prompt: "The display needs a whole number for the speed setting. What is stored in whole?",
    code: "double reading = 17.75;\nint whole = (int) reading;",
    choices: ["16","17.75","17","18"],
    answer: 2,
    explanation: "Casting a double to int discards the fractional part toward zero. The result is 17."
  },
  {
    difficulty: 2,
    topic: "Prefix and postfix operators",
    prompt: "What values does the parts counter produce for score and count, in that order?",
    code: "int count = 5;\nint score = count++ * 6 + ++count;",
    choices: ["37, 5","37, 7","43, 7","36, 6"],
    answer: 1,
    explanation: "The postfix increment supplies 5 to the multiplication. The prefix increment supplies 7 to the addition."
  },
  {
    difficulty: 2,
    topic: "Short-circuit evaluation",
    prompt: "What are trigger and checks after the greenhouse monitor runs?",
    code: "boolean ready = false;\nint checks = 31;\nboolean trigger = ready && ++checks > 0;",
    choices: ["false, 31","true, 31","false, 32","true, 32"],
    answer: 0,
    explanation: "The left side is false, so && skips the right side. checks stays unchanged."
  },
  {
    difficulty: 1,
    topic: "Negating conditions",
    prompt: "A signal is sent only when there is a reading and the alarm is not muted. Complete the condition.",
    type: "wordBank",
    bank: ["||","&=","~","==","&&","!"],
    code: "boolean hasReading = false;\nboolean muted = false;\nboolean allowed = hasReading {{0}} {{1}}muted;",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use && for both requirements and ! to invert the blocking condition."
  },
  {
    difficulty: 1,
    topic: "Range boundaries",
    prompt: "A accepted score is at least 64 and below 96. Fill both operators and the connector.",
    type: "wordBank",
    bank: [">","<=","||","==",">=","&&","<"],
    code: "int value = 96;\nboolean valid = value {{0}} 64 {{1}} value {{2}} 96;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: ">= includes 64, < excludes 96, and && requires both comparisons."
  },
  {
    difficulty: 1,
    topic: "Console formatting",
    prompt: "Print the label and the count for work orders, followed by a platform line break.",
    type: "dropdown",
    code: "String label = \"work orders\";\nint count = 35;\nString line = String.format(\"{{0}}: {{1}}{{2}}\", label, count);",
    slots: [{"choices":["%f","%c","%s"],"answer":2},{"choices":["%f","%d","%b"],"answer":1},{"choices":["%n","%s","%b"],"answer":0}],
    explanation: "%s formats text, %d formats an integer, and %n adds the platform’s line separator."
  },
  {
    difficulty: 1,
    topic: "Substring indexes",
    prompt: "What part of the crate label does this line return?",
    code: "String code = \"SILVER\";\nString section = code.substring(1, 5);",
    choices: ["ILVE","SILV","ILV","SILVE"],
    answer: 0,
    explanation: "substring includes index 1 and excludes index 5. That gives ILVE."
  },
  {
    difficulty: 2,
    topic: "String searches",
    prompt: "Find the first and last positions of B in the asset label.",
    type: "dropdown",
    code: "String label = \"BXBB5B\";\nint first = label.{{0}}(\"B\");\nint last = label.{{1}}(\"B\");",
    slots: [{"choices":["indexOf","lastIndexOf","startsWith"],"answer":0},{"choices":["indexOf","endsWith","lastIndexOf"],"answer":2}],
    explanation: "indexOf finds the first occurrence at 0. lastIndexOf finds the final occurrence at 5."
  },
  {
    difficulty: 2,
    topic: "StringBuilder editing",
    prompt: "What test label will the StringBuilder contain?",
    code: "StringBuilder tag = new StringBuilder(\"WXYZ\");\ntag.setCharAt(1, 'T');\ntag.append(\"4\");",
    choices: ["4WTYZ","WTYZ","WTYZ4","WXYZ4"],
    answer: 2,
    explanation: "setCharAt replaces the character at zero-based index 1. append adds the suffix after the edited text."
  },
  {
    difficulty: 2,
    topic: "String immutability",
    prompt: "What are original and updated after formatting the shelf key?",
    code: "String original = \"box.19\";\nString updated = original.replace('.', '-');",
    choices: ["box-19, box.19","box.19, box-19","box-19, box-19","box.19, box.19"],
    answer: 1,
    explanation: "replace returns a string with the substitution. The original variable still points to its original text."
  },
  {
    difficulty: 2,
    topic: "Scanner lookahead",
    prompt: "What are nextIsNumber and firstValue after reading the dispatch log?",
    code: "Scanner data = new Scanner(\"Van 56 loaded\");\nboolean nextIsNumber = data.hasNextInt();\nString firstValue = data.next();",
    choices: ["false, Van","true, Van","true, 56","false, loaded"],
    answer: 0,
    explanation: "hasNextInt looks at the next token without consuming it. The first token is text, and next reads that same token."
  },
  {
    difficulty: 2,
    topic: "Command-line arguments",
    prompt: "The scheduling routine receives its arguments in slots. Fill the loop to read them in order.",
    type: "dropdown",
    code: "String[] slots = {\"92\", \"14\"};\nString saved = \"\";\nfor (int i = 0; i < {{0}}; i++) {\n    saved += {{1}};\n}",
    slots: [{"choices":["slots.length - 1","slots[0]","slots.length"],"answer":2},{"choices":["slots.charAt(i)","slots[i]","slots[0]"],"answer":1}],
    explanation: "The loop tests against the array length and retrieves the argument at the current index."
  },
  {
    difficulty: 1,
    topic: "Numeric literal suffixes",
    prompt: "Complete the typed constants for the trail gauge.",
    type: "dropdown",
    code: "float measure = {{0}};\nlong identifier = {{1}};",
    slots: [{"choices":["7.375D","7.375F","7.375"],"answer":1},{"choices":["9_600_000_000L","9_600_000_000","9_600_000_000F"],"answer":0}],
    explanation: "F makes the decimal literal a float. L makes the large whole-number literal a long."
  },
  {
    difficulty: 2,
    topic: "Boxing and arithmetic",
    prompt: "What is assigned to total for the allocation count?",
    code: "Integer saved = Integer.valueOf(9);\nint extra = 8;\nint total = saved + extra;",
    choices: ["18","17","98","72"],
    answer: 1,
    explanation: "Java unboxes the Integer to an int for addition, giving 17."
  },
  {
    difficulty: 1,
    topic: "Array defaults",
    prompt: "An array stores six captions. What is the initial value at index 0?",
    code: "String[] values = new String[6];",
    choices: ["null","\"\"","false","uninitialized"],
    answer: 0,
    explanation: "A newly allocated String array initializes each element to null."
  },
  {
    difficulty: 2,
    topic: "Ragged arrays",
    prompt: "How many rows and how many entries in row 1, in that order, does this clinic appointments map have?",
    code: "int[][] map = {new int[6], new int[3], new int[2]};",
    choices: ["3, 6","3, 2","11, 3","3, 3"],
    answer: 3,
    explanation: "map.length counts the three rows. The second row is map[1], whose length is 3."
  },
  {
    difficulty: 2,
    topic: "Array aliasing",
    prompt: "What is the value of readings[0] after processing the seat numbers?",
    code: "int[] readings = {8, 17};\nint[] alias = readings;\nalias[0] = 29;",
    choices: ["17","0","29","8"],
    answer: 2,
    explanation: "Assigning the array reference creates a second name for the same array. Updating alias[0] changes readings[0]."
  },
  {
    difficulty: 2,
    topic: "Copying arrays",
    prompt: "Make a separate array containing the sample codes.",
    type: "dropdown",
    code: "int[] original = {63, 84, 92};\nint[] copy = Arrays.{{0}}(original, {{1}});\ncopy[0] = 0;",
    slots: [{"choices":["asList","toString","copyOf"],"answer":2},{"choices":["original.length + 1","original.length","original.length - 1"],"answer":1}],
    explanation: "Arrays.copyOf with the original length creates a separate array of the same size and copies all values."
  },
  {
    difficulty: 2,
    topic: "Array index guards",
    prompt: "Guard the access so it only happens for a valid index in the parcel weights.",
    type: "wordBank",
    bank: [">","||","<=","!=",">=","&&","<"],
    code: "int[] values = new int[8];\nint index = -1;\nboolean inRange = index {{0}} 0 {{1}} index {{2}} values.length;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: "A valid index is at least zero and strictly less than the array length."
  },
  {
    difficulty: 2,
    topic: "Updating array elements",
    prompt: "Increase each entry in the box counts by 6.",
    type: "wordBank",
    bank: ["values.length - 1","i","values[0]","values","values.length","values[i]"],
    code: "int[] values = {12, 17};\nfor (int i = 0; i < {{0}}; i++) {\n    {{1}} += 6;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use the array length as the limit and write back through the current index."
  },
  {
    difficulty: 2,
    topic: "Loop control",
    prompt: "Ignore negative inspection scores and stop at the sentinel 95. Add only readings seen before it.",
    type: "wordBank",
    bank: ["return","switch","yield","continue","break"],
    code: "int sum = 0;\nfor (int reading : new int[] {9, -1, 12, 95, 70}) {\n    if (reading < 0) {{0}};\n    if (reading == 95) {{1}};\n    sum += reading;\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "continue skips the negative item. break exits the loop at the sentinel. The sum is 21."
  },
  {
    difficulty: 2,
    topic: "Counting backward",
    prompt: "How many times does the stock checker visit the loop body?",
    code: "int visits = 0;\nfor (int i = 30; i >= 11; i -= 5) {\n    visits++;\n}",
    choices: ["20","4","3","5"],
    answer: 1,
    explanation: "The first index is 30. The loop subtracts 5 after every visit and stops once the index drops below 11."
  },
  {
    difficulty: 2,
    topic: "Do-while evaluation",
    prompt: "What value does the test reservoir end with?",
    code: "int reading = 61;\ndo {\n    reading += 9;\n} while (reading < 59);",
    choices: ["70","61","59","79"],
    answer: 0,
    explanation: "The do body executes before checking the condition. It adds 9 once and then stops."
  },
  {
    difficulty: 2,
    topic: "Nested loop counts",
    prompt: "How many test rigs and sensors does the nested loop count?",
    code: "int count = 0;\nfor (int row = 0; row < 4; row++) {\n    for (int col = 0; col < 6; col++) {\n        count++;\n    }\n}",
    choices: ["10","23","30","24"],
    answer: 3,
    explanation: "Each of the 4 outer iterations runs the inner loop 6 times."
  },
  {
    difficulty: 2,
    topic: "Filtering values",
    prompt: "Add all water levels that are at least 9.",
    type: "wordBank",
    bank: [">","<=","-=","=",">=","+="],
    code: "int sum = 0;\nfor (int value : new int[] {4, 9, 13, 18}) {\n    if (value {{0}} 9) sum {{1}} value;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: ">= includes readings equal to the threshold. += adds each qualifying reading, giving 40."
  },
  {
    difficulty: 3,
    topic: "Overload resolution",
    prompt: "Which overload does the step counter call?",
    code: "class Reader {\n    String label(int amount) { return \"int\"; }\n    String label(long amount) { return \"long\"; }\n    String label(double amount) { return \"double\"; }\n}\nString selected = new Reader().label(29L);",
    choices: ["The call is ambiguous","long","int","double"],
    answer: 1,
    explanation: "The literal has type long, so Java selects the overload with an exact long parameter."
  },
  {
    difficulty: 3,
    topic: "Passing array references",
    prompt: "What is values[0] in the original seat map after the method call?",
    code: "class Editor {\n    void change(int[] data) {\n        data[0] = 52;\n        data = new int[] {9};\n    }\n}\nint[] values = {31};\nnew Editor().change(values);",
    choices: ["52","31","9","0"],
    answer: 0,
    explanation: "The method first mutates the shared array to 52. Reassigning its parameter changes only the local reference."
  },
  {
    difficulty: 2,
    topic: "Constructor shadowing",
    prompt: "Save the constructor argument in the new Coupon object's points field.",
    type: "dropdown",
    code: "class Coupon {\n    int points;\n    Coupon(int points) {\n        {{0}} = {{1}};\n    }\n}\nCoupon item = new Coupon(24);",
    slots: [{"choices":["Coupon.points","this.points","points"],"answer":1},{"choices":["points","this.points","0"],"answer":0}],
    explanation: "this.points names the instance field on the left. The unqualified points names the constructor parameter on the right."
  },
  {
    difficulty: 2,
    topic: "Class and instance variables",
    prompt: "What are total and size for the Sensor objects after these assignments?",
    code: "class Sensor {\n    final int size;\n    Sensor(int size) { this.size = size; }\n}\nSensor left = new Sensor(31);\nSensor right = new Sensor(9);\nint total = left.size + right.size;\nint size = left.size;",
    choices: ["62, 31","18, 9","40, 31","40, 9"],
    answer: 2,
    explanation: "Each object has its own size. total adds both objects’ fields, and size reads the field from left."
  },
  {
    difficulty: 2,
    topic: "Calling instance methods",
    prompt: "Create a Box and call its instance method from ordinary caller code.",
    type: "wordBank",
    bank: ["Box.show()","Box()","item.show","new item()","new Box()","item.show()"],
    code: "class Box {\n    int show() { return 26; }\n}\nBox item = {{0}};\nint width = {{1}};",
    slots: [{"answer":4},{"answer":5}],
    explanation: "new Box() creates the object. item.show() calls the method on that object."
  },
  {
    difficulty: 3,
    topic: "Dynamic dispatch",
    prompt: "Which label is returned when the DayTicket is stored in a Ticket variable?",
    code: "class Ticket {\n    String label() { return \"general\"; }\n}\nclass DayTicket extends Ticket {\n    @Override String label() { return \"day\"; }\n}\nTicket item = new DayTicket();\nString result = item.label();",
    choices: ["day","general","null","The assignment does not compile"],
    answer: 0,
    explanation: "An overridden instance method is selected using the actual object. That object is a DayTicket."
  },
  {
    difficulty: 3,
    topic: "Extending an inherited method",
    prompt: "Complete ExpressRoute so it calls the parent constructor and builds on the parent's label.",
    type: "dropdown",
    code: "class Route {\n    final int id;\n    Route(int id) { this.id = id; }\n    String label() { return \"route\" + id; }\n}\nclass ExpressRoute extends Route {\n    ExpressRoute(int id) { {{0}}(id); }\n    @Override String label() { return {{1}} + \"-express\"; }\n}\nExpressRoute item = new ExpressRoute(11);",
    slots: [{"choices":["super","this","Route"],"answer":0},{"choices":["this.label()","Route.label()","super.label()"],"answer":2}],
    explanation: "super(id) calls the parent constructor. super.label() calls the inherited implementation before adding the suffix."
  },
  {
    difficulty: 3,
    topic: "ArrayList remove overloads",
    prompt: "After removing the Integer value 2 from the sensor positions, what does the list contain?",
    code: "List<Integer> items = new ArrayList<>(Arrays.asList(5, 2, 12, 4));\nitems.remove(Integer.valueOf(2));",
    choices: ["[2, 12, 4]","[5, 2, 12, 4]","[5, 12, 4]","[5, 2, 4]"],
    answer: 2,
    explanation: "Passing an Integer calls remove(Object). It removes the first matching value and keeps the other items in order."
  },
  {
    difficulty: 3,
    topic: "List-backed stack operations",
    prompt: "Treat the first position of the reading stack as the top. Push the new item, then pop it back.",
    type: "wordBank",
    bank: ["set","get","clear","indexOf","add","remove"],
    code: "List<String> stack = new ArrayList<>(Arrays.asList(\"L5\"));\nstack.{{0}}(0, \"L6\");\nString popped = stack.{{1}}(0);",
    slots: [{"answer":4},{"answer":5}],
    explanation: "add(0, item) inserts at the first position. remove(0) removes and returns that item."
  },
  {
    difficulty: 2,
    topic: "Set uniqueness",
    prompt: "How many distinct file extensions are stored in the set?",
    code: "Set<String> unique = new HashSet<>(Arrays.asList(\"txt\", \"csv\", \"log\", \"pdf\", \"txt\"));",
    choices: ["4","1","5","2"],
    answer: 0,
    explanation: "A set keeps one copy of each equal value. There are 4 distinct values."
  },
  {
    difficulty: 3,
    topic: "Map default values",
    prompt: "Read the workshop credits with a fallback of zero if a key is absent.",
    type: "dropdown",
    code: "Map<String, Integer> counts = new HashMap<>();\ncounts.put(\"Zed\", 8);\nint present = counts.{{0}}(\"Zed\", 0);\nint absent = counts.{{1}}(\"Mia\", 0);",
    slots: [{"choices":["get","containsKey","getOrDefault"],"answer":2},{"choices":["containsKey","getOrDefault","get"],"answer":1}],
    explanation: "getOrDefault returns the stored value for the first key (8) and uses zero for the missing key."
  },
  {
    difficulty: 3,
    topic: "Ordering collections",
    prompt: "Sort the exam scores in descending numeric order.",
    type: "dropdown",
    code: "List<Integer> values = new ArrayList<>(Arrays.asList(73, 64, 89));\nCollections.{{0}}(values, Collections.{{1}}());",
    slots: [{"choices":["shuffle","sort","reverse"],"answer":1},{"choices":["reverseOrder","binarySearch","min"],"answer":0}],
    explanation: "Collections.sort uses the supplied comparator. reverseOrder puts larger numbers first, so the first value is 89."
  },
  {
    difficulty: 3,
    topic: "Handling checked exceptions",
    prompt: "Handle an IOException from the route file reader and save just its message.",
    type: "dropdown",
    code: "class Reader {\n    String read() throws IOException {\n        if (true) throw new IOException(\"missing routes\");\n        return \"routes\";\n    }\n}\nString result;\ntry {\n    result = new Reader().read();\n} catch ({{0}} ex) {\n    result = ex.{{1}};\n}",
    slots: [{"choices":["IOException","IllegalArgumentException","ArithmeticException"],"answer":0},{"choices":["printStackTrace()","getCause()","getMessage()"],"answer":2}],
    explanation: "The method declares IOException. getMessage() returns the message text as a String."
  },
  {
    difficulty: 3,
    topic: "Finally and return values",
    prompt: "What are result and the session cleanup counter after run() completes?",
    code: "class Task {\n    int counter = 11;\n    int run() {\n        try { return 19; }\n        finally { counter += 2; }\n    }\n}\nTask task = new Task();\nint result = task.run();",
    choices: ["19, 13","19, 11","21, 13","11, 19"],
    answer: 0,
    explanation: "Java evaluates the return value first. The finally block still runs and changes the counter before control returns."
  },
  {
    difficulty: 3,
    topic: "Catch block ordering",
    prompt: "Catch the reference checker's specific exception first, then any other RuntimeException.",
    type: "wordBank",
    bank: ["Error","IOException","Throwable","NullPointerException","RuntimeException"],
    code: "String issue;\ntry {\n    if (Boolean.TRUE) throw new NullPointerException();\n    issue = \"none\";\n} catch ({{0}} ex) {\n    issue = \"null reference\";\n} catch ({{1}} ex) {\n    issue = \"other\";\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "A NullPointerException is a RuntimeException. Put the more specific handler first so it can receive that exception."
  },
  {
    difficulty: 3,
    topic: "Byte overflow",
    prompt: "What is the small offset value after the compound assignment?",
    code: "byte count = -128;\ncount += -1;",
    choices: ["-128","0","127","-129"],
    answer: 2,
    explanation: "Compound assignment narrows the result back to byte. The signed range is -128 through 127, so -129 wraps to 127."
  },
  {
    difficulty: 3,
    topic: "Integer parsing failures",
    prompt: "What does the service key handler store for this input?",
    code: "String input = \"x91\";\nString status;\ntry {\n    status = String.valueOf(Integer.parseInt(input));\n} catch (NumberFormatException ex) {\n    status = \"invalid\";\n}",
    choices: ["null","invalid","x91","0"],
    answer: 1,
    explanation: "\"x91\" is not a valid decimal integer for parseInt. It throws NumberFormatException and the handler sets status to invalid."
  },
  {
    difficulty: 1,
    topic: "Integer division and remainder",
    prompt: "A workshop packs 53 items into tool sets of 6. Fill the operators for full groups and leftover items.",
    type: "dropdown",
    code: "int full = 53 {{0}} 6;\nint leftover = 53 {{1}} 6;",
    slots: [{"choices":["/","*","%"],"answer":0},{"choices":["/","-","%"],"answer":2}],
    explanation: "Integer division gives 8 complete groups. The remainder operator gives 5 leftover items."
  },
  {
    difficulty: 1,
    topic: "Arithmetic precedence",
    prompt: "What total does the program calculate for game points?",
    code: "int total = 11 + 2 * 8 - 4;",
    choices: ["100","19","27","23"],
    answer: 3,
    explanation: "Multiplication happens first. Then Java adds 11 and subtracts 4, giving 23."
  },
  {
    difficulty: 1,
    topic: "Narrowing casts",
    prompt: "The display needs a whole number for the temperature change. What is stored in whole?",
    code: "double reading = -12.95;\nint whole = (int) reading;",
    choices: ["-13","-12.95","-12","-11"],
    answer: 2,
    explanation: "Casting a double to int discards the fractional part toward zero. The result is -12."
  },
  {
    difficulty: 2,
    topic: "Prefix and postfix operators",
    prompt: "What values does the loading counter produce for score and count, in that order?",
    code: "int count = 15;\nint score = count++ * 2 + ++count;",
    choices: ["47, 15","47, 17","49, 17","46, 16"],
    answer: 1,
    explanation: "The postfix increment supplies 15 to the multiplication. The prefix increment supplies 17 to the addition."
  },
  {
    difficulty: 2,
    topic: "Short-circuit evaluation",
    prompt: "What are trigger and checks after the alarm panel runs?",
    code: "boolean ready = true;\nint checks = 46;\nboolean trigger = ready && ++checks > 0;",
    choices: ["true, 47","false, 47","true, 46","false, 46"],
    answer: 0,
    explanation: "The left side is true, so Java evaluates the right side and increments checks."
  },
  {
    difficulty: 1,
    topic: "Negating conditions",
    prompt: "A reservation is held only when a slot exists and there is no override. Complete the condition.",
    type: "wordBank",
    bank: ["||","&=","~","==","&&","!"],
    code: "boolean hasSlot = true;\nboolean override = false;\nboolean allowed = hasSlot {{0}} {{1}}override;",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use && for both requirements and ! to invert the blocking condition."
  },
  {
    difficulty: 1,
    topic: "Range boundaries",
    prompt: "A permitted humidity is at least 42 and below 71. Fill both operators and the connector.",
    type: "wordBank",
    bank: [">","<=","||","==",">=","&&","<"],
    code: "int value = 71;\nboolean valid = value {{0}} 42 {{1}} value {{2}} 71;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: ">= includes 42, < excludes 71, and && requires both comparisons."
  },
  {
    difficulty: 1,
    topic: "Console formatting",
    prompt: "Print the label and the count for samples, followed by a platform line break.",
    type: "dropdown",
    code: "String label = \"samples\";\nint count = 67;\nString line = String.format(\"{{0}}: {{1}}{{2}}\", label, count);",
    slots: [{"choices":["%f","%c","%s"],"answer":2},{"choices":["%f","%d","%b"],"answer":1},{"choices":["%n","%s","%b"],"answer":0}],
    explanation: "%s formats text, %d formats an integer, and %n adds the platform’s line separator."
  },
  {
    difficulty: 1,
    topic: "Substring indexes",
    prompt: "What part of the permit code does this line return?",
    code: "String code = \"MEADOW\";\nString section = code.substring(2, 6);",
    choices: ["ADOW","EADO","ADO","EADOW"],
    answer: 0,
    explanation: "substring includes index 2 and excludes index 6. That gives ADOW."
  },
  {
    difficulty: 2,
    topic: "String searches",
    prompt: "Find the first and last positions of R in the routing code.",
    type: "dropdown",
    code: "String label = \"R0-RR2\";\nint first = label.{{0}}(\"R\");\nint last = label.{{1}}(\"R\");",
    slots: [{"choices":["indexOf","lastIndexOf","startsWith"],"answer":0},{"choices":["indexOf","endsWith","lastIndexOf"],"answer":2}],
    explanation: "indexOf finds the first occurrence at 0. lastIndexOf finds the final occurrence at 4."
  },
  {
    difficulty: 2,
    topic: "StringBuilder editing",
    prompt: "What rack tag will the StringBuilder contain?",
    code: "StringBuilder tag = new StringBuilder(\"HJKL\");\ntag.setCharAt(2, 'M');\ntag.append(\"9\");",
    choices: ["9HJML","HJML","HJML9","HJKL9"],
    answer: 2,
    explanation: "setCharAt replaces the character at zero-based index 2. append adds the suffix after the edited text."
  },
  {
    difficulty: 2,
    topic: "String immutability",
    prompt: "What are original and updated after formatting the routing tag?",
    code: "String original = \"line:7\";\nString updated = original.replace(':', '+');",
    choices: ["line+7, line:7","line:7, line+7","line+7, line+7","line:7, line:7"],
    answer: 1,
    explanation: "replace returns a string with the substitution. The original variable still points to its original text."
  },
  {
    difficulty: 2,
    topic: "Scanner lookahead",
    prompt: "What are nextIsNumber and firstValue after reading the equipment log?",
    code: "Scanner data = new Scanner(\"Relay 27 idle\");\nboolean nextIsNumber = data.hasNextInt();\nString firstValue = data.next();",
    choices: ["false, Relay","true, Relay","true, 27","false, idle"],
    answer: 0,
    explanation: "hasNextInt looks at the next token without consuming it. The first token is text, and next reads that same token."
  },
  {
    difficulty: 2,
    topic: "Command-line arguments",
    prompt: "The sample sorter receives its arguments in samples. Fill the loop to read them in order.",
    type: "dropdown",
    code: "String[] samples = {\"35\", \"71\"};\nString saved = \"\";\nfor (int i = 0; i < {{0}}; i++) {\n    saved += {{1}};\n}",
    slots: [{"choices":["samples.length - 1","samples[0]","samples.length"],"answer":2},{"choices":["samples.charAt(i)","samples[i]","samples[0]"],"answer":1}],
    explanation: "The loop tests against the array length and retrieves the argument at the current index."
  },
  {
    difficulty: 1,
    topic: "Numeric literal suffixes",
    prompt: "Complete the typed constants for the sensor value.",
    type: "dropdown",
    code: "float measure = {{0}};\nlong identifier = {{1}};",
    slots: [{"choices":["31.625D","31.625F","31.625"],"answer":1},{"choices":["3_700_000_000L","3_700_000_000","3_700_000_000F"],"answer":0}],
    explanation: "F makes the decimal literal a float. L makes the large whole-number literal a long."
  },
  {
    difficulty: 2,
    topic: "Boxing and arithmetic",
    prompt: "What is assigned to total for the meter count?",
    code: "Integer saved = Integer.valueOf(12);\nint extra = 6;\nint total = saved + extra;",
    choices: ["19","18","126","72"],
    answer: 1,
    explanation: "Java unboxes the Integer to an int for addition, giving 18."
  },
  {
    difficulty: 1,
    topic: "Array defaults",
    prompt: "An array stores three readings. What is the initial value at index 0?",
    code: "double[] values = new double[3];",
    choices: ["0.0","NaN","null","uninitialized"],
    answer: 0,
    explanation: "A newly allocated double array initializes each element to 0.0."
  },
  {
    difficulty: 2,
    topic: "Ragged arrays",
    prompt: "How many rows and how many entries in row 1, in that order, does this storage slots map have?",
    code: "int[][] map = {new int[2], new int[7], new int[5]};",
    choices: ["3, 2","3, 5","14, 7","3, 7"],
    answer: 3,
    explanation: "map.length counts the three rows. The second row is map[1], whose length is 7."
  },
  {
    difficulty: 2,
    topic: "Array aliasing",
    prompt: "What is the value of readings[0] after processing the tool readings?",
    code: "int[] readings = {41, 52};\nint[] alias = readings;\nalias[0] = 63;",
    choices: ["52","0","63","41"],
    answer: 2,
    explanation: "Assigning the array reference creates a second name for the same array. Updating alias[0] changes readings[0]."
  },
  {
    difficulty: 2,
    topic: "Copying arrays",
    prompt: "Make a separate array containing the seat prices.",
    type: "dropdown",
    code: "int[] original = {17, 35, 48};\nint[] copy = Arrays.{{0}}(original, {{1}});\ncopy[0] = 0;",
    slots: [{"choices":["asList","toString","copyOf"],"answer":2},{"choices":["original.length + 1","original.length","original.length - 1"],"answer":1}],
    explanation: "Arrays.copyOf with the original length creates a separate array of the same size and copies all values."
  },
  {
    difficulty: 2,
    topic: "Array index guards",
    prompt: "Guard the access so it only happens for a valid index in the meter slots.",
    type: "wordBank",
    bank: [">","||","<=","!=",">=","&&","<"],
    code: "int[] values = new int[12];\nint index = 11;\nboolean inRange = index {{0}} 0 {{1}} index {{2}} values.length;",
    slots: [{"answer":4},{"answer":5},{"answer":6}],
    explanation: "A valid index is at least zero and strictly less than the array length."
  },
  {
    difficulty: 2,
    topic: "Updating array elements",
    prompt: "Increase each entry in the points totals by 5.",
    type: "wordBank",
    bank: ["values.length - 1","i","values[0]","values","values.length","values[i]"],
    code: "int[] values = {27, 32};\nfor (int i = 0; i < {{0}}; i++) {\n    {{1}} += 5;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: "Use the array length as the limit and write back through the current index."
  },
  {
    difficulty: 2,
    topic: "Loop control",
    prompt: "Ignore negative temperature values and stop at the sentinel 77. Add only readings seen before it.",
    type: "wordBank",
    bank: ["return","switch","yield","continue","break"],
    code: "int sum = 0;\nfor (int reading : new int[] {14, -1, 26, 77, 45}) {\n    if (reading < 0) {{0}};\n    if (reading == 77) {{1}};\n    sum += reading;\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "continue skips the negative item. break exits the loop at the sentinel. The sum is 40."
  },
  {
    difficulty: 2,
    topic: "Counting backward",
    prompt: "How many times does the timer exercise visit the loop body?",
    code: "int visits = 0;\nfor (int i = 25; i >= 8; i -= 6) {\n    visits++;\n}",
    choices: ["18","3","2","4"],
    answer: 1,
    explanation: "The first index is 25. The loop subtracts 6 after every visit and stops once the index drops below 8."
  },
  {
    difficulty: 2,
    topic: "Do-while evaluation",
    prompt: "What value does the charge controller end with?",
    code: "int reading = 52;\ndo {\n    reading += 5;\n} while (reading < 49);",
    choices: ["57","52","49","62"],
    answer: 0,
    explanation: "The do body executes before checking the condition. It adds 5 once and then stops."
  },
  {
    difficulty: 2,
    topic: "Nested loop counts",
    prompt: "How many days and collection times does the nested loop count?",
    code: "int count = 0;\nfor (int row = 0; row < 5; row++) {\n    for (int col = 0; col < 8; col++) {\n        count++;\n    }\n}",
    choices: ["13","39","48","40"],
    answer: 3,
    explanation: "Each of the 5 outer iterations runs the inner loop 8 times."
  },
  {
    difficulty: 2,
    topic: "Filtering values",
    prompt: "Add all credit balances that are at least 51.",
    type: "wordBank",
    bank: [">","<=","-=","=",">=","+="],
    code: "int sum = 0;\nfor (int value : new int[] {34, 51, 62, 73}) {\n    if (value {{0}} 51) sum {{1}} value;\n}",
    slots: [{"answer":4},{"answer":5}],
    explanation: ">= includes readings equal to the threshold. += adds each qualifying reading, giving 186."
  },
  {
    difficulty: 3,
    topic: "Overload resolution",
    prompt: "Which overload does the route scorer call?",
    code: "class Reader {\n    String label(int amount) { return \"int\"; }\n    String label(long amount) { return \"long\"; }\n    String label(double amount) { return \"double\"; }\n}\nString selected = new Reader().label(34);",
    choices: ["The call is ambiguous","int","long","double"],
    answer: 1,
    explanation: "The literal has type int, so Java selects the overload with an exact int parameter."
  },
  {
    difficulty: 3,
    topic: "Passing array references",
    prompt: "What is values[0] in the original sensor buffer after the method call?",
    code: "class Editor {\n    void change(int[] data) {\n        data[0] = 83;\n        data = new int[] {4};\n    }\n}\nint[] values = {62};\nnew Editor().change(values);",
    choices: ["83","62","4","0"],
    answer: 0,
    explanation: "The method first mutates the shared array to 83. Reassigning its parameter changes only the local reference."
  },
  {
    difficulty: 2,
    topic: "Constructor shadowing",
    prompt: "Save the constructor argument in the new Locker object's number field.",
    type: "dropdown",
    code: "class Locker {\n    int number;\n    Locker(int number) {\n        {{0}} = {{1}};\n    }\n}\nLocker item = new Locker(63);",
    slots: [{"choices":["Locker.number","this.number","number"],"answer":1},{"choices":["number","this.number","0"],"answer":0}],
    explanation: "this.number names the instance field on the left. The unqualified number names the constructor parameter on the right."
  },
  {
    difficulty: 2,
    topic: "Class and instance variables",
    prompt: "What are total and size for the Parcel objects after these assignments?",
    code: "class Parcel {\n    final int size;\n    Parcel(int size) { this.size = size; }\n}\nParcel left = new Parcel(46);\nParcel right = new Parcel(8);\nint total = left.size + right.size;\nint size = left.size;",
    choices: ["92, 46","16, 8","54, 46","54, 8"],
    answer: 2,
    explanation: "Each object has its own size. total adds both objects’ fields, and size reads the field from left."
  },
  {
    difficulty: 2,
    topic: "Calling instance methods",
    prompt: "Create a Token and call its instance method from ordinary caller code.",
    type: "wordBank",
    bank: ["Token.show()","Token()","item.show","new item()","new Token()","item.show()"],
    code: "class Token {\n    int show() { return 38; }\n}\nToken item = {{0}};\nint credits = {{1}};",
    slots: [{"answer":4},{"answer":5}],
    explanation: "new Token() creates the object. item.show() calls the method on that object."
  },
  {
    difficulty: 3,
    topic: "Dynamic dispatch",
    prompt: "Which label is returned when the IndoorTrack is stored in a Track variable?",
    code: "class Track {\n    String label() { return \"outdoors\"; }\n}\nclass IndoorTrack extends Track {\n    @Override String label() { return \"indoors\"; }\n}\nTrack item = new IndoorTrack();\nString result = item.label();",
    choices: ["indoors","outdoors","null","The assignment does not compile"],
    answer: 0,
    explanation: "An overridden instance method is selected using the actual object. That object is a IndoorTrack."
  },
  {
    difficulty: 3,
    topic: "Extending an inherited method",
    prompt: "Complete VisitorBadge so it calls the parent constructor and builds on the parent's label.",
    type: "dropdown",
    code: "class Badge {\n    final int id;\n    Badge(int id) { this.id = id; }\n    String label() { return \"badge\" + id; }\n}\nclass VisitorBadge extends Badge {\n    VisitorBadge(int id) { {{0}}(id); }\n    @Override String label() { return {{1}} + \"-visitor\"; }\n}\nVisitorBadge item = new VisitorBadge(16);",
    slots: [{"choices":["super","this","Badge"],"answer":0},{"choices":["this.label()","Badge.label()","super.label()"],"answer":2}],
    explanation: "super(id) calls the parent constructor. super.label() calls the inherited implementation before adding the suffix."
  },
  {
    difficulty: 3,
    topic: "ArrayList remove overloads",
    prompt: "After removing the Integer value 2 from the shelf IDs, what does the list contain?",
    code: "List<Integer> items = new ArrayList<>(Arrays.asList(7, 2, 81, 3));\nitems.remove(Integer.valueOf(2));",
    choices: ["[2, 81, 3]","[7, 2, 81, 3]","[7, 81, 3]","[7, 2, 3]"],
    answer: 2,
    explanation: "Passing an Integer calls remove(Object). It removes the first matching value and keeps the other items in order."
  },
  {
    difficulty: 3,
    topic: "List-backed stack operations",
    prompt: "Treat the first position of the ticket stack as the top. Push the new item, then pop it back.",
    type: "wordBank",
    bank: ["set","get","clear","indexOf","add","remove"],
    code: "List<String> stack = new ArrayList<>(Arrays.asList(\"T3\"));\nstack.{{0}}(0, \"T7\");\nString popped = stack.{{1}}(0);",
    slots: [{"answer":4},{"answer":5}],
    explanation: "add(0, item) inserts at the first position. remove(0) removes and returns that item."
  },
  {
    difficulty: 2,
    topic: "Set uniqueness",
    prompt: "How many distinct work zones are stored in the set?",
    code: "Set<String> unique = new HashSet<>(Arrays.asList(\"north\", \"north\", \"west\", \"north\", \"west\"));",
    choices: ["2","1","5","3"],
    answer: 0,
    explanation: "A set keeps one copy of each equal value. There are 2 distinct values."
  },
  {
    difficulty: 3,
    topic: "Map default values",
    prompt: "Read the shipment counts with a fallback of zero if a key is absent.",
    type: "dropdown",
    code: "Map<String, Integer> counts = new HashMap<>();\ncounts.put(\"north\", 12);\nint present = counts.{{0}}(\"north\", 0);\nint absent = counts.{{1}}(\"south\", 0);",
    slots: [{"choices":["get","containsKey","getOrDefault"],"answer":2},{"choices":["containsKey","getOrDefault","get"],"answer":1}],
    explanation: "getOrDefault returns the stored value for the first key (12) and uses zero for the missing key."
  },
  {
    difficulty: 3,
    topic: "Ordering collections",
    prompt: "Sort the equipment weights in descending numeric order.",
    type: "dropdown",
    code: "List<Integer> values = new ArrayList<>(Arrays.asList(12, 35, 28));\nCollections.{{0}}(values, Collections.{{1}}());",
    slots: [{"choices":["shuffle","sort","reverse"],"answer":1},{"choices":["reverseOrder","binarySearch","min"],"answer":0}],
    explanation: "Collections.sort uses the supplied comparator. reverseOrder puts larger numbers first, so the first value is 35."
  },
  {
    difficulty: 3,
    topic: "Handling checked exceptions",
    prompt: "Handle an IOException from the survey file reader and save just its message.",
    type: "dropdown",
    code: "class Reader {\n    String read() throws IOException {\n        if (false) throw new IOException(\"missing survey\");\n        return \"survey\";\n    }\n}\nString result;\ntry {\n    result = new Reader().read();\n} catch ({{0}} ex) {\n    result = ex.{{1}};\n}",
    slots: [{"choices":["IOException","IllegalArgumentException","ArithmeticException"],"answer":0},{"choices":["printStackTrace()","getCause()","getMessage()"],"answer":2}],
    explanation: "The method declares IOException. getMessage() returns the message text as a String."
  },
  {
    difficulty: 3,
    topic: "Finally and return values",
    prompt: "What are result and the notification cleanup counter after run() completes?",
    code: "class Task {\n    int counter = 17;\n    int run() {\n        try { return 31; }\n        finally { counter += 6; }\n    }\n}\nTask task = new Task();\nint result = task.run();",
    choices: ["31, 23","31, 17","37, 23","17, 31"],
    answer: 0,
    explanation: "Java evaluates the return value first. The finally block still runs and changes the counter before control returns."
  },
  {
    difficulty: 3,
    topic: "Catch block ordering",
    prompt: "Catch the range calculator's specific exception first, then any other RuntimeException.",
    type: "wordBank",
    bank: ["Error","IOException","Throwable","ArithmeticException","RuntimeException"],
    code: "String issue;\ntry {\n    if (Boolean.TRUE) throw new ArithmeticException();\n    issue = \"none\";\n} catch ({{0}} ex) {\n    issue = \"arithmetic\";\n} catch ({{1}} ex) {\n    issue = \"other\";\n}",
    slots: [{"answer":3},{"answer":4}],
    explanation: "A ArithmeticException is a RuntimeException. Put the more specific handler first so it can receive that exception."
  },
  {
    difficulty: 3,
    topic: "Byte overflow",
    prompt: "What is the signed adjustment value after the compound assignment?",
    code: "byte count = -125;\ncount += -7;",
    choices: ["-125","0","124","-132"],
    answer: 2,
    explanation: "Compound assignment narrows the result back to byte. The signed range is -128 through 127, so -132 wraps to 124."
  },
  {
    difficulty: 3,
    topic: "Integer parsing failures",
    prompt: "What does the slot number handler store for this input?",
    code: "String input = \"16,7\";\nString status;\ntry {\n    status = String.valueOf(Integer.parseInt(input));\n} catch (NumberFormatException ex) {\n    status = \"invalid\";\n}",
    choices: ["null","invalid","16,7","0"],
    answer: 1,
    explanation: "\"16,7\" is not a valid decimal integer for parseInt. It throws NumberFormatException and the handler sets status to invalid."
  }
);
