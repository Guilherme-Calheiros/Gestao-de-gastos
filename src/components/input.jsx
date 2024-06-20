
function Input({value , type, placeholder , onChange}) {
    return(
        <input className="p-2 placeholder:text-textcolor border border-textcolor rounded-sm w-64 md:w-80" value={value} type={type} placeholder={placeholder} onChange={onChange}/>
    )
}

export default Input;