export type Project = {
  node: string;
  name: string;
  service: string;
  description: string;
  repository: string;
  demo: string;
  status: "online" | "standby";
  port: string;
};

export const projects: Project[] = [
  {node: "NODE_01", name: "Learning Logs", service: "LEARNING_LOG", description: "Personal learning topics & entries.", repository: "https://github.com/Denbay0/learning_logs", demo: import.meta.env.VITE_LEARNING_LOGS_URL || "http://localhost:8001", status: "online", port: "8001"},
  {node: "NODE_02", name: "Blog", service: "PUBLIC_BLOG", description: "Public publishing system.", repository: "https://github.com/Denbay0/blog", demo: import.meta.env.VITE_BLOG_URL || "http://localhost:8002", status: "online", port: "8002"},
  {node: "NODE_03", name: "Task Manager", service: "TASK_MANAGER", description: "Personal task management system.", repository: "https://github.com/Denbay0/task_manager", demo: import.meta.env.VITE_TASK_MANAGER_URL || "http://localhost:8003", status: "online", port: "8003"},
];
