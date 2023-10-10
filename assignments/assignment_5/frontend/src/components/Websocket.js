import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
	process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

export const socket = io(URL, {
	autoConnect: false,
});

export default function Websocket({ conn, setSuccess }) {
	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(() => {
		if (conn) {
			socket.connect();
		} else {
			socket.disconnect();
		}
	}, [conn]);

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect() {
			setIsConnected(false);
		}
		function onMatchSuccess(msg) {
			console.log(msg);
			setSuccess(true);
		}

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("matchFound", onMatchSuccess);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("matchFound", onMatchSuccess);
		};
	}, []);
	return <></>;
}
