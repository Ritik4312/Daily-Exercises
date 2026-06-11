import type { User } from "../../model/user";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Button } from "@mui/material";
import Box from '@mui/material/Box';
type UserCardProps = {
    user:User;
}
function UserCard({user}:UserCardProps){
    return(
        <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
         <Card key={user.id}>
             <CardContent sx={{ height: '100%' }}>
                <Typography>
                    User Name:- {user.firstName}
                    <br></br>
                    User email:- {user.email}
             </Typography>
             <Button>Edit</Button>
             <Button>Delete</Button>
            </CardContent>
            </Card>
        </Box>
    )
}
export default UserCard;