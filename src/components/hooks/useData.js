import { useState } from "react";

export const useData = () => {
    const [data, setData] = useState('')

    const handleChange = ({target: {name, value}}) => setData({...data, [name]: value}) 

    return {data, handleChange, setData}
}