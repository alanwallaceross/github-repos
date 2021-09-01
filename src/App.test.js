import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(async () => {
  render(<App />);
});

test("renders loading on mount", async () => {
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test("renders header and table after fetching", async () => {
  const header = await waitFor(() => screen.getByText(/github repo list/i));
  await waitFor(() => expect(header).toBeInTheDocument());
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});
