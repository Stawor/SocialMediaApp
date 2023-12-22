import ContactsYouMayKnow from "./ContactsYouMayKnow";
import Contacts from "./Contacts";
import { useState } from "react";

export default function RigthBar() {
	const [userUpdate, setUserUpdate] = useState(0);
	return (
		<div className=" lg:flex flex-col gap-20 hidden w-1/4">
			<div>
				<Contacts setUserUpdate={setUserUpdate} userUpdate={userUpdate} />
			</div>
			<div>
				<ContactsYouMayKnow
					setUserUpdate={setUserUpdate}
					userUpdate={userUpdate}
				/>
			</div>
		</div>
	);
}
