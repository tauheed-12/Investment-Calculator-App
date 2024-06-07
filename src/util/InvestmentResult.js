export function calculateInvestmentResult({
    initialInvestment,
    annualInvestment,
    expectedResult,
    duration,
}) {
    initialInvestment = Number(initialInvestment);
    annualInvestment = Number(annualInvestment);
    expectedResult = Number(expectedResult);
    duration = Number(duration);
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedYear = investmentValue * expectedResult;
        investmentValue += interestEarnedYear + annualInvestment;
        annualData.push({
            year: i + 1,
            interest: interestEarnedYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
        })
    }
    return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})


