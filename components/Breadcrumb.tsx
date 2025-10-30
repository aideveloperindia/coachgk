"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    ...paths.map((path, index) => ({
      name: path.charAt(0).toUpperCase() + path.slice(1),
      href: `/${paths.slice(0, index + 1).join("/")}`,
    })),
  ];

  if (pathname === "/") return null;

  return (
    <motion.nav
      className="bg-gray-50 border-b border-gray-200"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom px-6 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {index === 0 ? (
                <Link
                  href={breadcrumb.href}
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <Home className="w-4 h-4" />
                </Link>
              ) : index === breadcrumbs.length - 1 ? (
                <span className="text-primary font-medium">{breadcrumb.name}</span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
}











