import { RouteProps, Route } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository"

describe("RouteInMemoryRepository", () => {
  it("should insert a new route", async () => {
    const repository = new RouteInMemoryRepository();

    const routeProps: RouteProps = {
      title: "My Route",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 }
    }

    const route = new Route(routeProps);

    await repository.insert(route);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  })
})