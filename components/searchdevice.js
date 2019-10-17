import React, {useContext} from 'react'

export default function Searchdevice(t) {
    // const test = useContext();
    return (
        <div>
            {/* <Bar.Consumer>
            {(context) => console.log(context)}
            </Bar.Consumer> */}
            <input placeholder='Vui lòng nhập mã thiết bị vào' style={{width:'50%', height:30, fontSize:25, fontWeight:600, borderRadius:8, marginBottom:30}}/>
        </div>
    )
}
