import { useState } from 'react';
import React from 'react';
import Button from './Button';
import Input from './Input';

const UtilBtns = ({Text,fnLowercase,fnUppercase,fnCapitalize,fnClearText,fnCopyText,fnRemoveSpace,fnOccurrenceAll,fnReplace,fnReplaceAll}) => {
    const [find, setFind] = useState('');
    const [replace, setReplace] = useState(''); 
    const [findOcr, setFindOcr] = useState('');
    const [ocrCnt, setOcrCnt] = useState(0);
    return (
        <div>
            <h1 className='text-lg font-bold mb-4'>Do Some Operations:</h1>
            <div className='grid grid-cols-3 gap-2 mb-2'>
                <Button name={"Lowercase"} func={fnLowercase}/>
                <Button name={"Uppercase"} func={fnUppercase}/>
                <Button name={"Capitalize"} func={fnCapitalize}/>
            </div>
            <div className='grid grid-cols-3 gap-2 mb-2'>
                <Button name={"Clear Text"} func={fnClearText}/>
                <div className='has-tooltip w-full bg-blue-500 px-4 py-2 font-semibold text-white flex justify-center items-center'>
                    <span className='tooltip shadow-lg bg-gray-100 text-black p-2 -mt-8 maz'><b>Copied: </b>{Text}</span>
                    <button onClick={fnCopyText} className='w-full text-xs sm:text-sm'>Copy Text</button>    
                </div>
                <Button name={"Remove Space"} func={fnRemoveSpace}/>
            </div>
            <div className='grid grid-cols-3 gap-2 mb-2'>
                <Input name={"Find Occurrence"} setVal={setFindOcr} val={findOcr} disable={false}/>
                <Input name={"OcrCnt"} setVal={setOcrCnt} val={ocrCnt} disable={true}/>
                <Button name={"Search"} func={()=>{setOcrCnt(fnOccurrenceAll(findOcr))}}/>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <Input name={"Find"} setVal={setFind} val={find} disable={false}/>
                <Input name={"Replace"} setVal={setReplace} val={replace} disable={false}/>
                <div className='grid grid-cols-2 gap-2'>
                    <Button name={"Change"} func={()=>{fnReplace(find,replace)}}/>
                    <Button name={"All"} func={()=>{fnReplaceAll(find,replace)}}/>
                </div>
            </div>
        </div>
    );
}

export default UtilBtns;
