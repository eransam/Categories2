import "./Cate.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle';


const DeleteCategory = ({id ,delCategory}) => {

    const removeSecond = () => {
        
        delCategory(id);

      };

    return (
        <div className="add-category">
            <IconButton aria-label="delete" size="large" onClick={removeSecond}>
            <DeleteIcon fontSize="inherit" />
            </IconButton>            
        </div>
    )
}

export default DeleteCategory;