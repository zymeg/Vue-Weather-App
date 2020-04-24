module.exports = temperature => {
    return Math.round((temperature - 273.15) * 10) / 10
}

