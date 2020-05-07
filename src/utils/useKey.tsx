import { useEffect, useState } from 'react'

const useKey = (key: any) => {
    // Keep track of key state
    const [pressed, setPressed] = useState(false)

    // Does an event match the key we're watching?
    const match = (event: any) => {
        console.log(event)
        return key.toLowerCase() === event.key.toLowerCase()
    }

    // Event handlers
    const onDown = (event: any) => {
        if (match(event)) setPressed(true)
    }

    const onUp = (event: any) => {
        if (match(event)) setPressed(false)
    }

    // Bind and unbind events
    useEffect(() => {
        window.addEventListener("keydown", onDown)
        window.addEventListener("keyup", onUp)
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    }, [key])

    return pressed
}

export default useKey