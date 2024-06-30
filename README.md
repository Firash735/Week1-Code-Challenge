# Week1-Code-Challenge
Repository for Week 1 toy problems assignment.
 Toy Problems

This repository contains solutions for three toy problems: Student Grade Generator, Speed Detector, and Net Salary Calculator. Each problem is solved using JavaScript and the solutions are designed to be clear and easy to understand.

## Table of Contents

- [Challenge 1: Student Grade Generator](#challenge-1-student-grade-generator)
- [Challenge 2: Speed Detector](#challenge-2-speed-detector)
- [Challenge 3: Net Salary Calculator](#challenge-3-net-salary-calculator)
- [Setup and Usage](#setup-and-usage)
- [License](#license)

## Challenge 1: Student Grade Generator

This function prompts the user to input student marks and outputs the corresponding grade based on the marks.

### Grading Criteria

- **A**: Marks > 79
- **B**: 60 to 79
- **C**: 50 to 59
- **D**: 40 to 49
- **E**: Marks < 40

### Example Usage

```javascript
function studentGradeGenerator(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

