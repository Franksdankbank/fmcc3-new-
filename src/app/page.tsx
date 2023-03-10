import React from 'react';
import Button from "@/Components/Button/Button";
import styles from './page.module.css';
/*
const UsersDAO = require('./users-dao');

const dao = new UsersDAO();
dao.createUser('url', 'dbname');
*/

const page: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
     
  };
  return (
    <div >
    <div className={styles.center}>
      <h1> Welcome to 113 North Village Road</h1>

      <Button label="Meet the Property Manager" href ="/about"/>
    </div>
    
  </div>
  
  );
};

export default page;
