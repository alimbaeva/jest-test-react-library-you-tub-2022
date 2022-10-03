import { MemoryRouter } from "react-router-dom";
import AppRouter from "../routs/AppRouter";

export const RenderWithRouter = (component, initialRoute = '/') => {
  return (
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    )
}