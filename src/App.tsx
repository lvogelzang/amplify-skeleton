import { Button, Card, Collection, Heading } from "@aws-amplify/ui-react"
import { generateClient } from "aws-amplify/data"
import { useEffect, useState } from "react"
import type { Schema } from "../amplify/data/resource"

const client = generateClient<Schema>()

function App() {
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([])

    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        })
    }, [])

    function createTodo() {
        client.models.Todo.create({ content: window.prompt("Todo content") })
    }

    return (
        <main>
            <Heading level={1}>My todos</Heading>
            <Button onClick={createTodo}>+ new</Button>
            <Collection items={todos} type="list" direction="column" gap="20px" wrap="nowrap">
                {(todo, index) => (
                    <Card key={index} borderRadius="medium" maxWidth="20rem" variation="outlined">
                        {todo.content}
                    </Card>
                )}
            </Collection>
        </main>
    )
}

export default App
