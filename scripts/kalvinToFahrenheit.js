module.exports = temperature => {
    return Math.round((temperature * (9/5) - 459.67) * 10) / 10
}

