import { useState } from 'react';
import Button from '../Button';

function DetailItem(props) {
    const { namaproduk, hargaproduk, penjelasanproduk, variant, handleclick } =
        props;

    // Tambah dna Kurang Item
    const [count, setCount] = useState(1);
    function countPlus() {
        if (count == 99) {
            setCount(count);
        } else {
            setCount(count + 1);
        }
    }

    function countMin() {
        if (count == 1) {
            setCount(count);
        } else {
            setCount(count - 1);
        }
    }

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
                minusClick={countMin}
                plusClick={countPlus}
                value={count}
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
