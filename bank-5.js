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
