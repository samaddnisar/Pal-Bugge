"use client";

import Link from "next/link";
import { FC, ReactNode, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface NavButtonProps {
  /**
   * The destination URL. This can be a full path (e.g. "/about" or "/?#work")
   * or just a hash (e.g. "#contact") for a section on the current page.
   */
  href: string;
  children: ReactNode;
  /**
   * Additional class names for styling.
   */
  className?: string;
  /**
   * If you pass a hash-only href (for example, "#work") but the target section isn’t on the current page,
   * you can supply the page path where the section exists. For example, if the work section lives on the
   * home page, set this prop to "/" so that clicking the button will navigate to "/#work".
   */
  targetPage?: string;
}

/**
 * NavButton handles navigation in two ways:
 *
 * 1. If the href includes a hash and the URL’s pathname matches the current page,
 *    it intercepts the click, prevents the default behavior, and performs a smooth scroll
 *    to the target element.
 *
 * 2. Otherwise, it simply renders a Next.js Link for navigation.
 *
 * When a hash-only link is provided (e.g. "#work") but the section is not found on the current page,
 * if the optional `targetPage` prop is provided (say, "/"), then the button will navigate to that page
 * (resulting in a URL like "/#work").
 */
const NavButton: FC<NavButtonProps> = ({
  href,
  children,
  className = "",
  targetPage,
}) => {
  const router = useRouter();
  const currentPathname = usePathname();

  /**
   * Handle click events for same-page hash links.
   *
   * If the element with the target ID exists, scroll smoothly to center it in the viewport.
   * Otherwise, if a fallback targetPage is provided (and it differs from the current page),
   * navigate to that page with the given hash.
   *
   * @param e Mouse click event.
   */
  const handleClick = (e: MouseEvent<HTMLAnchorElement>): void => {
    if (typeof window === "undefined") return;

    let targetUrl: URL;
    try {
      targetUrl = new URL(href, window.location.href);
    } catch (error) {
      console.log(error);
      console.error("Invalid URL provided to NavButton:", href);
      return;
    }

    const targetHash = targetUrl.hash; // includes "#" if present
    if (!targetHash) return; // nothing special to do if there’s no hash

    // When the pathname of the href matches the current page, handle scrolling.
    if (targetUrl.pathname === currentPathname) {
      e.preventDefault();
      const elementId = targetHash.slice(1); // remove the leading "#"
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        // Use block: "center" to scroll the element to the center of the viewport.
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (targetPage && targetPage !== currentPathname) {
        // If the element isn’t found on the current page but you provided a fallback page,
        // navigate there with the same hash.
        router.push(targetPage + targetHash);
      } else {
        console.warn(
          `⚠️ Section with ID '${elementId}' not found on the current page.`
        );
      }
    }
    // For links whose pathname differs from the current page, we let Next.js handle navigation.
  };

  /**
   * Decide whether to render an <a> (for same-page scrolling) or a Next.js <Link>.
   *
   * We want to intercept the click (and perform smooth scroll) only if:
   *   - The parsed URL contains a hash AND
   *   - The URL’s pathname matches the current page.
   */
  let shouldHandleClick = false;
  try {
    // Use the current window location as the base to resolve the href.
    const parsedUrl = new URL(
      href,
      typeof window !== "undefined" ? window.location.href : "http://localhost"
    );
    if (parsedUrl.hash && parsedUrl.pathname === currentPathname) {
      shouldHandleClick = true;
    }
  } catch (error) {
    console.error("Error parsing href in NavButton:", href, error);
  }

  return shouldHandleClick ? (
    <a
      href={href}
      onClick={handleClick}
      className={twMerge(
        clsx("cursor-pointer text-lg hover:underline", className)
      )}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      className={twMerge(
        clsx("cursor-pointer text-lg hover:underline", className)
      )}
    >
      {children}
    </Link>
  );
};

export default NavButton;
