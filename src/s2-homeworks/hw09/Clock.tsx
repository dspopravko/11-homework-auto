import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        stop()
        setDate(new Date())
        const id: number = +setInterval(() => {setDate(new Date())}, 1000)
        setTimerId(id)
    }

    const stop = () => {
        clearTimeout(timerId)
        setTimerId(undefined)
    }

    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    const stringTime = new Intl.DateTimeFormat("en-GB", {hour: '2-digit', minute: "2-digit", second: "2-digit"}).format(date) || <br/>
    const stringDate = new Intl.DateTimeFormat("en-GB", {day: '2-digit', month: "2-digit", year: "numeric"}).format(date).split("/").join(".") || <br/>

    const stringDay = new Intl.DateTimeFormat("en-GB", {weekday: 'long'}).format(date) || <br/>
    const stringMonth = new Intl.DateTimeFormat("en-GB", {month: 'long'}).format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
