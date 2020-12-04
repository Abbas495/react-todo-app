import React from 'react'
import {Card, CardContent,Typography,Container,IconButton} from "@material-ui/core"
import {Check,Delete} from "@material-ui/icons"

const Todo = ({title, checkTodo,id, isCompleted, deleteTodo}) => {
    const markComplete= () => checkTodo(id)
    const delTodo=()=> deleteTodo(id)
    const todoStyle = isCompleted 
    ? { textDecoration:"line-through"}
    :{  textDecoration: "none"}
    return (    
        <div>
            <Container>
                <Card variant="outlined" style={{marginTop:35,background:"lightgray"}}>
                    <CardContent>
                        {/*Check Icon*/}
                        <Typography variant="h5" component="h2" style={todoStyle}>
                            <IconButton onClick={markComplete}>
                              <Check style={{color:"green"}} />                   
                            </IconButton>
                            {title}
                            <IconButton style={{float:"right"}}onClick={delTodo}>
                              <Delete style={{color:"red"}} />                   
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            
        </div>
    )
}

export default Todo
