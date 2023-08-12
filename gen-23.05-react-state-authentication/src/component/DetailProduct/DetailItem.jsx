import { useState } from 'react';
import Button from '../Button';
import { DecreaseAmount, increaseAmount } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

function DetailItem(props) {
    const {
        id,
        namaproduk,
        hargaproduk,
        penjelasanproduk,
        variant,
        handleclick,
        value,
    } = props;

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(value);

    const minusAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
            return value(amount);
        }
    };

    const plusAmount = () => {
        if (amount < 99) {
            setAmount(amount + 1);
            return value(amount);
        }
    };

    return (
        <div className='flex flex-col gap-4 w-auto xl:w-2/4'>
            <div>
                <h1 className='text-3xl font-bold mb-3'>{namaproduk}</h1>
                <h2 className='text-3xl font-semibold mb-6'>Rp{hargaproduk}</h2>
                <p className='text-lg'>{penjelasanproduk}</p>
            </div>
            <div className='flex items-baseline'>
                <h3 className='text-xl font-bold mr-4'>Ram</h3>
                <div className='flex space-x-3 text-lg'>{variant}</div>
            </div>
            <Button.PlusMinusButton
                minusClick={minusAmount}
                plusClick={plusAmount}
                value={amount}
            />
            <div>
                <Button
                    onClick={handleclick}
                    className='text-xl px-6 py-2 bg-green-600 hover:bg-slate-500 hover:text-white transition-all duration-150'
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}

export default DetailItem;
