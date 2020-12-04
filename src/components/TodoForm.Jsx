import React from 'react'
import { FormControl, Container, TextField, Button } from '@material-ui/core';

const TodoForm = () => {
    return (
        <div>
            <Container>
                <form>
                    <FormControl>
                      <TextField label="I will do this" required={true}/>
                      <Button variant="standard" color="primary" type="submit"></Button>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}

export default TodoForm
