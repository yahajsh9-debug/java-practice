window.practiceBanks = {};

window.practiceExams = [
  { id: 1, title: 'Java Practice Exam 1', subtitle: 'Course Modules 1–8', detail: 'Java fundamentals, object-oriented programming, collections, Swing, and JDBC.', minutes: 50, testingSize: 50, testingGroups: [6, 7, 6, 6, 6, 7, 6, 6] },
  { id: 2, title: 'Java Practice Exam 2', subtitle: 'Microsoft 98-388 Quick Practice', detail: 'Syntax, variables, strings, array basics, and control flow.', minutes: 50, testingSize: 50 },
  { id: 3, title: 'Java Practice Exam 3', subtitle: '98-388 Introduction to Programming Using Java', detail: 'Expressions, arrays, objects, and debugging.', minutes: 50, testingSize: 50 },
  { id: 4, title: 'Java Practice Exam 4', subtitle: 'ITS Set 1', detail: 'Data types, branching, loops, scope, and exceptions.', minutes: 50, testingSize: 40, testingGroups: [7, 11, 8, 8, 6] },
  { id: 5, title: 'Java Practice Exam 5', subtitle: 'Mixed Review', detail: 'New scenarios that combine code tracing, arrays, methods, and debugging.', minutes: null },
  { id: 6, title: 'Closest thing to the real thing exam', subtitle: 'ITS Java Certification Simulation', detail: 'A timed simulation covering all five ITS Java topic areas, with a final review and a score report by topic.', minutes: 50, testingSize: 60, testingGroups: [12, 12, 12, 12, 12], simulation: true },
  { id: 7, title: 'Bonus Java Practice Exam', subtitle: '71 Java lessons in order', detail: 'Practice one question per lesson, from your first Java program to the alarm clock project.', minutes: null, lessonOrder: true }
];

window.itsJavaDomains = [
  'Java fundamentals',
  'Data types, variables, and expressions',
  'Flow control',
  'Object-oriented programming',
  'Compilation and debugging'
];
