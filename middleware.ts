import { NextRequest, NextResponse } from "next/server";
import { CATEGORIES, COUNTRY_CODES } from "./constant";

const DEFAULT_COUNTRY = "us";
const DEFAULT_CATEGORY = "sports";
const VALID_COUNTRIES = new Set(COUNTRY_CODES);
const VALID_CATEGORIES = new Set(CATEGORIES);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const parts = path.split('/').filter(Boolean);

  if (parts[0] !== 'categories') {
    return NextResponse.next();
  }

  // Extract and validate parameters
  const [_, countryParam, categoryParam, ...rest] = parts;
  let country = countryParam?.toLowerCase();
  let category = categoryParam?.toLowerCase();

  // Validate country
  if (!country || !VALID_COUNTRIES.has(country)) {
    country = DEFAULT_COUNTRY;
  }

  // Validate category
  if (!category || !VALID_CATEGORIES.has(category)) {
    category = DEFAULT_CATEGORY;
  }

  // Check if parameters need correction or if there are extra segments
  const needsRedirect = 
    countryParam !== country ||
    categoryParam !== category ||
    rest.length > 0 ||
    parts.length !== 3; // Ensure exactly 3 parts: /categories/xx/yy

  if (needsRedirect) {
    const newUrl = new URL(`/categories/${country}/${category}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}