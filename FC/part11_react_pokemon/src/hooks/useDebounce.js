import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {

    const [debounceValue, setDebounceValue] = useState(value);

    // 만약 정해놓은 delay 시간 안에 value, 혹은 delay에 수정이 일어나면
    // return에 clearTimeout으로 초기화를 해주고, 다시 실행.
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebounceValue(value)
            }, delay)
            
            return () => {
                clearTimeout(handler)
            }
        }, [value, delay]
    )


    return debounceValue
}