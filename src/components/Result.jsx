import React from 'react';
import PropTypes from 'prop-types';
import { calculateInvestmentResult } from '../util/InvestmentResult';

export default function Result({ inputDetails }) {
    const result = calculateInvestmentResult(inputDetails);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div id="result" className='center'>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Interest</th>
                        <th>Value End of Year</th>
                        <th>Annual Investment</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((r) => (
                        <tr key={r.year}>
                            <td>{r.year}</td>
                            <td>{formatter.format(r.interest)}</td>
                            <td>{formatter.format(r.valueEndOfYear)}</td>
                            <td>{formatter.format(r.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Result.propTypes = {
    inputDetails: PropTypes.shape({
        initialInvestment: PropTypes.number.isRequired,
        annualInvestment: PropTypes.number.isRequired,
        expectedResult: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
    }).isRequired,
};
