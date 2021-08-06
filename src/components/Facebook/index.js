import React,{ useState }  from 'react'
import profiles from './../../data/berlin.json';


export default function Facebook() {
    const [state, setState] = useState(profiles)
    const [selected, setSelected] = useState({
        all:false
    })
    const handleChange = (e) => {
        e.preventDefault()
        setSelected(e.target.name)
        console.log(selected)
    }
    const getAll = (event) => {
        if (!selected.all){
            event.preventDefault()
            setSelected({all:true})
        } else if (selected.all){
            setSelected({all:false})
        }
        
    }
    const getCountries = (event) => {
        const countriesArr =  state.map((e)=>{
            return e.country
        })
        const result = countriesArr.reduce((acc,item)=>{
            if(!acc.includes(item)){
                acc.push(item);
            }
            return acc;
        } ,[])
        return result;
    }
    return (
        <>
            <button onClick={(e)=>getAll(e)} style={{backgroundColor: selected.all ? "#A0F5FA": "transparent"}}>All</button>
            {
                getCountries().map((item, index) => {
                    return (
                        <button name={item} onClick={(e) => {handleChange(e)}} style={{backgroundColor: item === selected ? "#A0F5FA": "transparent"}}>{item}</button>
                    )
                })
            }
            {
                state.map((elem) => {
                    return (
                        <div className="IdCard box" style={{backgroundColor: selected.all || elem.country == selected? "#A0F5FA": "transparent"}}>
                            <div>
                                <img src={elem.img} style={{width:"128px"}}/>
                            </div>
                            <div className="right">
                                <strong>FirstName: </strong> {elem.firstName} <br/>
                                <strong>LastName: </strong> {elem.lastName} <br/>
                                <strong>Country: </strong> {elem.country} <br/>
                                <strong>Type: </strong> {elem.isStudent ? "Student" : "Teacher"} <br/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
