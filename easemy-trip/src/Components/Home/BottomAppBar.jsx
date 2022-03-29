import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


const messages = [
  {
    id: 1,
    primary: 'Planning to fly to Spain: Rules explained',
    secondary: "Many European countries have lifted their restrictions but Spain",
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU',
  },
  {
    id: 2,
    primary: 'If you are fully vaccinated then one can fly to these places with no quarantine restrictions',
    secondary: `As the cases are decreased international travel is opening up.`,
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU'
  },
  {
    id: 3,
    primary: 'Hong Kong to remove ban on international flights',
    secondary: 'From April 1, Hong Kong plans to restart international flights.',
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU'
  },
  {
    id: 4,
    primary: 'Planning for vacation: Fly to these cheapest holiday hotspots this summer.',
    secondary: 'Research shows that Bulgaria and Turkey are the cheapest holiday',
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU'
  },
  {
    id: 5,
    primary: "Traveling to Nepal: No RT-PCR test required.",
    secondary: 'To boost tourism, Nepal has been introducing several measures for fully',
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU'
  },
  {
    id: 6,
    primary: 'India plans to resume International flights after the 2-year ban.',
    secondary: `The government plans to resume International flights as of March 27th, 2022`,
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU'
  },
  {
    id: 7,
    primary: 'Business group asks Canada to lift COVID-19 testing for fully vaccinated travelers.',
    secondary: `At this point in the pandemic, tourism and business groups in Canada are asking`,
    person: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXaYlpzJ9PSIZp1NcCf8_c9BS6ObTgyZ0Ng&usqp=CAU'
  }
];


export default function BottomAppBar() {
  
  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px', wd:"10px"}}>
        
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </>
  );
}
