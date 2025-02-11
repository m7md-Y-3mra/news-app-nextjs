import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

interface NewCardProps {
    isActive: boolean
}
const NewCard:React.FC<NewCardProps> = ({isActive}) => {
  return (
    <div>
      <Card className={isActive ? 'border border-red-600' : ''}>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
          <Button variant="outline">Cancel</Button>
        </CardHeader>
        <CardContent>cardContent</CardContent>
        <CardFooter className="flex justify-between">
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
</div>
  )
}

export default NewCard