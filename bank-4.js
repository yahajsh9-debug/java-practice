window.practiceBanks[4] = [
  {
    topic: 'Boolean operators',
    difficulty: 1,
    prompt: 'Accept the entry when total is at least limit and count is below limit. Which condition does that?',
    choices: [
      'total > limit && count <= limit',
      'total >= limit && count < limit',
      'total >= limit || count < limit',
      'total <= limit && count > limit'
    ],
    answer: 1,
    explanation: 'At least includes equality, so use >=. Below uses <. Both comparisons must pass, so join them with &&.'
  },
  {
    topic: 'Command-line arguments',
    difficulty: 1,
    type: 'dropdown',
    prompt: 'Print each command-line argument on its own line, in the order it was passed.',
    code: `public static void main(String[] args) {
    for (String item : {{0}}) {
        System.out.{{1}}(item);
    }
}`,
    slots: [
      { choices: ['args[0]', 'args.length', 'args'], answer: 2 },
      { choices: ['println', 'print', 'printf'], answer: 0 }
    ],
    explanation: 'The enhanced for loop visits every element of args. println ends the line after each one.'
  },
  {
    topic: 'Conditions and boundaries',
    difficulty: 1,
    type: 'wordBank',
    prompt: 'Return Senior from age 65, Adult from 20 through 64, and Youth below 20.',
    code: `static String group(int age) {
    if ({{0}}) {
        return "Senior";
    } else if ({{1}}) {
        return "Adult";
    }
    return "Youth";
}`,
    bank: ['age > 65', 'age >= 20', 'age <= 20', 'age >= 65', 'age > 20'],
    slots: [{ answer: 3 }, { answer: 1 }],
    explanation: 'The first check includes age 65. The second check runs only for younger ages and includes age 20.'
  },
  {
    topic: 'Overriding methods',
    difficulty: 1,
    prompt: 'Which annotation tells the compiler to check that this method overrides Object.toString()?',
    code: `class Badge {
    public String toString() {
        return "Visitor";
    }
}`,
    choices: ['@Overload', '@Inherited', '@Deprecated', '@Override'],
    answer: 3,
    explanation: '@Override asks the compiler to check the method signature against a method inherited from a parent type.'
  },
  {
    topic: 'Creating objects',
    difficulty: 1,
    type: 'wordBank',
    prompt: 'The Store class has an accessible no-argument constructor and an instance method named search. Create a Store and call search.',
    code: `Store store = {{0}};
{{1}};`,
    bank: ['Store()', 'store.search()', 'new Store()', 'Store.search()', 'store.search'],
    slots: [{ answer: 2 }, { answer: 1 }],
    explanation: 'new Store() creates an object. Calling store.search() runs the instance method on that object.'
  },
  {
    topic: 'Operator precedence',
    difficulty: 1,
    prompt: 'What is the value of points after the assignment?',
    code: `int points = 40;
points += 18 % 5 + 4 * 3;`,
    choices: ['55', '52', '60', '43'],
    answer: 0,
    explanation: '18 % 5 gives 3 and 4 * 3 gives 12. The assignment adds 15 to 40.'
  },
  {
    topic: 'Primitive types',
    difficulty: 1,
    type: 'dropdown',
    prompt: 'Choose a primitive type for each declaration. Use the smallest listed signed integer type that holds each whole number. Match each decimal literal to the type indicated by its suffix.',
    code: `{{0}} ratio = 17.25d;
{{1}} offset = 4.5f;
{{2}} active = true;
{{3}} seats = 120;
{{4}} visits = 1_300_000;`,
    slots: [
      { choices: ['float', 'double', 'long'], answer: 1 },
      { choices: ['short', 'double', 'float'], answer: 2 },
      { choices: ['boolean', 'byte', 'char'], answer: 0 },
      { choices: ['short', 'byte', 'int'], answer: 1 },
      { choices: ['short', 'long', 'int'], answer: 2 }
    ],
    explanation: 'The d suffix means double. The f suffix means float. true has type boolean. The constant 120 fits in a byte, and 1,300,000 fits in an int.'
  },
  {
    topic: 'Wrapper classes',
    difficulty: 1,
    prompt: 'Which line creates a Character reference from letter using autoboxing?',
    code: `char letter = 'K';`,
    choices: ['Character wrapped = "K";', 'char wrapped = Character;', 'Character wrapped = letter;', 'String wrapped = letter;'],
    answer: 2,
    explanation: 'Java automatically converts a char value to a Character reference when you assign it to a Character variable.'
  },
  {
    topic: 'Two-dimensional arrays',
    difficulty: 1,
    prompt: 'Which line changes the only zero in this array to 50?',
    code: `int[][] scores = {
    {81, 92, 74},
    {96, 88, 0},
    {75, 90, 61}
};`,
    choices: ['scores[2][1] = 50;', 'scores[1][2] = 50;', 'scores[2][3] = 50;', 'scores[1][1] = 50;'],
    answer: 1,
    explanation: 'Indexes start at zero. The second row is at index 1 and its third element is at index 2.'
  },
  {
    topic: 'Parsing booleans',
    difficulty: 1,
    prompt: 'Which line parses this String so enabled becomes true?',
    code: `String value = "TrUe";`,
    choices: ['boolean enabled = value == "true";', 'boolean enabled = Boolean.getBoolean(value);', 'boolean enabled = (boolean) value;', 'boolean enabled = Boolean.parseBoolean(value);'],
    answer: 3,
    explanation: 'Boolean.parseBoolean returns true when the text is true in any mix of uppercase and lowercase letters.'
  },
  {
    topic: 'Java literals',
    difficulty: 1,
    type: 'wordBank',
    prompt: 'Use a character for the initial, the whole number 234 for the count, a boolean for open, and a float literal for the price.',
    code: `char initial = {{0}};
short count = {{1}};
boolean open = {{2}};
float price = {{3}};`,
    bank: ['234.55', 'false', "'C'", '"C"', '234', '234.55f', '"234"', 'False'],
    slots: [{ answer: 2 }, { answer: 4 }, { answer: 1 }, { answer: 5 }],
    explanation: 'Single quotes make a char. The constant 234 fits in short, false is a boolean literal, and the f suffix makes the price a float.'
  },
  {
    topic: 'Operator precedence',
    difficulty: 1,
    prompt: 'What value is stored in result?',
    code: `int result = 4 + 7 * 3 % 5;`,
    choices: ['5', '3', '10', '33'],
    answer: 0,
    explanation: 'Multiplication and remainder have the same priority and are evaluated left to right. 7 * 3 is 21, then 21 % 5 is 1. Adding 4 gives 5.'
  },
  {
    topic: 'Command-line arguments',
    difficulty: 1,
    prompt: 'A program uses this Java 8 entry point and is launched with java Route north west. What can main read from args?',
    code: `public static void main(String[] args) {
    // Entry point of class Route
}`,
    choices: ['Three strings: Route, north, west', 'Two strings: north, west', 'One string: north west', 'One string: Route'],
    answer: 1,
    explanation: 'The launcher uses Route as the class name. It passes north and west as two separate elements of the String array.'
  },
  {
    topic: 'Numeric input',
    difficulty: 1,
    type: 'dropdown',
    prompt: 'Read a Celsius temperature that may contain a decimal, then convert it to Fahrenheit.',
    code: `Scanner input = new Scanner(System.in);
double celsius = input.{{0}}();
double fahrenheit = {{1}};
System.out.println(fahrenheit);`,
    slots: [
      { choices: ['nextInt', 'nextLine', 'nextDouble'], answer: 2 },
      { choices: ['celsius * 1.8 + 32', '(celsius - 32) / 1.8', 'celsius * (1.8 + 32)'], answer: 0 }
    ],
    explanation: 'nextDouble reads a decimal number. The Fahrenheit formula multiplies Celsius by 1.8, then adds 32.'
  },
  {
    topic: 'Text input',
    difficulty: 1,
    prompt: 'Which expression reads a full name such as Ana Cruz, including the space, from a new Scanner?',
    code: `Scanner input = new Scanner(System.in);`,
    choices: ['input.next()', 'input.nextInt()', 'input.nextLine()', 'input.toString()'],
    answer: 2,
    explanation: 'nextLine reads through the end of the current line. next reads just one token, such as Ana.'
  },
  {
    topic: 'Program entry point',
    difficulty: 1,
    prompt: 'Which declaration can serve as the entry point for a Java 8 console program?',
    choices: [
      'public void main(String[] args)',
      'public static int main(String[] args)',
      'public static void main(String args)',
      'public static void main(String args[])'
    ],
    answer: 3,
    explanation: 'In Java 8 the launcher expects public static void main with a String array parameter. The brackets may follow the name or the type.'
  },
  {
    topic: 'Compound conditions',
    difficulty: 2,
    prompt: 'What does award(3.6, 670) return?',
    code: `static int award(double grade, int test) {
    if (grade >= 3.8 && test >= 650) {
        return 2000;
    } else if (grade >= 3.4 || test >= 650) {
        return 1000;
    }
    return 0;
}`,
    choices: ['0', '1000', '2000', '3000'],
    answer: 1,
    explanation: 'The grade of 3.6 fails the first check even though the test score passes. The second check only needs one condition to pass and returns 1000.'
  },
  {
    topic: 'Nested conditions',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'A museum charges $12 for a regular ticket and $4 for members. Members older than 65 enter free. A nonmember can add a $30 membership to the regular ticket. Complete the decision.',
    code: `static int price(boolean member, int age, boolean addMembership) {
    if (member) {
        if ({{0}}) {
            return 0;
        }
        return {{1}};
    }
    return addMembership ? {{2}} : 12;
}`,
    slots: [
      { choices: ['age >= 65', 'age < 65', 'age > 65'], answer: 2 },
      { choices: ['4', '12', '30'], answer: 0 },
      { choices: ['30', '34', '42'], answer: 2 }
    ],
    explanation: 'Older than 65 excludes 65. Other members pay $4. A visitor adding membership pays the $12 ticket plus $30.'
  },
  {
    topic: 'Updating array elements',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Increase each premium in place by 25 percent.',
    code: `for (int i = 0; {{0}}; i++) {
    {{1}} *= {{2}};
}`,
    bank: ['i <= premiums.length', 'premiums[i]', '0.25', 'i < premiums.length', 'premiums[0]', '1.25'],
    slots: [{ answer: 3 }, { answer: 1 }, { answer: 5 }],
    explanation: 'Use each index from zero through length - 1. Growing a value by 25 percent means multiplying that array element by 1.25.'
  },
  {
    topic: 'Do-while loops',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Show the menu once before trying the first operation. Each time runOperation() returns true, show the menu again. Exit on false.',
    code: `{{0}} {
    showMenu();
} {{1}};`,
    bank: ['while (runOperation())', 'while (!runOperation())', 'do', 'if (runOperation())', 'for (;;)'],
    slots: [{ answer: 2 }, { answer: 0 }],
    explanation: 'A do-while runs its body before the first condition check. It repeats after each successful operation.'
  },
  {
    topic: 'Method modifiers',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Make showRules callable as Account.showRules() from other packages. Make open() an instance method accessible in this package and to subclasses under Java’s protected-access rules.',
    code: `public class Account {
    {{0}} void showRules() { }
    {{1}} void open() { }
}`,
    bank: ['private', 'protected', 'public', 'protected static', 'public static'],
    slots: [{ answer: 4 }, { answer: 1 }],
    explanation: 'public allows access across packages. static permits calling the method on the class. protected permits package access and the allowed subclass access for the instance method.'
  },
  {
    topic: 'Constructors and getters',
    difficulty: 2,
    prompt: 'What is printed when the last two statements run in a class in the same package?',
    code: `class Panel {
    private final int width;
    private final int height;

    Panel(int width, int height) {
        this.width = width;
        this.height = height;
    }

    int width() { return width; }
    int area() { return width * height; }
}

Panel panel = new Panel(12, 25);
System.out.printf("%d %b%n", panel.width(), panel.area() == 300);`,
    choices: ['25 true', '12 false', '12 true', '300 true'],
    answer: 2,
    explanation: 'The constructor stores 12 as the width and 25 as the height. The area is 300, so %b prints true.'
  },
  {
    topic: 'Inheritance and constructors',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Savings must subclass Account, call Account(String) with "Savings", and store the supplied name in its own field.',
    code: `class Savings {{0}} Account {
    private final String name;

    Savings(String name) {
        {{1}}("Savings");
        {{2}}.name = name;
    }
}`,
    bank: ['this', 'extends', 'implements', 'super', 'new'],
    slots: [{ answer: 1 }, { answer: 3 }, { answer: 0 }],
    explanation: 'extends makes Savings a subclass. super(...) calls the parent constructor. this.name selects the field on the current object.'
  },
  {
    topic: 'Primitive conversions',
    difficulty: 2,
    prompt: 'Which assignment needs a cast or a change to the literal before this code will compile?',
    code: `int number = 65;
char letter = (char) number;    // A
int whole = (int) 42.75;       // B
float weight = 3.5;           // C
double widened = weight;      // D`,
    choices: ['A only', 'B only', 'D only', 'C only'],
    answer: 3,
    explanation: '3.5 without a suffix is a double. Write 3.5f or cast to float. The final assignment widens a float to a double automatically.'
  },
  {
    topic: 'Compound assignment',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'Choose the final value of each variable after its compound assignment.',
    code: `int a = 7;
double b = 4.5;
int c = 27;
float d = 0.5f;

a += 5 % 2 + 6;     // a is {{0}}
b /= 3 * 2;         // b is {{1}}
c %= 4 * 4;         // c is {{2}}
d *= 2 + 7 % 4;     // d is {{3}}`,
    slots: [
      { choices: ['13', '14', '19'], answer: 1 },
      { choices: ['0.75', '3.0', '1.5'], answer: 0 },
      { choices: ['3', '16', '11'], answer: 2 },
      { choices: ['5.0', '1.0', '2.5'], answer: 2 }
    ],
    explanation: 'Each compound assignment uses the whole expression to its right. The right-hand results are 7, 6, 16, and 5.'
  },
  {
    topic: 'Null and blank text',
    difficulty: 2,
    prompt: 'Which expression is true for null, empty text, or text containing only spaces and tabs, and false for text with visible characters? Assume the input contains only printable ASCII characters and tabs.',
    choices: [
      'text == null || text.trim().isEmpty()',
      'text.trim().isEmpty() || text == null',
      'text == null && text.trim().isEmpty()',
      'text == "" || text.equals(" ")'
    ],
    answer: 0,
    explanation: 'The left side handles null first, so Java can skip the right side. For a non-null string, trim removes spaces and tabs at its ends.'
  },
  {
    topic: 'String concatenation',
    difficulty: 2,
    prompt: 'What are the three lines printed by this code, in order?',
    code: `int x = 4;
int y = 6;
String label = null;
System.out.println("sum " + x + y);
System.out.println(label + " left");
System.out.println("sum " + (x + y));`,
    choices: [
      'sum 10 / null left / sum 10',
      'sum 46 / left / sum 10',
      'sum 46 / null left / sum 10',
      'sum 46 / null left / sum 46'
    ],
    answer: 2,
    explanation: 'Starting with a String makes the first line append 4 and 6 separately. String concatenation displays null as text. The parentheses add the numbers on the last line.'
  },
  {
    topic: 'Searching arrays',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Find the largest value in a nonempty array of finite numbers. The values may all be negative.',
    code: `static double max(double[] readings) {
    double highest = {{0}};
    for (int i = 1; {{1}}; i++) {
        if (readings[i] > highest) {
            highest = {{2}};
        }
    }
    return highest;
}`,
    bank: ['0', 'readings[0]', 'i < readings.length', 'i <= readings.length', 'readings[i]', 'i'],
    slots: [{ answer: 1 }, { answer: 2 }, { answer: 4 }],
    explanation: 'Start with the first actual reading so negative-only arrays work. Check each remaining reading and retain the larger value.'
  },
  {
    topic: 'Arithmetic and widening',
    difficulty: 2,
    prompt: 'Which return expression computes the negative square for every int input when the method returns long?',
    code: `static long negativeSquare(int value) {
    // Return the negative square of value.
}`,
    choices: ['return -(value ^ 2);', 'return -((long) value * value);', 'return (long) -(value * value);', 'return -(value + value);'],
    answer: 1,
    explanation: 'Cast one operand before multiplying. The multiplication then occurs as long arithmetic and can hold the square of any int.'
  },
  {
    topic: 'Stacks with ArrayList',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Use the front of the list as the top of the stack. Push inserts a value at the front. Pop removes and returns the front value. Assume the list is nonempty when pop runs.',
    code: `static void push(ArrayList<Integer> stack, Integer item) {
    stack.{{0}};
}

static Integer pop(ArrayList<Integer> stack) {
    return stack.{{1}};
}`,
    bank: ['get(0)', 'add(item)', 'remove(0)', 'set(0, item)', 'add(0, item)', 'remove(Integer.valueOf(0))'],
    slots: [{ answer: 4 }, { answer: 2 }],
    explanation: 'add(0, item) inserts before the previous first element. remove(0) removes the element at index zero and returns it.'
  },
  {
    topic: 'Parsing floating-point values',
    difficulty: 2,
    prompt: 'Which line reads a decimal number from the string, adds 5f, and stores the result in float sum?',
    code: `String amount = "12.5";`,
    choices: [
      'float sum = Integer.parseInt(amount) + 5f;',
      'float sum = Float.valueOf(amount + 5f);',
      'float sum = Double.parseDouble(amount) + 5f;',
      'float sum = Float.parseFloat(amount) + 5f;'
    ],
    answer: 3,
    explanation: 'Float.parseFloat reads fractional text as a float. Adding another float gives 17.5f.'
  },
  {
    topic: 'Instance members',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Complete main so it creates a Record, marks that object ready, and runs its save method.',
    code: `class Record {
    private boolean ready;
    void save() { }

    public static void main(String[] args) {
        Record record = {{0}};
        {{1}} = true;
        {{2}};
    }
}`,
    bank: ['new record()', 'Record.ready', 'record.save()', 'new Record()', 'record.ready', 'record.save'],
    slots: [{ answer: 3 }, { answer: 4 }, { answer: 2 }],
    explanation: 'The constructor name is case-sensitive. Use record to access the field and method on the new object. main is inside Record, so it can access the private field.'
  },
  {
    topic: 'Protected access',
    difficulty: 3,
    prompt: 'Box is public and width is a protected instance field. Which statement about access is correct?',
    choices: [
      'Only Box can access width.',
      'Any class in any package can access width through a Box reference.',
      'Other classes in the same package can access width. A subclass in another package can use it through this.',
      'A subclass in another package can access width through any variable declared as Box.'
    ],
    answer: 2,
    explanation: 'Protected allows package access. In a subclass in another package, use a subclass instance to reach the field. For example, this.width accesses it on the current object.'
  },
  {
    topic: 'String references',
    difficulty: 3,
    prompt: 'What does this code print? A slash separates the two printed values.',
    code: `String first = "blue";
String second = "blue";
String third = second;
second = "green";
System.out.println((first == third) + " / " + second);`,
    choices: ['false / blue', 'true / green', 'false / green', 'true / blue'],
    answer: 1,
    explanation: 'The two blue literals refer to the same pooled object. third keeps that reference after second is assigned to green.'
  },
  {
    topic: 'Numeric overflow and precision',
    difficulty: 3,
    type: 'dropdown',
    prompt: 'Choose the values printed by these Java statements.',
    code: `byte count = 127;
count++;
System.out.println(count);        // {{0}}
System.out.println(1.0 / 3.0);    // {{1}}
System.out.println(1.0f / 3.0f);  // {{2}}`,
    slots: [
      { choices: ['128', '127', '-128'], answer: 2 },
      { choices: ['0.3333333333333333', '0.33333334', '0'], answer: 0 },
      { choices: ['0.3333333333333333', '0.33333334', '0'], answer: 1 }
    ],
    explanation: 'Incrementing 127 wraps a byte to -128. Double division and float division round one-third to different representable values.'
  },
  {
    topic: 'Removing from ArrayList',
    difficulty: 3,
    prompt: 'Complete the for header so every invoice is handled once in its original order and then removed.',
    code: `// invoices is an ArrayList<String>.
for ( /* complete the header */ ) {
    handle(invoices.get(i));
    invoices.remove(i);
}`,
    choices: ['int i = 0; i < invoices.size(); i++', 'int i = 1; i < invoices.size(); i++', 'int i = invoices.size() - 1; i >= 0; i--', 'int i = 0; i < invoices.size();'],
    answer: 3,
    explanation: 'Each removal moves the next unprocessed invoice into index zero. Keeping i at zero processes the original order until the list is empty.'
  },
  {
    topic: 'Narrowing and boxing',
    difficulty: 3,
    prompt: 'What does the print statement display?',
    code: `double reading = 258.75;
int whole = (int) reading;
Byte wrapped = (byte) whole;
System.out.println(whole + " / " + wrapped);`,
    choices: ['258 / 2', '259 / 3', '258 / 127', '258 / -2'],
    answer: 0,
    explanation: 'Casting the double to int drops the fraction. Casting 258 to byte keeps only its lowest eight bits, which represent 2. Boxing preserves that value.'
  },
  {
    topic: 'Field and local scope',
    difficulty: 3,
    prompt: 'What does new Reading().show() print?',
    code: `class Reading {
    int level = 5;
    static int count = 8;

    void show() {
        int level = 11;
        int count = 12;
        System.out.println(level + " " + this.level + " "
                + count + " " + Reading.count);
    }
}`,
    choices: ['5 5 8 8', '11 11 12 12', '11 5 12 8', '5 11 8 12'],
    answer: 2,
    explanation: 'The unqualified names use the local variables. this.level reads the instance field, and Reading.count reads the static field.'
  },
  {
    topic: 'Pass-by-value and scope',
    difficulty: 3,
    prompt: 'Which statement describes the values in main and inside step at the end of its increment?',
    code: `static void step(int total) {
    total++;
}

public static void main(String[] args) {
    int total = 55;
    for (int count = 0; count < 3; count++) {
        step(total);
    }
    System.out.println(total);
}`,
    choices: [
      'main prints 58 and the last increment in step reaches 58.',
      'main prints 55 and each call to step reaches 56.',
      'main prints 56 and each call to step reaches 56.',
      'main prints 55 and each call to step stays at 55.'
    ],
    answer: 1,
    explanation: 'Java copies the int value into each call. step increments its local copy. The caller’s total stays 55, and count is scoped to the loop.'
  },
  {
    topic: 'Loop variable scope',
    difficulty: 3,
    prompt: 'Which method compiles as written?',
    code: `static void a() {
    for (int i = 0; i < 3; i++) { }
    for (int i = 0; i < 3; i++) { }
}

static void b() {
    int i = 10;
    for (int i = 0; i < 3; i++) { }
}`,
    choices: ['Both methods', 'Neither method', 'Only b()', 'Only a()'],
    answer: 3,
    explanation: 'In a, each declaration belongs to a separate loop. In b, the first local i is still in scope when the loop tries to declare another i.'
  },
  {
    topic: 'Parameter shadowing',
    difficulty: 3,
    prompt: 'What does main print? A slash separates the two numbers.',
    code: `class Game {
    static int bonusPoints = 500;

    static int update(int score, Boolean bonus, int bonusPoints) {
        if (bonus) {
            score += bonusPoints;
        }
        return score;
    }

    public static void main(String[] args) {
        int score = 20;
        int updated = update(score, true, 80);
        System.out.println(score + " / " + updated);
    }
}`,
    choices: ['20 / 100', '20 / 520', '100 / 100', '20 / 20'],
    answer: 0,
    explanation: 'The method uses its bonusPoints parameter, which is 80. It returns 100 and the original score remains 20.'
  },
  {
    topic: 'Scanner token and line reads',
    difficulty: 3,
    type: 'dropdown',
    prompt: 'Which values does the Scanner return? Quotes show exactly which characters are in each string.',
    code: `Scanner scanner = new Scanner("8 Blue 3 Red 4 Green");
Object first = scanner.next();      // {{0}}
Object second = scanner.next();     // {{1}}
Object third = scanner.nextInt();   // {{2}}
Object rest = scanner.nextLine();   // {{3}}`,
    slots: [
      { choices: ['8 as an Integer', '"8"', '"8 Blue"'], answer: 1 },
      { choices: ['"Blue"', '"8"', '"Blue 3"'], answer: 0 },
      { choices: ['"3"', '8 as an Integer', '3 as an Integer'], answer: 2 },
      { choices: ['"Red 4 Green"', '" Red 4 Green"', '"4 Green"'], answer: 1 }
    ],
    explanation: 'next reads string tokens. nextInt reads a number, which is boxed when stored in Object. nextLine starts where nextInt stopped, so the remaining text starts with a space.'
  },
  {
    topic: 'Reading stack traces',
    difficulty: 3,
    prompt: 'What does this stack trace establish about where the exception was thrown?',
    code: `java.lang.ArrayIndexOutOfBoundsException: 7
    at Catalog.readEntry(Catalog.java:24)
    at Catalog.showEntries(Catalog.java:16)
    at Catalog.main(Catalog.java:8)`,
    choices: [
      'There is a Java syntax error on line 8.',
      'showEntries threw the exception on line 16.',
      'readEntry threw the exception on line 24.',
      'Exactly three method calls have occurred since the program started.'
    ],
    answer: 2,
    explanation: 'The first frame points to the throwing method and line. The frames below show callers on the stack at that moment.'
  },
  {
    topic: 'Exception handling',
    difficulty: 3,
    type: 'wordBank',
    prompt: 'runFileJob() can throw IOException. For an IOException, print the exception message. For another Exception, print its stack trace.',
    code: `try {
    runFileJob();
} catch ({{0}} error) {
    {{1}};
} catch ({{2}} error) {
    {{3}};
}`,
    bank: ['Exception', 'error.printStackTrace()', 'System.out.println(error.printStackTrace())', 'IOException', 'System.out.println(error.getMessage())', 'Error'],
    slots: [{ answer: 3 }, { answer: 4 }, { answer: 0 }, { answer: 1 }],
    explanation: 'Catch the specific IOException before the broader Exception. getMessage returns text. printStackTrace writes the trace itself.'
  }
];
