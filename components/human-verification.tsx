import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, UserPlus } from 'lucide-react'

export default function HumanVerification() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-32 h-32 relative mb-4">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Robot"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold">This is for humans only</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-6 text-gray-600">
            Prove that you're not a bot.
          </p>
          <div className="space-y-4">
            <Button className="w-full flex items-center justify-center" variant="outline">
              <MessageCircle className="mr-2 h-4 w-4" />
              Verify by text
            </Button>
            <Button className="w-full flex items-center justify-center" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Verify by email
            </Button>
            <Button className="w-full flex items-center justify-center" variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Maintain your privacy & verify by creating an account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

