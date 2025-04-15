'use client';
import React, { useEffect, useState , useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";

export default function BasicTableTwo() {
  const [subscriptions, setSubscriptions] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [idUser , setIdUser] = useState(null)

  const [users , setUsers] = useState([])
  const [error , setError] = useState(null)
  // const [inputStatus , setInputStatus] = useState(true)
  const [activeId , setActivateId] = useState(null)
  const [newPoints , setNewPoints] = useState()
  // const [userPoints, setUserPoints] = useState()
  const [search , setSearch] = useState('')
  const [loading , setLoading] = useState(true)
  const [errorFetchingUsers , setErrorFetchingUsers] = useState(null)
  const [errorAddingPoints , setErrorAddingPoints] = useState(null)

  const check = useRef()


  useEffect(() => {
    async function getllUsers(){

        try{
            const response = await fetch('http://localhost:8000/ELACO')
        
            if(!response.ok){
                throw Error(`error in fetching uers ${response.status}`)
            }

            const data = await response.json()
            setUsers(data.data.users)
            console.log(data.data.users)
            console.log('ok')

        }catch(err){
            setError(err.message)
        }finally{
          setLoading(false)
        }
    }
    getllUsers()
} , [activeId])

  useEffect(() => {
      const storedId = localStorage.getItem("userId");
      if (storedId) {
        setIdUser(storedId);
      }
    }, []);


    function changeInput(selectedId){
      // setInputStatus(inputStatus => !inputStatus)
      // setActivatedId(selectedId)
      setActivateId(prevId => (prevId === selectedId ? null : selectedId));
      // setInputStatus(prevStatus => !prevStatus)
      // console.log(inputStatus)
      console.log('mmmmm')
  }

  function getNewPoints(event){
    // event.target.value = 0
    // setNewPoints(prevPoints => parseInt(event.target.value)+parseInt(0)+parseInt(prevPoints))
    setNewPoints(event.target.value)
    console.log(event.target.value)
  }

  async function addPoints(selectedId , pointsToAdd){

    // setActivateId(prevId => (prevId === selectedId ? null : selectedId));
    console.log(check.current.value)
    // if(event.target.value)
 
    if (isNaN(pointsToAdd) || !check.current.value) {
      console.log("Invalid or empty points value");
      setActivateId(prevId => (prevId === selectedId ? null : selectedId));

      return;
    }

      // console.log(points.current.value)

      console.log('mmmmm')

      // if(isNaN(pointsToAdd) || !pointsToAdd){
      try{
        const response = await fetch(`http://localhost:8000/ELACO/${selectedId}` , {
          method: 'PATCH',
          body: JSON.stringify({points: pointsToAdd}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      
      if(!response.ok){
          throw new Error(response.statusText)
      }
      
      const data = await response.json()
      console.log(data.userPoints)
      setActivateId(prevId => (prevId === selectedId ? null : selectedId));
      }catch(err){
        setErrorAddingPoints(err)
      }
        

      // }
 
  }
  // const idUser1 = "67c0359f5688c67382a063dd";



  if (loading) {
    return <div className="p-4">Loading history...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (users.length === 0) {
    return <div className="p-4">No users found</div>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Full Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Email</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Number</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Points</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">Action</TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {users.map((user) => (
                <TableRow key={user?._id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {user?.firstName} {user?.lastName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user?.email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user?.phone || "N/A"}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="md"
                    >
                      {/* {user?.points} */}
                      {activeId === user._id ? (
                          <input
                            type="number"
                            onChange={getNewPoints}
                            className="w-12 h-6 text-sm border border-gray-300 rounded px-1"
                            defaultValue={null} 
                            ref={check}
                          />
                        ) : (
                          user.points
                        )}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {/* {user.subscription_type || "N/A"} */}
                    {activeId === user._id ? (
                          <button
                            className="bg-[#0C9F9C] w-full text-white px-3 py-1 rounded"
                            onClick={() => addPoints(user._id, newPoints)}
                          >
                            save
                          </button>
                        ) : (
                          <button
                            className="bg-[#0C9F9C] w-full text-white px-3 py-1 rounded"
                            onClick={() => changeInput(user._id)}
                          >
                            add points
                          </button>
                        )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
