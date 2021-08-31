import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders loading on mount", async () => {
  render(<App />);
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test("renders header and table after fetching", async () => {
  render(<App />);
  const header = await waitFor(() => screen.getByText(/github repo list/i));
  await waitFor(() => expect(header).toBeInTheDocument());
  screen.debug();
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});
