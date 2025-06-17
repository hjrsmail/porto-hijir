import AuthLayout from "@/components/auth/auth-layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <form className="space-y-6">
                <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Full Name" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="email@example.com" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required placeholder="Password" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password-confirmation">Confirm Password</Label>
                    <Input id="password" type="password" required placeholder="Confirm Password" />
                </div>
                <Button type="submit" className="w-full">
                    Create Account
                </Button>

                <div className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="underline font-bold hover:text-primary">
                        Sign In
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}
