function Button (props){
    const {className ='bg-blue-600', children, text} = props;
    return(
        <button {...props} className={`${className} text-sm text-center font-bold text-black px-3 py-2 rounded-xl transition duration-150`}>
            {text || children}
        </button>
    )
}

export default Button;