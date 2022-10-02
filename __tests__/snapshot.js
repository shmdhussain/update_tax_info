import { render } from "@testing-library/react";
import Home from "@/pages/index";

it.skip("renders homepage unchanged", () => {
	const { container } = render(<Home />);
	expect(container).toMatchSnapshot();
});
