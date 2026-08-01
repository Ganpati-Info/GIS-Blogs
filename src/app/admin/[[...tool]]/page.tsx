import { redirect } from "next/navigation";
import Studio from "./Studio";

interface Props {
  params: Promise<{
    tool?: string[];
  }>;
}

export default async function Page({ params }: Props) {
  const { tool } = await params;

  if (!tool?.length) {
    redirect("/admin/structure/dashboard");
  }

  return <Studio />;
}
