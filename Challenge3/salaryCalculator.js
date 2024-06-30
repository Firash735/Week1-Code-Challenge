// Function to calculate net salary
function calculateNetSalary(basicSalary, beneFits) {
    // constants for tax rates (use actual values from provided links)
    const taxRate = 0.3;
    const nhifRate = 0.05;
    const nssfRate = 0.1;

    // Calculations
    const grossSalary = basicSalary + beneFits;
    const tax = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;


    return {
        grossSalary,
        tax,
        nhifDeduction,
        nssfDeduction,
        netSalary

    };
}