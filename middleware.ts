import { NextRequest } from "next/server";
import { proxy } from "./middleware/proxy";

export async function middleware(req: NextRequest) {
    return await proxy(req);
}

// Optional: config to match only specific routes
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }
