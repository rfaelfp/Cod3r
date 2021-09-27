module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePonctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())

            resolver(words)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValidRow(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notIterval = !row.includes('-->')
    return notNumber && notEmpty && notIterval
}

const removePonctuation = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+>)/ig, '').trim()
const mergeRows = (fullText, row) => `${fullText} ${row}`