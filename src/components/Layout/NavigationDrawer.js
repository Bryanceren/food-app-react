import { Close, Inbox, Mail } from "@material-ui/icons";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavigationDrawer = (props) => {
  return (
    <Drawer
      anchor="left"
      open={props.anchorEl}
      onClose={() => {
        props.setAnchorEl(false);
      }}
    >
      <Box sx={{ width: {sm:300,xs:'100vw'} }} role="presentation">
        <List>
            <ListItem sx={{justifyContent: 'flex-end',display:{xs:'flex',sm:'none'}}}>
              <IconButton onClick={()=>{props.setAnchorEl(false)}}>
                     <Close />
              </IconButton>
            </ListItem>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default NavigationDrawer;
