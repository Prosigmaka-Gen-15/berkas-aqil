function Button (props){
    const {className ='bg-blue-600', children, text} = props;
    return(
        <button {...props} className={`${className} border-solid border-2 text-sm text-center font-bold text-black px-3 py-2 rounded-xl transition duration-150`}>
            {text || children}
        </button>
    )
}

function VariantButton (props){
    const {className , children, text} = props;
    return(
        <button {...props} className={`${className} w-16 h-10 font-semibold border-solid border-2 rounded-lg flex items-center justify-center hover:bg-slate-900 hover:text-white cursor-pointer`}>
            {text || children}
        </button>
    )
}

Button.Variant = VariantButton;

export default Button;