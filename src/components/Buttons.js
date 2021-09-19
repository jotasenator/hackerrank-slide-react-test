import React, { useEffect, useState } from 'react'

export const Buttons = () => {
    const slides = [
        {
            title: 'title1',
            text: 'text1'
        },
        {
            title: 'title2',
            text: 'text2'
        },
        {
            title: 'title3',
            text: 'text3'
        },
        {
            title: 'title4',
            text: 'text4'
        },
        {
            title: 'title5',
            text: 'text5'
        },
    ]
    const [counter, setCounter] = useState(0)
    const [disableReset, setDisableReset] = useState(true)
    const [disablePrev, setDisablePrev] = useState(true)
    const [disableNext, setDisableNext] = useState(false)

    useEffect(() => {
        if (counter === slides.length - 1) {
            setDisableNext(true)
        }
        if (counter === 0) {
            setDisableReset(true)
            setDisablePrev(true)
            setDisableNext(false)
        }
        if (counter !== 0 && counter !== slides.length - 1) {
            setDisablePrev(false)
            setDisableReset(false)
            setDisableNext(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter])

    const handleReset = () => {
        setCounter(0)
    }
    const handlePrev = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }
    const handleNext = () => {
        if (counter !== slides.length - 1) {
            setCounter(counter + 1)
        }
    }
    return (
        <div>
            <button className={disableReset && 'reset-true'} disabled={disableReset} onClick={handleReset}>Reset</button>
            <button className={disablePrev && 'prev-true'} disabled={disablePrev} onClick={handlePrev}>Prev</button>
            <button className={disableNext && 'next-true'} disabled={disableNext} onClick={handleNext}>Next</button>

            <div>
                <p>{slides[counter].title}</p>
                <p>{slides[counter].text}</p>

            </div>
        </div>
    )
}
