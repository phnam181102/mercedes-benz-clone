import { List, Datagrid, TextField } from 'react-admin';

function listCars(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
    );
}

export default listCars;
