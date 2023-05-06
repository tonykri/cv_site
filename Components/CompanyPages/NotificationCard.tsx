'use client'
import { Button, Card } from "flowbite-react";


export default function NotificationCard() {

    return (
        <div>
            <Card className="mt-3">
                <div className="mx-4">
                    <div className="flex justify-between">
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Student Name
                        </p>
                        <div className="flex gap-4">
                            <Button color={'red'}>Reject</Button>
                            <Button>Accept</Button>
                        </div>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        VAT Number: 123456789
                    </p>
                </div>
            </Card>
        </div>

    )
}
