import React from 'react';
import { ToggleButton, ToggleButtonGroup, Box, Tabs, Tab } from '@mui/material';
import Table from './Table';
import Tableassign from './tableassign';
import Tablestatus from './tablestatus';
import tablestatus from '../../Slices/tablestatus';
import Reserve from './reserve';
import TableChartIcon from '@mui/icons-material/TableChart';
import BookmarkIcon from '@mui/icons-material/Bookmark';


// Define your RowObj interface here
interface RowObj  {
    name: string[];
    artworks: number; 
    rating: number;
}

const Index = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    // Define the table data
    const tableColumnsTopCreators: RowObj[] = [
        {
            name: ["@Tony", "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80"],
            artworks: 9821,
            rating: 97
        },
        {
            name: ["@karl", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"],
            artworks: 7032,
            rating: 87
        },
        {
            name: ["@andrea", "https://images.unsplash.com/photo-1573766064535-6d5d4e62bf9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"],
            artworks: 5204,
            rating: 82
        },
        {
            name: ["@abraham47", "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"],
            artworks: 4309,
            rating: 68
        },
        {
            name: ["@symonds", "https://i.ibb.co/7p0d1Cd/Frame-24.png"],
            artworks: 3871,
            rating: 55
        },
    ];

    return (
        <>
        <Box sx={{p:2,mt:2}}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="Table"><TableChartIcon/> Table</ToggleButton>
                <ToggleButton value="Reservation"><BookmarkIcon/>Reservation</ToggleButton>
            </ToggleButtonGroup>

            {alignment === 'Table' && (
                <>
                    <Table />
                    <Tableassign tableData={tableColumnsTopCreators} />
                    <Tablestatus tableData={tablestatus} />
                </>
            )}

            {alignment === 'Reservation' && (
                <Box>
                   
                <Reserve/>
                      
                   
                   
                </Box>
            )}
            </Box>
        </>
    );
};

export default Index;
