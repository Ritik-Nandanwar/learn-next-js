import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {useEffect} from 'react'
export default function Home() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))}
    , [])
  return (
    <div className="content-container">
      <h1>Home</h1>
      {}
    </div>
  );
}
