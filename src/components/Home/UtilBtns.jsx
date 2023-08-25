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
        <div className='basis-1/3 px-6'>
            <h1 className='text-lg font-bold mb-4'>Do Some Operations:</h1>
            <div className='flex flex-row gap-2 mb-4'>
                <Button name={"Lowercase"} func={fnLowercase}/>
                <Button name={"Uppercase"} func={fnUppercase}/>
                <Button name={"Capitalize"} func={fnCapitalize}/>
            </div>
            <div className='flex flex-row gap-2 mb-4'>
                <Button name={"Clear Text"} func={fnClearText}/>
                <div className='has-tooltip basis-1/3'>
                    <span className='tooltip rounded-xl shadow-lg bg-gray-100 text-black p-3 -mt-8 maz'><b>Copied: </b>{Text}</span>
                    <Button name={"Copy Text"} func={fnCopyText}/>
                </div>
                <Button name={"Remove Space"} func={fnRemoveSpace}/>
            </div>
            <div className='flex flex-row gap-2 mb-5'>
                <Input name={"Find Occurrence"} setVal={setFindOcr} val={findOcr} disable={false}/>
                <Input name={"OcrCnt"} setVal={setOcrCnt} val={ocrCnt} disable={true}/>
                <Button name={"Count"} func={()=>{setOcrCnt(fnOccurrenceAll(findOcr))}}/>
            </div>
            <div className='flex flex-row gap-2'>
                <Input name={"Find"} setVal={setFind} val={find} disable={false}/>
                <Input name={"Replace"} setVal={setReplace} val={replace} disable={false}/>
                <Button name={"Change"} func={()=>{fnReplace(find,replace)}}/>
                <Button name={"All"} func={()=>{fnReplaceAll(find,replace)}}/>
            </div>
        </div>
    );
}

export default UtilBtns;
