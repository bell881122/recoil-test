import {
    atom,
    useRecoilState,
    selector,
    useRecoilValue,
} from 'recoil';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'Initial String', // default value (aka initial value)
});


export default function CharacterCounter() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}          
            <CharacterCount/>  
        </div>
    );
}

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
});

function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
}