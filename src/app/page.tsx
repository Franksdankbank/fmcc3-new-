import React from 'react';
import Button from "@/Components/Button/Button";
import styles from './page.module.css';
const page: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className={styles.center}>
      <h1> Welcome to 113 North Village Road</h1>

      <Button label="Meet the Property Manager" href ="/about"/>
    </div>

  );
};

export default page;
