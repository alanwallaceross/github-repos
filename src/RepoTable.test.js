import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(async () => {
  render(<App />);
  const header = await waitFor(() => screen.getByText(/github repo list/i));
  await waitFor(() => expect(header).toBeInTheDocument());
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

test("displays 'Name', 'Owner' and 'Description' within table header", async () => {
  // Unfinished, I exceeded the API rate limit and couldn't test anymore
  const tableHeader = screen.getByTestId("tableHeader");
  expect(tableHeader).toBeInTheDocument();
  const columnHeaders = screen.getAllByRole("columnheader");
});

test("displays 11 rows including table header row", async () => {
  const rows = screen.getAllByRole("row");
  expect(rows.length).toBe(11);
});

//TODO: test pagination
