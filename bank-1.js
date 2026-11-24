window.practiceBanks[1] = [
  {
    topic: 'Module 1 · Java technology and tooling',
    difficulty: 1,
    prompt: 'Which command compiles a file named Lantern.java into a class file?',
    choices: ['java Lantern.java', 'javac Lantern.java', 'java Lantern.class', 'javac Lantern.class'],
    answer: 1,
    explanation: 'javac reads Java source and produces class files. The java launcher starts a program.'
  },
  {
    topic: 'Module 1 · Java technology and tooling',
    difficulty: 1,
    prompt: 'What does the JVM execute when it loads a compiled class?',
    choices: ['The IDE project settings', 'The source file as plain text', 'The class file’s bytecode', 'The filename extensions in the project'],
    answer: 2,
    explanation: 'The compiler stores instructions called bytecode in the class file. The JVM runs those instructions.'
  },
  {
    topic: 'Module 2 · Java fundamentals',
    difficulty: 1,
    prompt: 'What is the value of boxes?',
    code: 'int pencils = 29;\nint boxes = pencils / 6;',
    choices: ['4', '4.833333333333333', '5', '6'],
    answer: 0,
    explanation: 'Both operands are int values. Integer division drops the fractional part, so 29 divided by 6 gives 4.'
  },
  {
    topic: 'Module 2 · Java fundamentals',
    difficulty: 1,
    type: 'dropdown',
    prompt: 'Complete the condition so the message prints when seats is at least 3.',
    code: 'if (seats {{0}} 3) {\n    System.out.println("Room available");\n}',
    slots: [{ choices: ['>', '==', '<=', '>='], answer: 3 }],
    explanation: 'The >= operator accepts 3 and any larger value.'
  },
  {
    topic: 'Module 3 · Classes and encapsulation',
    difficulty: 1,
    prompt: 'Two Thermos objects each have an ordinary int field named volume. What happens when the first object’s volume changes?',
    choices: ['Both volumes change', 'The second volume becomes zero', 'Only the first object’s volume changes', 'The second object receives a new field'],
    answer: 2,
    explanation: 'An instance field belongs to one object. Each Thermos has its own volume.'
  },
  {
    topic: 'Module 3 · Classes and encapsulation',
    difficulty: 1,
    prompt: 'Which modifier limits direct access to an ordinary field to its own top-level class and nested classes?',
    choices: ['private', 'public', 'protected', 'static'],
    answer: 0,
    explanation: 'private limits direct access to code inside the enclosing top-level class. The class can provide methods to control access.'
  },
  {
    topic: 'Module 4 · Inheritance and polymorphism',
    difficulty: 1,
    type: 'dropdown',
    prompt: 'Complete the declaration so Bus is a subclass of Vehicle.',
    code: 'class Bus {{0}} Vehicle {\n}',
    slots: [{ choices: ['implements', 'extends', 'super', 'instanceof'], answer: 1 }],
    explanation: 'A class uses extends to inherit from another class.'
  },
  {
    topic: 'Module 4 · Inheritance and polymorphism',
    difficulty: 1,
    prompt: 'What is true of a class declared abstract?',
    choices: ['It must be an interface', 'It cannot have instance fields', 'It cannot have a constructor', 'It cannot be instantiated directly'],
    answer: 3,
    explanation: 'You can create an object of a concrete subclass. The abstract class can still declare constructors and fields.'
  },
  {
    topic: 'Module 5 · Exceptions and language features',
    difficulty: 1,
    type: 'wordBank',
    prompt: 'Complete the exception handler so it prints the message when the parser rejects the input.',
    code: '{{0}} {\n    Integer.parseInt(input);\n} {{1}} (NumberFormatException error) {\n    System.out.println("Use digits");\n}',
    bank: ['finally', 'catch', 'try', 'throw', 'throws'],
    slots: [{ answer: 2 }, { answer: 1 }],
    explanation: 'Put code that may fail inside try. The matching catch block handles a NumberFormatException.'
  },
  {
    topic: 'Module 5 · Exceptions and language features',
    difficulty: 1,
    prompt: 'A delivery status can be QUEUED, SENT, or DELIVERED. Which Java type is designed to name a fixed set of values?',
    choices: ['An enum', 'An exception', 'An array', 'An annotation'],
    answer: 0,
    explanation: 'An enum declares a fixed set of named constants. A variable of that enum type can hold one of those constants.'
  },
  {
    topic: 'Module 6 · Collections',
    difficulty: 1,
    prompt: 'A sign-up list must keep the same name at more than one position. Which collection type fits?',
    choices: ['Set', 'List', 'Map', 'Iterator'],
    answer: 1,
    explanation: 'A List keeps items in order and allows duplicate values.'
  },
  {
    topic: 'Module 6 · Collections',
    difficulty: 1,
    type: 'dropdown',
    prompt: 'Complete the expression that looks up the number of chairs by its key.',
    code: 'Map<String, Integer> inventory = new HashMap<>();\ninventory.put("chair", 14);\nint chairs = inventory.{{0}}("chair");',
    slots: [{ choices: ['put', 'add', 'containsValue', 'get'], answer: 3 }],
    explanation: 'Map.get finds the value associated with a key. The key "chair" is associated with 14.'
  },
  {
    topic: 'Module 7 · Threads and Swing',
    difficulty: 1,
    prompt: 'Which method starts a Thread so that its task runs on a new thread?',
    choices: ['run()', 'join()', 'start()', 'getName()'],
    answer: 2,
    explanation: 'start() schedules the new thread to execute. Calling run() directly executes it on the calling thread.'
  },
  {
    topic: 'Module 7 · Threads and Swing',
    difficulty: 1,
    prompt: 'Which listener handles a JButton click?',
    choices: ['ActionListener', 'WindowListener', 'ItemListener', 'KeyListener'],
    answer: 0,
    explanation: 'A JButton fires an action event when activated. An ActionListener handles that event.'
  },
  {
    topic: 'Module 8 · JDBC and application integration',
    difficulty: 1,
    prompt: 'Which JDBC type represents an open connection to the database?',
    choices: ['ResultSet', 'SQLException', 'PreparedStatement', 'Connection'],
    answer: 3,
    explanation: 'A Connection represents the database session and can create statements to execute SQL.'
  },
  {
    topic: 'Module 8 · JDBC and application integration',
    difficulty: 1,
    prompt: 'A new ResultSet has rows. What call must move its cursor to the first row before you read a column?',
    choices: ['getString(1)', 'next()', 'close()', 'executeQuery()'],
    answer: 1,
    explanation: 'The cursor starts before the first row. next() advances it and returns true if a row is available.'
  },
  {
    topic: 'Module 1 · Java technology and tooling',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Compile Garden.java and run the resulting class from the same directory. Garden is in the unnamed package and has a valid main method.',
    code: '{{0}} Garden.java\n{{1}} Garden',
    bank: ['java', 'javap', 'javac', 'jar', 'javadoc'],
    slots: [{ answer: 2 }, { answer: 0 }],
    explanation: 'javac compiles the source file. java takes the class name when launching the compiled class.'
  },
  {
    topic: 'Module 1 · Java technology and tooling',
    difficulty: 2,
    prompt: 'A utility uses only Java 8 standard APIs and avoids OS-specific resources. What does a compatible JVM on another operating system let you do?',
    choices: ['Run the same compiled classes on that system', 'Open the class files as editable Java source', 'Remove all of the program’s dependencies automatically', 'Run classes targeting any future Java version'],
    answer: 0,
    explanation: 'Compiled Java bytecode can run on a compatible JVM across operating systems when the program’s dependencies are available.'
  },
  {
    topic: 'Module 2 · Java fundamentals',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'Complete the loop so it adds every array value exactly once, including in an empty array case.',
    code: 'int total = 0;\nfor (int i = 0; i {{0}} points.{{1}}; i++) {\n    total += points[i];\n}',
    slots: [
      { choices: ['<=', '>', '<', '>='], answer: 2 },
      { choices: ['size()', 'count', 'length()', 'length'], answer: 3 }
    ],
    explanation: 'Array positions go from 0 through length minus one. For an empty array, the condition is false before the first iteration.'
  },
  {
    topic: 'Module 2 · Java fundamentals',
    difficulty: 2,
    prompt: 'What does this method return for zone(13)?',
    code: 'static String zone(int score) {\n    if (score >= 15) return "gold";\n    if (score >= 10) return "silver";\n    return "bronze";\n}',
    choices: ['"gold"', '"bronze"', '"silverbronze"', '"silver"'],
    answer: 3,
    explanation: '13 passes the second condition. That return exits the method immediately.'
  },
  {
    topic: 'Module 3 · Classes and encapsulation',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'Complete the constructor so it saves the parameter in the object’s field.',
    code: 'class Badge {\n    private String label;\n\n    Badge(String label) {\n        {{0}} = {{1}};\n    }\n}',
    slots: [
      { choices: ['this.label', 'Badge.label', 'label', 'super.label'], answer: 0 },
      { choices: ['Badge.label', 'this.label', 'label', 'super.label'], answer: 2 }
    ],
    explanation: 'this.label selects the field on the new Badge. The unqualified label on the right is the parameter.'
  },
  {
    topic: 'Module 3 · Classes and encapsulation',
    difficulty: 2,
    prompt: 'A class owns a private int[] named levels. Which return statement gives callers the values while keeping them from changing the stored array through the result?',
    choices: ['return levels;', 'return levels.clone();', 'return this.levels;', 'return (int[]) levels;'],
    answer: 1,
    explanation: 'clone() creates a separate array. The primitive int values are copied, so edits to the returned array stay there.'
  },
  {
    topic: 'Module 4 · Inheritance and polymorphism',
    difficulty: 2,
    prompt: 'What prints when the final two lines run?',
    code: 'class Route {\n    String label() { return "Local"; }\n}\nclass Express extends Route {\n    @Override String label() { return "Express"; }\n}\n\nRoute route = new Express();\nSystem.out.println(route.label());',
    choices: ['Local', 'Route', 'Express', 'The call fails because Route is the reference type'],
    answer: 2,
    explanation: 'The object is an Express, so its overridden instance method supplies the result.'
  },
  {
    topic: 'Module 4 · Inheritance and polymorphism',
    difficulty: 2,
    type: 'wordBank',
    prompt: 'Make DeskLamp implement Switchable and add the required method.',
    code: 'interface Switchable {\n    void turnOn();\n}\nclass DeskLamp {{0}} Switchable {\n    {{1}} void turnOn() {\n        System.out.println("Lit");\n    }\n}',
    bank: ['extends', 'implements', 'private', 'protected', 'public'],
    slots: [{ answer: 1 }, { answer: 4 }],
    explanation: 'A class implements an interface. turnOn() is implicitly public in the interface, so the class method must be public.'
  },
  {
    topic: 'Module 5 · Exceptions and language features',
    difficulty: 2,
    prompt: 'What happens on the second line?',
    code: 'Integer limit = null;\nint next = limit + 1;',
    choices: ['next becomes 1', 'The addition produces null', 'The compiler treats limit as zero', 'Java throws NullPointerException'],
    answer: 3,
    explanation: 'Java tries to unbox limit into an int for the addition. A null reference has no int value to take out.'
  },
  {
    topic: 'Module 5 · Exceptions and language features',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'Declare that the caller is responsible for handling the checked IOException from Files.readAllBytes.',
    code: 'static byte[] load(Path file) {{0}} IOException {\n    return Files.readAllBytes(file);\n}',
    slots: [{ choices: ['throws', 'throw', 'catch', 'finally'], answer: 0 }],
    explanation: 'A throws clause lists the checked exceptions the method can pass to its caller.'
  },
  {
    topic: 'Module 6 · Collections',
    difficulty: 2,
    prompt: 'Which statement sorts the integers in scores into ascending order in the existing list?',
    code: 'List<Integer> scores = new ArrayList<>(Arrays.asList(82, 67, 93));',
    choices: ['Collections.reverse(scores);', 'Collections.sort(scores);', 'Arrays.sort(scores);', 'Collections.shuffle(scores);'],
    answer: 1,
    explanation: 'Collections.sort sorts a mutable List in place. Integer’s natural order is from smaller to larger.'
  },
  {
    topic: 'Module 6 · Collections',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'The ArrayList words contains non-null strings. Use the iterator to advance to the next word and remove it if it is empty.',
    code: 'Iterator<String> items = words.iterator();\nwhile (items.hasNext()) {\n    String word = items.{{0}}();\n    if (word.isEmpty()) {\n        items.{{1}}();\n    }\n}',
    slots: [
      { choices: ['remove', 'get', 'next', 'peek'], answer: 2 },
      { choices: ['next', 'clear', 'delete', 'remove'], answer: 3 }
    ],
    explanation: 'next() returns the current item and advances the iterator. A mutable list’s iterator can remove that last returned item safely.'
  },
  {
    topic: 'Module 7 · Threads and Swing',
    difficulty: 2,
    prompt: 'A background thread has finished computing a count. How should it schedule an update to an existing Swing JLabel?',
    choices: ['Call SwingUtilities.invokeLater with a Runnable that sets the label', 'Call Thread.sleep on the background thread before setting the label', 'Put the label update in a new Thread', 'Set the text directly as long as the count is final'],
    answer: 0,
    explanation: 'invokeLater puts the label update on Swing’s event dispatch thread, where Swing components should be updated.'
  },
  {
    topic: 'Module 7 · Threads and Swing',
    difficulty: 2,
    prompt: 'After starting worker, which call makes the current thread wait for worker to finish?',
    choices: ['worker.run()', 'worker.start()', 'worker.join()', 'worker.isAlive()'],
    answer: 2,
    explanation: 'join() waits for the named thread to terminate before the calling thread continues.'
  },
  {
    topic: 'Module 8 · JDBC and application integration',
    difficulty: 2,
    type: 'dropdown',
    prompt: 'Bind requestedOwner to the single SQL placeholder and execute this SELECT.',
    code: 'String sql = "SELECT title FROM books WHERE owner = ?";\ntry (PreparedStatement query = connection.prepareStatement(sql)) {\n    query.setString({{0}}, requestedOwner);\n    try (ResultSet titles = query.{{1}}()) {\n        // Read the matching rows.\n    }\n}',
    slots: [
      { choices: ['0', '1', '2', '-1'], answer: 1 },
      { choices: ['executeUpdate', 'getMoreResults', 'getConnection', 'executeQuery'], answer: 3 }
    ],
    explanation: 'JDBC numbers parameters starting at 1. executeQuery() returns the result rows from this SELECT.'
  },
  {
    topic: 'Module 8 · JDBC and application integration',
    difficulty: 2,
    prompt: 'A prepared UPDATE changes the status of all matching rows. Which call returns the number of rows the statement updated?',
    choices: ['statement.executeQuery()', 'statement.getFetchSize()', 'statement.executeUpdate()', 'statement.getMaxRows()'],
    answer: 2,
    explanation: 'executeUpdate() runs an update statement and returns its affected row count.'
  },
  {
    topic: 'Module 2 · Java fundamentals',
    difficulty: 3,
    prompt: 'What two numbers does the program print, in order?',
    code: 'int step = 4;\nint total = 0;\ndo {\n    total += step++;\n} while (total < 10);\nSystem.out.println(total);\nSystem.out.println(step);',
    choices: ['9, then 6', '10, then 7', '15, then 6', '15, then 7'],
    answer: 3,
    explanation: 'step++ adds the old value and then increases step. The loop adds 4, 5, and 6, leaving total at 15 and step at 7.'
  },
  {
    topic: 'Module 2 · Java fundamentals',
    difficulty: 3,
    type: 'dropdown',
    prompt: 'Fill the blanks so average(2, 5) returns 3.5, and the addition also works when a and b are both Integer.MAX_VALUE.',
    code: 'static double average(int a, int b) {\n    return ({{0}} + b) / {{1}};\n}',
    slots: [
      { choices: ['a', '(int) a', '(double) a', '(short) a'], answer: 2 },
      { choices: ['2.0', '2.5', '1.0', '0.5'], answer: 0 }
    ],
    explanation: 'Casting before addition keeps the sum out of int arithmetic. Dividing by 2.0 gives the mean and keeps any fractional part.'
  },
  {
    topic: 'Module 3 · Classes and encapsulation',
    difficulty: 3,
    prompt: 'What prints after creating two Stamp objects and printing their numbers?',
    code: 'class Stamp {\n    private static int count;\n    private final int number;\n\n    Stamp() { number = ++count; }\n    int number() { return number; }\n}\n\nStamp first = new Stamp();\nStamp second = new Stamp();\nSystem.out.println(first.number() + "," + second.number());',
    choices: ['1,1', '1,2', '2,1', '2,2'],
    answer: 1,
    explanation: 'The shared count grows for each Stamp. Each object stores the number assigned during its own construction.'
  },
  {
    topic: 'Module 4 · Inheritance and polymorphism',
    difficulty: 3,
    prompt: 'What does the final statement print?',
    code: 'class Counter {\n    String add(int n) { return "base int"; }\n}\nclass Meter extends Counter {\n    @Override String add(int n) { return "meter int"; }\n    String add(double n) { return "meter double"; }\n}\n\nCounter counter = new Meter();\nSystem.out.println(counter.add(2));',
    choices: ['base int', 'meter double', 'meter int', 'The overloads make the call ambiguous'],
    answer: 2,
    explanation: 'The reference type selects add(int). The Meter object then supplies its override of that same signature.'
  },
  {
    topic: 'Module 5 · Exceptions and language features',
    difficulty: 3,
    prompt: 'What prints when check() is called?',
    code: 'static void check() {\n    try {\n        System.out.print("A");\n        return;\n    } finally {\n        System.out.print("B");\n    }\n}',
    choices: ['AB', 'A', 'BA', 'B'],
    answer: 0,
    explanation: 'The try block prints A. The finally block prints B before the return leaves the method.'
  },
  {
    topic: 'Module 5 · Exceptions and language features',
    difficulty: 3,
    type: 'dropdown',
    prompt: 'Complete the parameter so sum accepts either a List<Integer> or a List<Double> and safely reads each value as a Number.',
    code: 'static double sum(List<{{0}}> readings) {\n    double total = 0;\n    for (Number reading : readings) {\n        total += reading.doubleValue();\n    }\n    return total;\n}',
    slots: [{ choices: ['Number', '?', '? super Number', '? extends Number'], answer: 3 }],
    explanation: '? extends Number lets the list contain any specific subtype of Number. Either kind of list can be read using the Number type.'
  },
  {
    topic: 'Module 6 · Collections',
    difficulty: 3,
    prompt: 'Which list remains after the remove call?',
    code: 'List<Integer> lanes = new ArrayList<>(Arrays.asList(2, 9, 2));\nlanes.remove(2);',
    choices: ['[9, 2]', '[2, 9]', '[9]', '[2, 2]'],
    answer: 1,
    explanation: 'The int argument selects remove(int index). Position 2 is the third element, so the first 2 remains.'
  },
  {
    topic: 'Module 6 · Collections',
    difficulty: 3,
    type: 'dropdown',
    prompt: 'Sort this mutable list before a natural-order binary search, and test whether 12 was found.',
    code: 'Collections.{{0}}(values);\nint position = Collections.binarySearch(values, 12);\nboolean found = position {{1}} 0;',
    slots: [
      { choices: ['reverse', 'shuffle', 'sort', 'rotate'], answer: 2 },
      { choices: ['>', '<', '==', '>='], answer: 3 }
    ],
    explanation: 'Binary search expects the list to be sorted in the search order. A nonnegative result is an index, including index zero.'
  },
  {
    topic: 'Module 7 · Threads and Swing',
    difficulty: 3,
    prompt: 'Two threads share a Counter object and both call its increment method 1,000 times. Which change makes these updates mutually exclusive?',
    code: 'class Counter {\n    private int count;\n    void increment() { count++; }\n}',
    choices: ['Declare count volatile', 'Declare a separate local lock inside each call', 'Sleep for one millisecond before incrementing', 'Declare increment as synchronized'],
    answer: 3,
    explanation: 'A synchronized instance method uses the shared object as its lock. One call completes its read, addition, and write before another call can enter.'
  },
  {
    topic: 'Module 8 · JDBC and application integration',
    difficulty: 3,
    type: 'wordBank',
    prompt: 'Group the two writes into one JDBC transaction. The connection starts with auto-commit enabled. Complete the success and failure paths.',
    code: 'connection.setAutoCommit({{0}});\ntry {\n    writeItem(connection);\n    writeReceipt(connection);\n    connection.{{1}}();\n} catch (SQLException failure) {\n    connection.{{2}}();\n    throw failure;\n}',
    bank: ['true', 'close', 'commit', 'false', 'rollback', 'clearWarnings'],
    slots: [{ answer: 3 }, { answer: 2 }, { answer: 4 }],
    explanation: 'Turn off auto-commit to keep both writes uncommitted until they succeed together. Roll back if a write fails.'
  },
  {
    topic: 'Module 8 · JDBC and application integration',
    difficulty: 3,
    prompt: 'A Swing search button runs a JDBC query that might take several seconds. Which arrangement keeps the window responsive and updates its JTable safely?',
    choices: ['Run the query on a worker, then update the table model on the event dispatch thread', 'Run both the query and the table update on the event dispatch thread', 'Run both the query and the table update directly on a background thread', 'Run the query on the event dispatch thread, then sleep before updating the table'],
    answer: 0,
    explanation: 'A slow query can block the event dispatch thread. A worker can fetch the rows and schedule the Swing update back on the event dispatch thread.'
  }
];
