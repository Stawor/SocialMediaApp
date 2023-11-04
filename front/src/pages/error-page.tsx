import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className=" flex flex-col items-center justify-center">
			<h1 className=" text-6xl">Oops!</h1>
			<p className=" text-3xl">Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
