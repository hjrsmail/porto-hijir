import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import NextJSIcon from "@/components/icons/nextjs-icon";

interface AuthLayoutProps {
    title: string;
    description?: string;
    children: React.ReactNode;
}

export default function AuthLayout({ title, description, children }: AuthLayoutProps) {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-darkk">
            <div className="w-full max-w-lg  ">
                <Card>
                    <NextJSIcon className="mx-auto size-9" />
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </div>
    );
}
