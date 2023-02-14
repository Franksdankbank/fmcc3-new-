import { Rosario } from "@next/font/google";
import styles from './Button.module.css';
import Link from 'next/link';
import React from 'react';

type Props = {
  label: string;
  href: string;
};

const Button: React.FC<Props> = ({ label, href }) => {
  return (
    <Link href={href}>
      <div className={styles.center}>
        <button className={styles.button}>
        
        {label}
        </button>
      </div>
    </Link>
  );
};

export default Button;

  