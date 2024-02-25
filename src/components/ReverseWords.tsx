import React, { useState } from 'react'

export const ReverseWords = () => {
    const [inputLines, setInputLines] = useState('')
    const [outputLines, setOutputLines] = useState('')
    // const MAX_WORD_LENGTH = 10
    const MAX_LINE_LENGTH = 100
    const doReverse = () => {
        const linesArray = inputLines.split('\n')
        if (linesArray.length > MAX_LINE_LENGTH) {
            alert('number of lines exceed the limit')
        } else {
            const reversedLinesArray = linesArray.map((line) => {
                const word = line.split(' ')
                const reversedWord = word.reverse()
                return reversedWord.join(' ')
            })

            const reversedLines = reversedLinesArray.join('\n')
            setOutputLines(reversedLines)
        }
    }
    return (
        <>
            <div>ReverseWords</div>
            <textarea placeholder='please input your input lines' aria-label='please input' onChange={(e) => setInputLines(e.target.value)} />
            <button onClick={doReverse} >Do Reverse!</button>
            <h2>{outputLines}</h2>
        </>
    )
}
export default ReverseWords;
