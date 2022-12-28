import { useEffect, useState } from 'react'

const PREFIX = 'THE-CHAT-APP-PREFIX_'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        console.log(jsonValue)
        if (jsonValue !== null && jsonValue !== undefined) {
            console.log("Matched")
            return JSON.parse(jsonValue)
        }
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value || ''))
    }, [prefixedKey, value])

    return [value, setValue]
}