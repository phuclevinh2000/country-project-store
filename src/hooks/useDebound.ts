import { useEffect, useState} from "react"

// Function use for debouncing the search input
export default function useDebounce(value: string, timeout: number) {
    const [DebounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        let timerId = setTimeout(() => {
            setDebounceValue(value)
        }, timeout)
        return () => {
            clearTimeout(timerId)
        }
    }, [value, timeout])

    return DebounceValue;
}