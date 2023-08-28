import ModalToggle from "@/app/ModalToggle";
import { notFound } from "next/navigation";

export const DYNAMIC_PATHS = ["one", "two", "three"];

export default function DynamicPage({ params }: { params: { path: string } }) {
  if (!DYNAMIC_PATHS.includes(params.path)) return notFound();

  return (
    <>
      <h1>Dynamic Page</h1>
      <p>Path: {params.path}</p>
      <ModalToggle />
    </>
  );
}

export async function generateStaticParams() {
  // Here we only pre-render `/dynamic/one`
  return [{ path: "one" }];
}
