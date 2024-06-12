import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Example() {
  const[data,setData] = useState({
    cid:"",
    cdesc:"",
    crules:"",
  })

  const handleChange = (e) =>{
    setData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  console.log(data)

  const navigate = useNavigate()

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/campaigns", data)
      alert("Campaign registered successfully")
      navigate("/info")
    }catch(err){
      console.log(err)
    }
  }



  return (
    <form>
      <div className="space-y-12 justify-center m-10">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Campaign Id
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center p-3 text-gray-500 sm:text-sm">CP/</span>
                  <input
                    type="number"
                    min="1"
                    name="cid"
                    id="cid"
                    autoComplete="1"
                    className="block flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About the Campaign
              </label>
              <div className="mt-2">
                <textarea
                  id="cdesc"
                  name="cdesc"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Campaign Rules</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Check on all the conditions for your new campaign
          </p>

          <div className="mt-10 space-y-10">
            <fieldset onChange={handleChange} name="crules">
              <legend className="text-sm font-semibold leading-6 text-gray-900">Conditions</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="crules"
                      type="checkbox"
                      value={1}
                      required
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Spends > INR 10,000
                    </label>
                    <p className="text-gray-500">Option 1</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="crules"
                      type="checkbox"
                      value={2}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Maximum Number of Visits 3
                    </label>
                    <p className="text-gray-500">Option 2</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="crules"
                      type="checkbox"
                      value={3}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Not visited in last 3 Months
                    </label>
                    <p className="text-gray-500">Option 3</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mb-10 flex justify-around my-0">
        <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
          Reset
        </button>
        <button
          type="submit" onClick={handleClick}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Post
        </button>
      </div>
    </form>
  )
}
