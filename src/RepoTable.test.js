import { render, screen, waitFor, within } from "@testing-library/react";
import App from "./App";

beforeEach(async () => {
  render(<App />);
  const header = await waitFor(() => screen.getByText(/github repo list/i));
  await waitFor(() => expect(header).toBeInTheDocument());
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

test("displays 'Name', 'Owner' and 'Description' within table header", async () => {
  const tableHeader = screen.getByTestId("tableHeader");
  expect(tableHeader).toBeInTheDocument();
  const nameHeader = await within(tableHeader).findByRole("columnheader", {
    name: "Name",
  });
  const ownerHeader = await within(tableHeader).findByRole("columnheader", {
    name: "Owner",
  });
  const descriptionHeader = await within(tableHeader).findByRole(
    "columnheader",
    {
      name: "Description",
    }
  );
  expect(nameHeader).toBeInTheDocument();
  expect(ownerHeader).toBeInTheDocument();
  expect(descriptionHeader).toBeInTheDocument();
});

test("displays 11 rows including table header row", async () => {
  const rows = screen.getAllByRole("row");
  expect(rows.length).toBe(11);
});

//TODO: test pagination
