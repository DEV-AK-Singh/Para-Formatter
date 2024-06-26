import React,{useState} from 'react';
import TextForm from './TextForm';
import UtilBtns from './UtilBtns';

const Home = ({title}) => {
    document.title = title;
    const [wordCnt, setWordCnt] = useState(0);
    const [charCnt, setCharCnt] = useState(0);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const textData = e.target.value;
        setText(textData);
        const wordCnt = textData.split(/[]+/).join(" ").trim();
        setWordCnt(wordCnt.split(" ").length);
        const letterCnt = textData.split(" ").join("");
        setCharCnt(letterCnt.length);
    }

    const fnLowercase = () => {
        setText(text.toLowerCase());
    }

    const fnUppercase = () => {
        setText(text.toUpperCase());
    }

    const fnCapitalize = () => {
        console.log(text);
        const mySentence = text;
        const words = mySentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            words[i] = word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
        }
        const newSentence = words.join(" ");
        setText(newSentence);
    }

    const fnClearText = () => {
        setText('');
        setWordCnt(0);
        setCharCnt(0);
    }

    const fnCopyText = () => {
        navigator.clipboard.writeText(text);
    }

    const fnRemoveSpace = () => {
        const newText = text.split(/[ ]+/).join(" ").trim();
        console.log(newText);
        setText(newText);
    }

    const fnReplace = (find,replace) => {
        const newText = text.replace(find.trim(),replace.trim());
        setText(newText);
        const newTextWordCnt = newText.split(/[ ]+/).join(" ").trim().split(" ");
        setWordCnt(newTextWordCnt.length); 
        const newTextCnt = newText.split(" ").join("");
        setCharCnt(newTextCnt.length); 
    }

    const fnReplaceAll = (find,replace) => {
        const newText = text.replaceAll(find,replace);
        setText(newText);
        const newTextWordCnt = newText.split(/[]+/).join(" ").trim().split(" ");
        setWordCnt(newTextWordCnt.length); 
        const newTextCnt = newText.split(" ").join("");
        setCharCnt(newTextCnt.length); 
    }

    const fnOccurrenceAll = (findOcr) => {
        const ocrArr = Array.from(text.matchAll(findOcr));
        return ocrArr.length;
    }
    return (
        <div className='container mx-auto px-2'>
            <h1 className='text-2xl font-bold my-12'># To Format your content add some text in below text box : <span className={(charCnt>100?"text-red-500":"text-green-500")}>Words {wordCnt} and Characters {charCnt}</span></h1>
            <div className="grid grid-cols-1 gap-4">
                <TextForm handleChange={handleChange} text={text}/>
                <UtilBtns Text={text} fnLowercase={fnLowercase} fnUppercase={fnUppercase} fnCapitalize={fnCapitalize} fnClearText={fnClearText} fnCopyText={fnCopyText} fnRemoveSpace={fnRemoveSpace} fnOccurrenceAll={fnOccurrenceAll} fnReplace={fnReplace} fnReplaceAll={fnReplaceAll}/>
            </div>
        </div>
    );
}

export default Home;
