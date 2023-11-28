import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/turing"}>Turing</Link>
      <Link href={"/resume"}>Resume</Link>
    </div>
  );
}
