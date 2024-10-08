import React, {useState} from 'react'
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({filter, setFilter}) => {
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000 )
  return (
    <>
        Search: {""}
        <input value={value || ''} onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }} />
    </>
  )
}

export default GlobalFilter