import path from "path";

export default async function loadRoutes(app: any, routes: string[]) {
  for (let i = 0; i < routes.length; i++) {
    const routeFile = path.resolve(__dirname, "..", "routes", routes[i]);
    const routeFileExt = path.extname(routeFile);
    const routePath = path.basename(routeFile, routeFileExt);

    if (routeFileExt.endsWith(".ts") || routeFileExt.endsWith(".js")) {
      const route = await import(routeFile);
      console.log("Route found: ", routePath);
      if (routePath == "index") app.all(`/`, route.default);
      else app.all(`/${routePath}`, route.default);
    }
  }
}
