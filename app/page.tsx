import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <a href="/users">Users link the loooooooooooong way</a>
      <br/>
      <Link href="/users">Users</Link>
    </main>
  );
}
