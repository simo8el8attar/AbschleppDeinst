import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'default' | 'button';
}

export default function NavLink({ to, href, children, variant = 'default' }: NavLinkProps) {
  const baseStyles = "inline-flex items-center transition-colors w-full md:w-auto justify-center";
  const styles = {
    default: "hover:text-green-600",
    button: "bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${styles[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to!} className={`${baseStyles} ${styles[variant]}`}>
      {children}
    </Link>
  );
}