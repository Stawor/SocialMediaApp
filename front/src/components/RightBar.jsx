import ContactsYouMayKnow from "./ContactsYouMayKnow";
import Contacts from "./Contacts";

export default function RigthBar() {
	return (
		<div className=" lg:flex flex-col gap-20 hidden w-1/4">
			<div>
				<Contacts />
			</div>
			<div>
				<ContactsYouMayKnow />
			</div>
		</div>
	);
}
