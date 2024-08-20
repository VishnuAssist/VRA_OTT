import React from 'react'
import Table from './Table'
import { Tab } from '@chakra-ui/react'
import TableSwitcher from './toggleoption'
import Tableassign from './tableassign'
import Tablestatus from './tablestatus'
import tablestatus from 'Slices/tablestatus'



interface RowObj  {
	name: string[];
	artworks: number; 
	rating: number;
  
     
}
const index = () => {
    const tableColumnsTopCreators: RowObj[] = [
        {
        name: ["@Tony","https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80"],
        artworks : 9821,
        rating:97
      },
      {
        name: ["@karl","https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"],
        artworks : 7032,
        rating:87
      },
      {
        name: ["@andrea","https://images.unsplash.com/photo-1573766064535-6d5d4e62bf9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"],
        artworks : 5204,
        rating:82
      },
      {
        name: ["@abraham47","https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"],
        artworks : 4309,
        rating:68
      },
      {
        name: ["@symonds","https://i.ibb.co/7p0d1Cd/Frame-24.png"],
        artworks : 3871,
        rating:55
      },
      
    ]


    

  return (
    <>
    <Table/>
  
    <Tableassign tableData={tableColumnsTopCreators}/>

    <Tablestatus tableData={tablestatus} />
    
    </>
  )
}

export default index