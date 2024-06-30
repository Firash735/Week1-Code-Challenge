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

### 

```javascript
function studentGradeGenerator(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}
This program takes the speed of a car as input and determines whether the speed is within the limit or if the driver should receive demerit points.

Speed Criteria
Speed <= 70: "Ok"
For every 5 km/s above 70: 1 demerit point
Points > 12: "License suspended"

## Challenge 3: Net Salary Calculator

This program calculates an individual’s net salary by taking into account the basic salary and benefits. It calculates the PAYE (Tax), NHIF deductions, NSSF deductions, gross salary, and net salary.

### Inputs

- **Basic Salary**: The base salary of the individual.
- **Benefits**: Additional benefits provided to the individual.

### Outputs

- **Gross Salary**: The total salary before any deductions. Calculated as the sum of basic salary and benefits.
- **PAYE (Tax)**: Income tax based on the gross salary.
- **NHIF Deductions**: Health insurance deductions based on the gross salary.
- **NSSF Deductions**: Pension contributions based on the gross salary.
- **Net Salary**: The total salary after all deductions.

### Detailed Breakdown

#### Gross Salary Calculation

The gross salary is the sum of the basic salary and any benefits:

```javascript
const grossSalary = basicSalary + benefits;

