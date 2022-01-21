import { ProgrBar } from "../styles/librarie";

const Ru3 = s => {
    let first = s * 100
    let second = first
    let third = 5
    return second / third
}

export const Percent = ({title, percent}) => {
    let total = percent;
    const conv = () =>{
        let first = Number(total) * 100
        total = first / 6
    }
    conv()
    return (
        <div>
            <p>{title}</p>
            <ProgrBar percent={total}/>
            <br />
        </div>
    )
}