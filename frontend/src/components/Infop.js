import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Infop() {

    const n=1
    const [data,setData]=useState([])

    useEffect(()=>{
      const fetchAllData = async ()=>{
        try{
          const res= await axios.get("http://localhost:8800/campaigns")
          setData(res.data)
        }catch(err){
          console.log(err)
        }
      }
      fetchAllData()
    },[])

  return (
    <div className='m-10'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Campaign Info</h3>
      </div>
      {data.map((data) => (
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Campaign Id</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">CP/{data.cid}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{data.cdesc}</dd>
          </div>
        </dl>
      </div>
      ))}
      
    </div>

  )
}

export default Infop