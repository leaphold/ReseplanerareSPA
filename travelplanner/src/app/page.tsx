import Image from "next/image";
import styles from "./page.module.css";
import 'react-datepicker/dist/react-datepicker.css';
import createDatabase from "@/data/db";

createDatabase();

export default function Home() {
  return (
    <>
    <h2>Home</h2>
    
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Aspernatur cum cumque dicta ducimus, eum incidunt iste itaque magni, 
      maiores maxime odit officia, omnis quae reiciendis rem rerum suscipit totam voluptate?
    </p>
    
    <hr/>
    
  </>
  );
}
