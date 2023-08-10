function Button(props) {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={`${className} border-solid border-2 text-sm text-center font-bold text-black px-3 py-2 rounded-xl transition duration-150`}
        >
            {text || children}
        </button>
    );
}

function VariantButton(props) {
    const { className, children, text } = props;
    return (
        <button
            {...props}
            className={`${className} w-16 h-10 font-semibold border-solid border-2 rounded-lg flex items-center justify-center hover:bg-slate-900 hover:text-white cursor-pointer`}
        >
            {text || children}
        </button>
    );
}

Button.Variant = VariantButton;

function PlusMinusButton(props) {
    const { minusClick, plusClick, value } = props;
    return (
        <div className='flex flex-row items-center'>
            <Button
                onClick={minusClick}
                className=' border-r-0 text-xl font-bold rounded-r-none bg-white'
            >
                -
            </Button>
            <input
                type='text'
                className='border-solid border-t-2 border-b-2 px-4 py-2 w-14 text-center text-lg font-bold justify-center'
                value={value}
                readOnly
            ></input>
            <Button
                onClick={plusClick}
                className=' border-l-0 text-xl font-bold rounded-l-none bg-white'
            >
                +
            </Button>
        </div>
    );
}

Button.PlusMinusButton = PlusMinusButton;

export default Button;
