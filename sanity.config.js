import { defineConfig } from 'sanity';
import { deskTool } from "sanity/desk";

export default defineConfig({
    projectId: '3gdrpofi',
    dataset: 'production',
    title: 'a-state-of-antiquity',
    apiVersion: '2022-12-16', 
    basePath: "/admin",
    plugins: [deskTool()]
});

