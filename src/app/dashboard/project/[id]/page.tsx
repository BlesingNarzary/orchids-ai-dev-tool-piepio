import { notFound, redirect } from "next/navigation";
import { requireDbUser } from "@/lib/require-db-user";
import { getGeneratedProject } from "@/lib/vfs";
import { Workspace } from "./Workspace";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const user = await requireDbUser();
  const project = await getGeneratedProject(params.id);

  if (!project) {
    notFound();
  }

  if (project.userId !== user.id) {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-1">
          <h1 className="text-sm font-semibold">
            Project workspace
          </h1>
          <p className="text-xs text-muted-foreground">
            Browse and edit the files Piepio generated for this app.
          </p>
        </div>
      </div>
      <Workspace projectId={project.id} initialFiles={project.files} />
    </div>
  );
}
