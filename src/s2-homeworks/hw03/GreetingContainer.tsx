import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string,
                            setError: (error: string) => void,
                            setName: (name: string) => void,
                            addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (!name) setError("Your name is too short!")
    else {
        addUserCallback(name)
        setName("")
        setError("")
    }
}

export const pureOnBlur = (name: string,
                           setError: (error: string) => void) => {
    if (!name) setError("Your name is too short!")
    else setError("")
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>,
                            addUser: () => void) => {if (e.key === "Enter") addUser()}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => pureAddUser(name, setError, setName, addUserCallback)
    const onBlur = () => pureOnBlur(name, setError)
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => pureOnEnter(e, addUser)

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length - 1]
        ? users[users.length - 1].name : ""

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onEnter={onEnter}
            onBlur={onBlur}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
