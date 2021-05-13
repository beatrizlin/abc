'use strict';

const primes = [];
function generatePrimes(min, max) {
    let isPrime = true;
    let end = min + max;
    for (let i = min; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
    return primes;
}

module.exports = {
    generatePrimes: generatePrimes
};