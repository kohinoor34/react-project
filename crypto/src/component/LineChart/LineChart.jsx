import React, { useEffect, useState } from 'react'
import {Chart} from 'react-google-charts'



const LineChart = ({hishtoriCalData}) => {
  console.log(hishtoriCalData);
  
   const [data, setData] = useState([["Date","Prices"]])

    useEffect(() => {
    let dataCopy = [["Date","Prices"]]

    if(hishtoriCalData.price){
        hishtoriCalData.price.map((item)=>{
            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
         })
         setData(dataCopy)
    }//
    
    }, [hishtoriCalData])
    
  return (
    <Chart
    chartType='lineChart'
     data={data}
    height='100%'
     legendToggle/>
  )
}

export default LineChart