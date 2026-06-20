import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // We only run this logic for the root path "/"
  if (pathname === "/") {
    const cookieLang = request.cookies.get("user-selected-lang")?.value;

    if (cookieLang) {
      if (cookieLang === "pl") {
        return NextResponse.redirect(new URL("/pl", request.url));
      }
      return NextResponse.next();
    }

    const acceptLanguage = request.headers.get("accept-language") || "";
    // Parse the first preferred language in Accept-Language header
    const preferredLanguage = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
    const isPolishPreferred = preferredLanguage === "pl";

    if (isPolishPreferred) {
      const response = NextResponse.redirect(new URL("/pl", request.url));
      // Set a persistent cookie to save their preference
      response.cookies.set("user-selected-lang", "pl", { path: "/", maxAge: 31536000 });
      return response;
    } else {
      const response = NextResponse.next();
      // Set a persistent cookie to save their preference
      response.cookies.set("user-selected-lang", "en", { path: "/", maxAge: 31536000 });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
