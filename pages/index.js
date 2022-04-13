import Head from "next/head";
import Image from "next/image";
import SideBoard from "../components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBoard title={"No Status"} colorScheme="blackAlpha"></SideBoard>
      <SideBoard title={"Not Started"} colorScheme="red"> </SideBoard>
      <SideBoard title={"In Progress"} colorScheme="yellow"></SideBoard>
    </div>
  );
}
