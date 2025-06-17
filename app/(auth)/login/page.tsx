import AuthLayout from "@/components/auth/auth-layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function LoginPage() {
    return (
        <AuthLayout title="Login to your account" description="Enter your email and password below to log in">
            <form className="space-y-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="email@example.com" />
                </div>
                
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required placeholder="Password" />
                </div>
                <Button type="submit" className="w-full">
                    <Link href='/dashboard' tabIndex={5} >
                        Login
                    </Link>
                </Button>
                <div className="text-muted-foreground text-center text-sm">
                    Don't have an account?{' '}
                    <Link href='/register' tabIndex={5} className="underline font-bold hover:text-primary">
                        Sign up
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
