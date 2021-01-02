import React,{useEffect, useState} from 'react';
import './style.css';
const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState('vellore');
    // api.openweathermap.org/data/2.5/weather?q=chennai&appid=a3babf29ac3bf99b23dfc0c6ce639801
    // a3babf29ac3bf99b23dfc0c6ce639801


    useEffect(()=>{
        const fetchApi= async ()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a3babf29ac3bf99b23dfc0c6ce639801`
            const response= await fetch(url)
        // console.log(response)
        const resjson= await response.json();
        console.log(resjson.main)
        setCity(resjson.main)

        }
        fetchApi();
    },[search])

    return(<>
        <div className='box'>
            <div className='inputData'>
                <input 
                    type='search'
                    value={search}
                    className='inputField'
                    onChange={(event)=>{
                        setSearch(event.target.value)
                    }}
                />
            </div>
        
       {
           (!city) ? (<p className='errorMsg'>City Not Found</p> ) :
            <div>
             <div className='info'>
            <h2 className='locaction'>
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className='temp'>
            {city.temp} ° Cel
            </h1>
            <h3 className='tempmin_max'>

            Min : {city.temp_min} Cel | Max : {city.temp_max}°Cel
            </h3>
        </div>

        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div></div>
       }
       </div>
    </>)
}

export default Tempapp;