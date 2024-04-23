import Image from "next/image";
import styles from "./page.module.css";
import 'react-datepicker/dist/react-datepicker.css';
import createDatabase from "@/data/db";
import ActivityList from "../components/ActivityList/ActivityList"


createDatabase().then(() => {
  console.log('Database has been created');
}).catch((error) => {
  console.error('Failed to create database:', error)
});

export default function Home() {
  return (
    <>
    <h2>Lagom Travels</h2>
    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Aspernatur cum cumque dicta ducimus, eum incidunt iste itaque magni, 
      maiores maxime odit officia, omnis quae reiciendis rem rerum suscipit totam voluptate?
    </p>
    
    <hr/>
   <ActivityList /> 
  </>
  );
}
