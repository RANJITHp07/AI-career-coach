import { Button } from '@/components/ui/button';
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-extrabold text-gray-300 tracking-widest">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold gradient-title">Page Not Found</h2>
                <p className="text-muted-foreground text-base md:text-lg">
                    Sorry, we couldn’t find the page you were looking for.
                </p>
                <Link href="/" className="inline-block text-blue-600 hover:underline text-sm md:text-base">
                    <Button>
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
